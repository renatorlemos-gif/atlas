import request from 'supertest';
import { app } from '../../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
    // optional db connection logic here if needed
});

afterAll(async () => {
    await prisma.$disconnect();
});

describe('POST /api/v1/formats', () => {
    beforeEach(async () => {
        // clean up tables
        await prisma.formatContact.deleteMany();
        await prisma.formatTag.deleteMany();
        await prisma.format.deleteMany();
    });

    it('Cenário 1: Cadastro completo de formato com sucesso', async () => {
        const payload = {
            original_name: "The Golden Bachelor",
            translated_name: "O Solteiro de Ouro",
            distributor: "Warner Bros.",
            country_of_origin: "USA",
            classification: "UNSCRIPTED",
            tags: ["dating", "reality"],
            synopsis: "Um spin-off de The Bachelor focando em participantes da terceira idade.",
            commercial_contacts: [
                {
                    name: "Jane Doe",
                    email: "jane.doe@wb.example.com"
                }
            ],
            scout: {
                notes: "Forte aderência ao público +50. Visto no Mipcom 2023.",
                external_reference_link: "https://thewit.com/format/12345",
                video_link: "https://vimeo.com/123456789",
                original_release_year: 2023,
                known_adaptations_count: 2
            }
        };

        const res = await request(app).post('/api/v1/formats').send(payload);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.original_name).toBe(payload.original_name);
        expect(res.body.distributor).toBe(payload.distributor);
        expect(res.body.tags).toEqual(payload.tags);
        expect(res.body.commercial_contacts[0].email).toBe(payload.commercial_contacts[0].email);
    });

    it('Cenário 2: Validação de campos obrigatórios ausentes', async () => {
        const payload = {
            translated_name: "O Solteiro de Ouro"
        };

        const res = await request(app).post('/api/v1/formats').send(payload);

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Validation Error');
        expect(res.body.details).toContainEqual({
            field: 'original_name',
            message: 'original_name é obrigatório'
        });
        expect(res.body.details).toContainEqual({
            field: 'distributor',
            message: 'distributor é obrigatório'
        });
    });

    it('Cenário 3: Validação de e-mail e links malformados', async () => {
        const payload = {
            original_name: "Survivor",
            distributor: "Banijay",
            commercial_contacts: [
                { email: "contato-sem-arroba" }
            ],
            scout: {
                video_link: "video_invalido"
            }
        };

        const res = await request(app).post('/api/v1/formats').send(payload);

        expect(res.status).toBe(400);
        expect(res.body.details).toContainEqual({
            field: 'E-mail do Contato',
            message: 'Formato de e-mail inválido'
        });
        expect(res.body.details).toContainEqual({
            field: 'Link de Vídeo',
            message: 'O link informado deve ser uma URL válida'
        });
    });
});
