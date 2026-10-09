import { Router, Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      original_name,
      translated_name,
      distributor,
      country_of_origin,
      classification,
      tags,
      synopsis,
      commercial_contacts,
      scout,
    } = req.body;

    const errors: any[] = [];
    if (!original_name) {
      errors.push({ field: 'original_name', message: 'original_name é obrigatório' });
    }
    if (!distributor) {
      errors.push({ field: 'distributor', message: 'distributor é obrigatório' });
    }
    if (commercial_contacts) {
        for (const contact of commercial_contacts) {
            if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
                errors.push({ field: 'E-mail do Contato', message: 'Formato de e-mail inválido' });
                break;
            }
        }
    }
    if (scout && scout.video_link && !/^https?:\/\//.test(scout.video_link)) {
        errors.push({ field: 'Link de Vídeo', message: 'O link informado deve ser uma URL válida' });
    }

    if (errors.length > 0) {
      res.status(400).json({
        error: 'Validation Error',
        message: 'Dados obrigatórios ausentes ou inválidos',
        details: errors,
      });
      return;
    }

    const format = await prisma.format.create({
      data: {
        original_name,
        translated_name,
        distributor,
        country_of_origin,
        classification,
        synopsis,
        scout_notes: scout?.notes,
        external_reference_link: scout?.external_reference_link,
        video_link: scout?.video_link,
        original_release_year: scout?.original_release_year,
        known_adaptations_count: scout?.known_adaptations_count,
        tags: {
          create: tags?.map((tag: string) => ({ tag })) || [],
        },
        contacts: {
          create: commercial_contacts?.map((contact: any) => ({
            name: contact.name,
            email: contact.email,
          })) || [],
        },
      },
      include: {
        tags: true,
        contacts: true,
      },
    });

    res.status(201).json({
      id: format.id,
      original_name: format.original_name,
      translated_name: format.translated_name,
      distributor: format.distributor,
      country_of_origin: format.country_of_origin,
      classification: format.classification,
      synopsis: format.synopsis,
      tags: format.tags.map((t: any) => t.tag),
      commercial_contacts: format.contacts.map((c: any) => ({
        id: c.id,
        name: c.name,
        email: c.email,
      })),
      scout: {
        notes: format.scout_notes,
        external_reference_link: format.external_reference_link,
        video_link: format.video_link,
        original_release_year: format.original_release_year,
        known_adaptations_count: format.known_adaptations_count,
      },
      created_at: format.created_at,
      updated_at: format.updated_at,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req: Request, res: Response) => {
    const { q, distributor, classification, tags, page = '1', limit = '20' } = req.query;

    const whereClause: any = {};

    if (q) {
        const queryStr = String(q);
        whereClause.OR = [
            { original_name: { contains: queryStr, mode: 'insensitive' } },
            { translated_name: { contains: queryStr, mode: 'insensitive' } },
            { synopsis: { contains: queryStr, mode: 'insensitive' } },
            { distributor: { contains: queryStr, mode: 'insensitive' } },
        ];
    }
    
    if (distributor) {
        whereClause.distributor = String(distributor);
    }
    
    if (classification) {
        whereClause.classification = String(classification) as any;
    }
    
    if (tags) {
        const tagList = String(tags).split(',');
        whereClause.tags = {
            some: {
                tag: { in: tagList }
            }
        };
    }

    const pageNum = parseInt(String(page), 10) || 1;
    const limitNum = parseInt(String(limit), 10) || 20;

    try {
        const [total_count, formats] = await Promise.all([
            prisma.format.count({ where: whereClause }),
            prisma.format.findMany({
                where: whereClause,
                skip: (pageNum - 1) * limitNum,
                take: limitNum,
                include: { tags: true },
                orderBy: { created_at: 'desc' }
            })
        ]);

        const data = formats.map((f: any) => ({
            id: f.id,
            original_name: f.original_name,
            translated_name: f.translated_name,
            classification: f.classification,
            distributor: f.distributor,
            tags: f.tags.map((t: any) => t.tag),
            created_at: f.created_at
        }));

        res.status(200).json({
            data,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total_count,
                total_pages: Math.ceil(total_count / limitNum)
            }
        });
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const format = await prisma.format.findUnique({
            where: { id },
            include: { tags: true, contacts: true }
        });

        if (!format) {
            res.status(404).json({ error: "Not Found", message: "Formato com o identificador informado não foi encontrado." });
            return;
        }

        res.status(200).json({
            id: format.id,
            original_name: format.original_name,
            translated_name: format.translated_name,
            distributor: format.distributor,
            country_of_origin: format.country_of_origin,
            classification: format.classification,
            synopsis: format.synopsis,
            tags: format.tags.map((t: any) => t.tag),
            commercial_contacts: format.contacts.map((c: any) => ({
                id: c.id,
                name: c.name,
                email: c.email,
            })),
            scout: {
                notes: format.scout_notes,
                external_reference_link: format.external_reference_link,
                video_link: format.video_link,
                original_release_year: format.original_release_year,
                known_adaptations_count: format.known_adaptations_count,
            },
            created_at: format.created_at,
            updated_at: format.updated_at,
        });
    } catch (e) {
        res.status(400).json({ error: "Bad Request" });
    }
});

router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const {
            original_name,
            translated_name,
            distributor,
            country_of_origin,
            classification,
            tags,
            synopsis,
            commercial_contacts,
            scout,
        } = req.body;

        if (!original_name || original_name.trim() === '') {
             res.status(400).json({
                error: 'Validation Error',
                details: [{ field: 'original_name', message: 'original_name é obrigatório' }]
             });
             return;
        }

        if (!distributor || distributor.trim() === '') {
             res.status(400).json({
                error: 'Validation Error',
                details: [{ field: 'distributor', message: 'Distribuidor é obrigatório' }]
             });
             return;
        }

        const format = await prisma.format.findUnique({ where: { id } });
        if (!format) {
            res.status(404).json({ error: "Not Found", message: "Formato com o identificador informado não foi encontrado." });
            return;
        }

        const updatedFormat = await prisma.$transaction(async (tx: any) => {
            // Delete old tags and contacts
            await tx.formatTag.deleteMany({ where: { format_id: id } });
            await tx.formatContact.deleteMany({ where: { format_id: id } });

            return tx.format.update({
                where: { id },
                data: {
                    original_name,
                    translated_name,
                    distributor,
                    country_of_origin,
                    classification,
                    synopsis,
                    scout_notes: scout?.notes,
                    external_reference_link: scout?.external_reference_link,
                    video_link: scout?.video_link,
                    original_release_year: scout?.original_release_year,
                    known_adaptations_count: scout?.known_adaptations_count,
                    tags: {
                        create: tags?.map((tag: string) => ({ tag })) || [],
                    },
                    contacts: {
                        create: commercial_contacts?.map((contact: any) => ({
                            name: contact.name,
                            email: contact.email,
                        })) || [],
                    },
                },
                include: { tags: true, contacts: true }
            });
        });

        res.status(200).json({
            id: updatedFormat.id,
            original_name: updatedFormat.original_name,
            translated_name: updatedFormat.translated_name,
            distributor: updatedFormat.distributor,
            country_of_origin: updatedFormat.country_of_origin,
            classification: updatedFormat.classification,
            synopsis: updatedFormat.synopsis,
            tags: updatedFormat.tags.map((t: any) => t.tag),
            commercial_contacts: updatedFormat.contacts.map((c: any) => ({
                id: c.id,
                name: c.name,
                email: c.email,
            })),
            scout: {
                notes: updatedFormat.scout_notes,
                external_reference_link: updatedFormat.external_reference_link,
                video_link: updatedFormat.video_link,
                original_release_year: updatedFormat.original_release_year,
                known_adaptations_count: updatedFormat.known_adaptations_count,
            },
            created_at: updatedFormat.created_at,
            updated_at: updatedFormat.updated_at,
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as formatsRouter };
