import request from 'supertest';
import { app } from '../../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {});
afterAll(async () => { await prisma.$disconnect(); });

describe('GET /api/v1/formats (Busca e Filtros)', () => {
    beforeEach(async () => {
        await prisma.formatContact.deleteMany();
        await prisma.formatTag.deleteMany();
        await prisma.format.deleteMany();
        
        await request(app).post('/api/v1/formats').send({
            original_name: "The Golden Bachelor",
            distributor: "Warner Bros.",
            classification: "UNSCRIPTED",
            tags: ["dating", "reality"]
        });
        await request(app).post('/api/v1/formats').send({
            original_name: "MasterChef",
            distributor: "Banijay",
            classification: "UNSCRIPTED",
            tags: ["culinaria", "reality"]
        });
    });

    it('Cenário: Busca por query q', async () => {
        const res = await request(app).get('/api/v1/formats?q=Golden');
        expect(res.status).toBe(200);
        expect(res.body.data.length).toBe(1);
        expect(res.body.data[0].original_name).toBe("The Golden Bachelor");
    });

    it('Cenário: Filtro por tags', async () => {
        const res = await request(app).get('/api/v1/formats?tags=culinaria');
        expect(res.status).toBe(200);
        expect(res.body.data.length).toBe(1);
        expect(res.body.data[0].original_name).toBe("MasterChef");
    });
});

describe('GET & PUT /api/v1/formats/:id (Detalhes e Edição)', () => {
    let formatId: string;
    beforeEach(async () => {
        await prisma.formatContact.deleteMany();
        await prisma.formatTag.deleteMany();
        await prisma.format.deleteMany();
        
        const res = await request(app).post('/api/v1/formats').send({
            original_name: "The Golden Bachelor",
            distributor: "Warner Bros.",
            classification: "UNSCRIPTED",
            tags: ["dating"],
            scout: { known_adaptations_count: 2 }
        });
        formatId = res.body.id;
    });

    it('Cenário 1: Consulta de detalhes de formato com sucesso', async () => {
        const res = await request(app).get(`/api/v1/formats/${formatId}`);
        expect(res.status).toBe(200);
        expect(res.body.original_name).toBe("The Golden Bachelor");
        expect(res.body.scout.known_adaptations_count).toBe(2);
    });

    it('Cenário 2: Consulta com formato inexistente', async () => {
        const res = await request(app).get(`/api/v1/formats/00000000-0000-0000-0000-000000000000`);
        expect(res.status).toBe(404);
        expect(res.body.message).toMatch(/não foi encontrado/);
    });

    it('Cenário 3: Edição e atualização de formato com alteração', async () => {
        const payload = {
            original_name: "The Golden Bachelor",
            distributor: "Warner Bros.",
            scout: { known_adaptations_count: 5 },
            commercial_contacts: [{ name: "John Smith", email: "john.smith@wb.example.com" }]
        };
        const res = await request(app).put(`/api/v1/formats/${formatId}`).send(payload);
        expect(res.status).toBe(200);
        expect(res.body.scout.known_adaptations_count).toBe(5);
        expect(res.body.commercial_contacts[0].name).toBe("John Smith");
    });

    it('Cenário 4: Tentativa de atualização com campos obrigatórios em branco', async () => {
        const payload = {
            original_name: "The Golden Bachelor",
            distributor: ""
        };
        const res = await request(app).put(`/api/v1/formats/${formatId}`).send(payload);
        expect(res.status).toBe(400);
        expect(res.body.details[0].field).toBe('distributor');
    });
});
