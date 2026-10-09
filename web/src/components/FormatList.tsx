import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const FormatList: React.FC = () => {
    const [formats, setFormats] = useState<any[]>([]);
    const [q, setQ] = useState('');
    const [distributor, setDistributor] = useState('');
    const [classification, setClassification] = useState('');

    const fetchFormats = async () => {
        try {
            const params = new URLSearchParams();
            if (q) params.append('q', q);
            if (distributor) params.append('distributor', distributor);
            if (classification) params.append('classification', classification);

            const res = await axios.get(`http://localhost:3000/api/v1/formats?${params.toString()}`);
            setFormats(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFormats();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchFormats();
    };

    return (
        <div>
            <h1>Acervo de Formatos</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Buscar por termo..." 
                    value={q} 
                    onChange={e => setQ(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Distribuidor" 
                    value={distributor} 
                    onChange={e => setDistributor(e.target.value)} 
                />
                <select value={classification} onChange={e => setClassification(e.target.value)}>
                    <option value="">Todas as classificações</option>
                    <option value="SCRIPTED">Scripted</option>
                    <option value="UNSCRIPTED">Unscripted</option>
                </select>
                <button type="submit">Buscar</button>
            </form>

            <ul>
                {formats.length === 0 ? (
                    <li>Nenhum formato encontrado para os filtros selecionados</li>
                ) : (
                    formats.map(f => (
                        <li key={f.id}>
                            <Link to={`/formats/${f.id}`}>{f.original_name}</Link> - {f.distributor} ({f.classification})
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
