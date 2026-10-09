import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

jest.mock('@prisma/client', () => {
  const mockDeep = require('jest-mock-extended').mockDeep;
  return {
    PrismaClient: jest.fn().mockImplementation(() => mockDeep())
  };
});
