import React, { useState } from 'react';

// --- Ícones Simples (SVG inline para evitar problemas com CDN) ---
const SearchIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const PlusIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
const DownloadIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const AlertIcon = () => <svg width="24" height="24" fill="none" stroke="#FFA600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>;

// --- Dados Mockados ---
const formatosMock = [
  { id: 1, original: 'The Voice', translated: 'A Voz', distributor: 'ITV Studios', genre: 'Talento', status: 'Contrato Assinado', date: '2026-09-10' },
  { id: 2, original: 'MasterChef', translated: 'Mestre Cuca', distributor: 'Banijay', genre: 'Culinária', status: 'Em Negociação', date: '2026-10-01' },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // dashboard | formato
  const [formatos, setFormatos] = useState(formatosMock);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [cancelError, setCancelError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancelSubmit = () => {
    if (!cancelReason.trim()) {
      setCancelError(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCancelModal(false);
      setCancelReason('');
      setCancelError(false);
    }, 800);
  };

  const Header = () => (
    <header className="bg-surface-card border-b border-border-subtle p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentScreen('dashboard')}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-globo-yellow via-globo-red to-globo-blue flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <h1 className="text-text-primary text-xl font-bold">Atlas <span className="text-text-secondary font-normal text-sm">Gestão de Formatos</span></h1>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 border border-border-subtle text-text-primary px-4 py-2 rounded-lg hover:bg-surface-elevated transition-colors text-sm font-semibold">
          <DownloadIcon /> Exportar Excel
        </button>
      </div>
    </header>
  );

  const Dashboard = () => (
    <div className="p-8 max-w-7xl mx-auto w-full animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-text-display font-bold">Formatos</h2>
          <p className="text-text-secondary mt-1 text-sm">Gerencie inteligência de mercado e contratos</p>
        </div>
        <button 
          onClick={() => setCurrentScreen('formato')}
          className="flex items-center gap-2 bg-gradient-to-r from-globo-orange to-globo-red text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
          <PlusIcon /> Novo Formato
        </button>
      </div>

      <div className="bg-surface-card border border-border-subtle rounded-md overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border-subtle flex gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-text-secondary"><SearchIcon /></span>
            <input type="text" placeholder="Buscar formatos..." className="w-full bg-surface-elevated border border-border-subtle rounded-sm pl-10 pr-4 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-globo-blue transition-colors" />
          </div>
          <select className="bg-surface-elevated border border-border-subtle rounded-sm px-4 py-2 text-text-primary focus:outline-none focus:border-globo-blue">
            <option>Todos os Status</option>
            <option>Em Negociação</option>
            <option>Contrato Assinado</option>
          </select>
        </div>
        <table className="w-full text-left">
          <thead className="bg-surface-elevated text-text-secondary text-sm border-b border-border-subtle">
            <tr>
              <th className="py-3 px-4 font-semibold">Título Original</th>
              <th className="py-3 px-4 font-semibold">Distribuidor</th>
              <th className="py-3 px-4 font-semibold">Gênero</th>
              <th className="py-3 px-4 font-semibold">Status Recente</th>
              <th className="py-3 px-4 font-semibold">Última Modificação</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {formatos.map(f => (
              <tr key={f.id} className="border-b border-border-subtle hover:bg-surface-elevated cursor-pointer transition-colors" onClick={() => setCurrentScreen('formato')}>
                <td className="py-3 px-4 font-semibold text-text-primary">{f.original}</td>
                <td className="py-3 px-4 text-text-secondary">{f.distributor}</td>
                <td className="py-3 px-4">
                  <span className="bg-surface-elevated border border-border-subtle px-2 py-1 rounded-sm text-xs">{f.genre}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-sm text-xs font-semibold ${f.status === 'Contrato Assinado' ? 'bg-status-success/10 text-status-success' : 'bg-status-warning/10 text-status-warning'}`}>
                    {f.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-text-secondary">{f.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const FormatoDetail = () => (
    <div className="p-8 max-w-5xl mx-auto w-full animate-fade-in flex gap-8">
      <div className="flex-1 space-y-6">
        <div>
          <button onClick={() => setCurrentScreen('dashboard')} className="text-text-secondary hover:text-text-primary text-sm mb-4 inline-block">&larr; Voltar</button>
          <h2 className="text-text-heading-1 font-bold">The Voice (A Voz)</h2>
          <p className="text-text-secondary mt-1">ITV Studios • Talento</p>
        </div>

        <div className="bg-surface-card border border-border-subtle rounded-md p-6 shadow-sm space-y-4">
          <h3 className="text-text-heading-3 font-semibold border-b border-border-subtle pb-2 mb-4">Negociação Vigente (Temporada 1)</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-text-secondary text-sm block mb-1">Status da Negociação</label>
              <select 
                className="w-full bg-surface-elevated border border-border-subtle rounded-sm px-3 py-2 text-text-primary focus:outline-none focus:border-globo-blue"
                onChange={(e) => {
                  if (e.target.value === 'On Hold' || e.target.value === 'Cancelada') setShowCancelModal(true);
                }}
                defaultValue="Em Negociação"
              >
                <option>Em Negociação</option>
                <option>Contrato em Assinatura</option>
                <option>Contrato Assinado</option>
                <option value="On Hold">On Hold</option>
                <option value="Cancelada">Cancelada</option>
              </select>
            </div>
            <div>
              <label className="text-text-secondary text-sm block mb-1">Demandante</label>
              <input type="text" value="Estúdios Globo" readOnly className="w-full bg-surface-elevated/50 border border-border-subtle rounded-sm px-3 py-2 text-text-primary opacity-70 cursor-not-allowed" />
            </div>
            <div>
              <label className="text-text-secondary text-sm block mb-1">ID Conecta</label>
              <input type="text" placeholder="CN-00123" className="w-full bg-surface-elevated border border-border-subtle rounded-sm px-3 py-2 text-text-primary focus:outline-none focus:border-globo-blue" />
            </div>
            <div>
              <label className="text-text-secondary text-sm block mb-1">Taxa de Câmbio Estimada (BRL)</label>
              <input type="number" placeholder="5.12" className="w-full bg-surface-elevated border border-border-subtle rounded-sm px-3 py-2 text-text-primary focus:outline-none focus:border-globo-blue" />
            </div>
          </div>
          
          <div className="pt-4 flex justify-end gap-3 border-t border-border-subtle mt-6">
            <button className="border border-border-subtle text-text-primary font-semibold py-2 px-4 rounded-lg hover:bg-surface-elevated transition-colors">Cancelar</button>
            <button className="bg-globo-blue text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">Salvar Alterações</button>
          </div>
        </div>
      </div>
      
      {/* Modal de Cancelamento */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-surface-card border border-border-subtle rounded-lg p-6 max-w-md w-full shadow-lg">
            <div className="flex gap-3 items-start mb-4">
              <AlertIcon />
              <div>
                <h3 className="text-text-heading-3 font-semibold">Justificativa Obrigatória</h3>
                <p className="text-text-secondary text-sm mt-1">Ao mover o status para On Hold ou Cancelada, é necessário registrar o motivo.</p>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="text-text-secondary text-sm block mb-1">Motivo do Declínio/Pausa *</label>
              <textarea 
                value={cancelReason}
                onChange={(e) => { setCancelReason(e.target.value); setCancelError(false); }}
                className={`w-full bg-surface-elevated border rounded-sm px-3 py-2 text-text-primary focus:outline-none h-24 resize-none ${cancelError ? 'border-status-error' : 'border-border-subtle focus:border-globo-blue'}`}
                placeholder="Ex: Valores acima do budget aprovado..."
              ></textarea>
              {cancelError && <span className="text-status-error text-xs mt-1 block">Este campo é obrigatório.</span>}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowCancelModal(false)} className="border border-border-subtle text-text-primary py-2 px-4 rounded-lg hover:bg-surface-elevated text-sm font-semibold">Cancelar</button>
              <button 
                onClick={handleCancelSubmit} 
                disabled={loading}
                className="bg-status-error text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold flex justify-center items-center"
              >
                {loading ? 'Salvando...' : 'Confirmar Declínio'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-surface-bg font-sans selection:bg-globo-blue/30 w-full">
      <Header />
      <main className="w-full flex-1">
        {currentScreen === 'dashboard' ? <Dashboard /> : <FormatoDetail />}
      </main>
    </div>
  );
}
