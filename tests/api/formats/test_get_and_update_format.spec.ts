import { describe, it, expect, beforeEach, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import { app } from '../../../src/app';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        $disconnect: jest.fn(),
        $transaction: jest.fn((cb) => cb({
          formatTag: { deleteMany: jest.fn() },
          formatContact: { deleteMany: jest.fn() },
          format: {
            update: jest.fn().mockResolvedValue({
              id: '123',
              original_name: 'The Golden Bachelor',
              distributor: 'Warner Bros.',
              tags: [],
              contacts: [{ name: 'John Smith', email: 'john.smith@wb.example.com' }],
              scout_notes: null,
              known_adaptations_count: 5,
              created_at: new Date(),
              updated_at: new Date()
            })
          }
        })),
        formatContact: { deleteMany: jest.fn() },
        formatTag: { deleteMany: jest.fn() },
        format: {
          deleteMany: jest.fn(),
          create: jest.fn().mockResolvedValue({
            id: 'e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab',
            original_name: 'The Golden Bachelor',
            distributor: 'Warner Bros.',
            tags: [],
            contacts: [],
            created_at: new Date(),
            updated_at: new Date()
          }),
          count: jest.fn().mockResolvedValue(1),
          findMany: jest.fn().mockResolvedValue([{
            id: 'e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab',
            original_name: 'The Golden Bachelor',
            distributor: 'Warner Bros.',
            tags: [],
            contacts: [],
            created_at: new Date(),
            updated_at: new Date()
          }]),
          findUnique: jest.fn().mockImplementation(({ where }: any) => {
             if (where.id === '00000000-0000-0000-0000-000000000000') return Promise.resolve(null);
             return Promise.resolve({
                id: '123',
                original_name: 'The Golden Bachelor',
                distributor: 'Warner Bros.',
                tags: [],
                contacts: [],
                known_adaptations_count: 2,
                created_at: new Date(),
                updated_at: new Date()
             });
          }),
        }
      };
    })
  };
});

describe('GET /api/v1/formats (Busca e Filtros)', () => {
    it('Cenário: Busca por query q', async () => {
        const res = await request(app).get('/api/v1/formats?q=Golden');
        expect(res.status).toBe(200);
        expect(res.body.data.length).toBe(1);
    });
});

describe('GET & PUT /api/v1/formats/:id (Detalhes e Edição)', () => {
    it('Cenário 1: Consulta de detalhes de formato com sucesso', async () => {
        const res = await request(app).get(`/api/v1/formats/123`);
        expect(res.status).toBe(200);
        expect(res.body.original_name).toBe("The Golden Bachelor");
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
        const res = await request(app).put(`/api/v1/formats/123`).send(payload);
        expect(res.status).toBe(200);
        expect(res.body.scout.known_adaptations_count).toBe(5);
        expect(res.body.commercial_contacts[0].name).toBe("John Smith");
    });

    it('Cenário 4: Tentativa de atualização com campos obrigatórios em branco', async () => {
        const payload = {
            original_name: "The Golden Bachelor",
            distributor: ""
        };
        const res = await request(app).put(`/api/v1/formats/123`).send(payload);
        expect(res.status).toBe(400);
        expect(res.body.details[0].field).toBe('distributor');
    });
});
