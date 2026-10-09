import { describe, it, expect, beforeEach, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import { app } from '../../../src/app';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        $disconnect: jest.fn(),
        formatContact: { deleteMany: jest.fn() },
        formatTag: { deleteMany: jest.fn() },
        format: {
          deleteMany: jest.fn(),
          create: jest.fn().mockResolvedValue({
            id: 'e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab',
            original_name: 'The Golden Bachelor',
            distributor: 'Warner Bros.',
            tags: [],
            contacts: [{ email: 'jane.doe@wb.example.com' }],
            created_at: new Date(),
            updated_at: new Date()
          }),
        }
      };
    })
  };
});

describe('POST /api/v1/formats', () => {
    it('Cenário 1: Cadastro completo de formato com sucesso', async () => {
        const payload = {
            original_name: "The Golden Bachelor",
            distributor: "Warner Bros.",
            commercial_contacts: [{ email: "jane.doe@wb.example.com" }]
        };
        const res = await request(app).post('/api/v1/formats').send(payload);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.commercial_contacts[0].email).toBe(payload.commercial_contacts[0].email);
    });

    it('Cenário 2: Validação de campos obrigatórios ausentes', async () => {
        const res = await request(app).post('/api/v1/formats').send({});
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Validation Error');
    });

    it('Cenário 3: Validação de e-mail e links malformados', async () => {
        const payload = {
            original_name: "Survivor",
            distributor: "Banijay",
            commercial_contacts: [{ email: "contato-sem-arroba" }]
        };
        const res = await request(app).post('/api/v1/formats').send(payload);
        expect(res.status).toBe(400);
    });
});
