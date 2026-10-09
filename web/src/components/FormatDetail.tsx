import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const FormatDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [format, setFormat] = useState<any>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchFormat = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/formats/${id}`);
                setFormat(res.data);
            } catch (err: any) {
                if (err.response?.status === 404) {
                    setNotFound(true);
                }
            }
        };
        fetchFormat();
    }, [id]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!format.distributor || format.distributor.trim() === '') {
            setError('Distribuidor é obrigatório');
            return;
        }

        try {
            const res = await axios.put(`http://localhost:3000/api/v1/formats/${id}`, format);
            setFormat(res.data);
            setIsEditing(false);
            setError('');
            alert('Formato atualizado com sucesso');
        } catch (err: any) {
            setError('Erro ao salvar as alterações');
        }
    };

    if (notFound) {
        return (
            <div>
                <h2>Formato não encontrado ou inexistente</h2>
                <button onClick={() => navigate('/formats')}>Voltar ao Acervo</button>
            </div>
        );
    }

    if (!format) return <div>Carregando...</div>;

    return (
        <div>
            <h1>{format.original_name}</h1>
            
            {error && <div style={{ color: 'red', border: '1px solid red' }}>{error}</div>}

            {!isEditing ? (
                <div>
                    <p><strong>Distribuidor:</strong> {format.distributor}</p>
                    <p><strong>Classificação:</strong> {format.classification}</p>
                    <p><strong>Adaptações:</strong> {format.scout?.known_adaptations_count}</p>
                    
                    {format.scout?.video_link && (
                        <a href={format.scout.video_link} target="_blank" rel="noopener noreferrer">
                            Link de Vídeo
                        </a>
                    )}
                    
                    <button onClick={() => setIsEditing(true)}>Editar Formato</button>
                </div>
            ) : (
                <form onSubmit={handleSave}>
                    <label>
                        Distribuidor:
                        <input 
                            type="text" 
                            value={format.distributor}
                            style={{ borderColor: error ? 'red' : 'initial' }}
                            onChange={e => setFormat({...format, distributor: e.target.value})} 
                        />
                    </label>
                    <br />
                    <label>
                        Quantidade de Adaptações:
                        <input 
                            type="number" 
                            value={format.scout?.known_adaptations_count || 0}
                            onChange={e => setFormat({
                                ...format, 
                                scout: { ...format.scout, known_adaptations_count: parseInt(e.target.value) }
                            })} 
                        />
                    </label>
                    <br />
                    <button type="submit">Salvar Alterações</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
                </form>
            )}
        </div>
    );
};
