import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormatDetail } from '../components/FormatDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('FormatDetail (US-003)', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Cenário 1: Consulta de detalhes de formato com sucesso', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                id: 'e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab',
                original_name: 'The Golden Bachelor',
                distributor: 'Warner Bros.',
                scout: { video_link: 'https://vimeo.com/123456789' }
            }
        });

        render(
            <MemoryRouter initialEntries={['/formats/e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab']}>
                <Routes>
                    <Route path="/formats/:id" element={<FormatDetail />} />
                </Routes>
            </MemoryRouter>
        );

        expect(await screen.findByText('The Golden Bachelor')).toBeInTheDocument();
        expect(screen.getByText('Warner Bros.')).toBeInTheDocument();
        expect(screen.getByText('Editar Formato')).toBeInTheDocument();
    });

    it('Cenário 2: Consulta com formato inexistente (Sad Path - 404)', async () => {
        mockedAxios.get.mockRejectedValueOnce({
            response: { status: 404 }
        });

        render(
            <MemoryRouter initialEntries={['/formats/00000000-0000-0000-0000-000000000000']}>
                <Routes>
                    <Route path="/formats/:id" element={<FormatDetail />} />
                </Routes>
            </MemoryRouter>
        );

        expect(await screen.findByText('Formato não encontrado ou inexistente')).toBeInTheDocument();
        expect(screen.getByText('Voltar ao Acervo')).toBeInTheDocument();
    });

    it('Cenário 4: Tentativa de atualização com campos obrigatórios em branco', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: {
                id: '123',
                original_name: 'The Golden Bachelor',
                distributor: 'Warner Bros.',
            }
        });

        render(
            <MemoryRouter initialEntries={['/formats/123']}>
                <Routes>
                    <Route path="/formats/:id" element={<FormatDetail />} />
                </Routes>
            </MemoryRouter>
        );

        await screen.findByText('The Golden Bachelor');
        fireEvent.click(screen.getByText('Editar Formato'));
        
        const input = screen.getByLabelText('Distribuidor:');
        fireEvent.change(input, { target: { value: '' } });
        
        fireEvent.click(screen.getByText('Salvar Alterações'));
        
        expect(await screen.findByText('Distribuidor é obrigatório')).toBeInTheDocument();
        expect(input).toHaveStyle('border-color: red');
    });
});
