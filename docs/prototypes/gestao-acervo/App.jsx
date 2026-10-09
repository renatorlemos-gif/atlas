import React, { useState } from 'react';
import { Search, Plus, Save, AlertCircle, CheckCircle, Video, Link as LinkIcon, FileText } from 'lucide-react';

export default function GestaoAcervo() {
  const [view, setView] = useState('list'); // 'list', 'create', 'details'
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ title: '', distributor: '', tags: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Título Original é obrigatório';
    if (!formData.distributor) newErrors.distributor = 'Distribuidor é obrigatório';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setView('details');
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] p-6 font-sans">
      <header className="mb-8 flex justify-between items-center border-b border-[#333333] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#E0E0E0]">Atlas / Gestão de Acervo</h1>
          <p className="text-sm text-[#9E9E9E]">Catálogo de propriedades intelectuais e inteligência de mercado</p>
        </div>
        {view === 'list' && (
          <button 
            onClick={() => setView('create')}
            className="flex items-center gap-2 bg-gradient-to-r from-[#FFA600] to-[#FF3132] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus size={18} /> Novo Formato
          </button>
        )}
        {view !== 'list' && (
          <button 
            onClick={() => setView('list')}
            className="border border-[#333333] text-[#E0E0E0] font-semibold py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
          >
            Voltar para o Acervo
          </button>
        )}
      </header>

      {/* TOAST SUCCESS */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-[#00C46D] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
          <CheckCircle size={20} /> Formato salvo com sucesso!
        </div>
      )}

      {/* VIEW: LIST */}
      {view === 'list' && (
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-[#9E9E9E]" size={20} />
              <input 
                type="text" 
                placeholder="Buscar por título, distribuidor ou tag..." 
                className="w-full bg-[#1E1E1E] border border-[#333333] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#00B8FF] text-[#E0E0E0]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1E1E1E] border border-[#333333] rounded-md p-5 hover:border-[#00B8FF] cursor-pointer transition-colors" onClick={() => setView('details')}>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-[#2A2A2A] text-xs px-2 py-1 rounded text-[#9E9E9E]">Non-Scripted</span>
                <span className="text-[#9E9E9E] text-xs">Ano: 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-1">The Traitors</h3>
              <p className="text-sm text-[#9E9E9E] mb-4">All3Media • Holanda</p>
              <div className="flex gap-2">
                <span className="text-[10px] uppercase border border-[#333333] px-2 py-1 rounded-full text-[#9E9E9E]">Reality</span>
                <span className="text-[10px] uppercase border border-[#333333] px-2 py-1 rounded-full text-[#9E9E9E]">Estratégia</span>
              </div>
            </div>
            <div className="bg-[#1E1E1E] border border-[#333333] rounded-md p-5 flex flex-col items-center justify-center text-center opacity-50">
               <FileText className="mb-2 text-[#9E9E9E]" size={32} />
               <p className="text-[#9E9E9E]">Nenhum outro formato encontrado.</p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: CREATE */}
      {view === 'create' && (
        <div className="bg-[#1E1E1E] border border-[#333333] rounded-lg p-6 max-w-4xl mx-auto shadow-sm">
          <h2 className="text-xl font-bold mb-6 border-b border-[#333333] pb-2">Cadastrar Novo Formato (IP)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-[#9E9E9E] text-sm block mb-1">Título Original *</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className={`w-full bg-[#121212] border ${errors.title ? 'border-[#FF3132]' : 'border-[#333333]'} rounded-sm px-3 py-2 focus:outline-none focus:border-[#00B8FF]`}
                placeholder="Ex: The Masked Singer"
              />
              {errors.title && <p className="text-[#FF3132] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.title}</p>}
            </div>
            <div>
              <label className="text-[#9E9E9E] text-sm block mb-1">Distribuidor *</label>
              <input
                type="text"
                value={formData.distributor}
                onChange={e => setFormData({...formData, distributor: e.target.value})}
                className={`w-full bg-[#121212] border ${errors.distributor ? 'border-[#FF3132]' : 'border-[#333333]'} rounded-sm px-3 py-2 focus:outline-none focus:border-[#00B8FF]`}
                placeholder="Ex: Fremantle"
              />
              {errors.distributor && <p className="text-[#FF3132] text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.distributor}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="text-[#9E9E9E] text-sm block mb-1">Sinopse (Scout)</label>
              <textarea
                rows={4}
                className="w-full bg-[#121212] border border-[#333333] rounded-sm px-3 py-2 focus:outline-none focus:border-[#00B8FF]"
                placeholder="Resumo do formato..."
              ></textarea>
            </div>
            <div>
              <label className="text-[#9E9E9E] text-sm block mb-1">Link de Vídeo (Vimeo/YT)</label>
              <div className="relative">
                <Video className="absolute left-3 top-2.5 text-[#9E9E9E]" size={16} />
                <input type="text" className="w-full bg-[#121212] border border-[#333333] rounded-sm pl-9 pr-3 py-2 focus:outline-none focus:border-[#00B8FF]" placeholder="https://" />
              </div>
            </div>
            <div>
              <label className="text-[#9E9E9E] text-sm block mb-1">Link The Wit</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-2.5 text-[#9E9E9E]" size={16} />
                <input type="text" className="w-full bg-[#121212] border border-[#333333] rounded-sm pl-9 pr-3 py-2 focus:outline-none focus:border-[#00B8FF]" placeholder="https://" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button 
              onClick={() => setView('list')}
              className="text-[#E0E0E0] font-semibold py-2 px-4 rounded-lg hover:bg-[#2A2A2A] transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-2 bg-[#00B8FF] text-[#121212] font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-spin border-2 border-[#121212] border-t-transparent rounded-full w-4 h-4 inline-block"></span>
              ) : <Save size={18} />}
              {loading ? 'Salvando...' : 'Salvar Formato'}
            </button>
          </div>
        </div>
      )}

      {/* VIEW: DETAILS */}
      {view === 'details' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#1E1E1E] border border-[#333333] rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
             <div>
                <div className="flex items-center gap-3 mb-2">
                   <h2 className="text-3xl font-bold text-[#E0E0E0]">{formData.title || 'The Traitors'}</h2>
                   <span className="bg-[#2A2A2A] text-xs px-2 py-1 rounded text-[#9E9E9E]">Non-Scripted</span>
                </div>
                <p className="text-[#9E9E9E]">Distribuidor: <strong className="text-[#E0E0E0]">{formData.distributor || 'All3Media'}</strong> • País: Holanda</p>
             </div>
             <button className="border border-[#333333] text-[#E0E0E0] font-semibold py-2 px-4 rounded-lg hover:bg-[#2A2A2A] transition-colors">
               Editar Formato
             </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 bg-[#1E1E1E] border border-[#333333] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 border-b border-[#333333] pb-2">Sinopse e Informações</h3>
                <p className="text-sm text-[#9E9E9E] leading-relaxed mb-6">
                  Jogo psicológico de estratégia onde "fieis" tentam identificar os "traidores" entre eles antes que sejam eliminados durante a noite.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-[#00B8FF] text-sm hover:underline"><Video size={16} /> Vídeo Pitch</a>
                  <a href="#" className="flex items-center gap-2 text-[#00B8FF] text-sm hover:underline"><LinkIcon size={16} /> Link The Wit</a>
                </div>
             </div>
             <div className="bg-[#1E1E1E] border border-[#333333] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 border-b border-[#333333] pb-2">Scout & Contatos</h3>
                <ul className="space-y-4 text-sm">
                   <li>
                     <span className="block text-[#9E9E9E] text-xs">Contato Comercial</span>
                     <span className="text-[#E0E0E0]">Jane Doe (jane@all3.com)</span>
                   </li>
                   <li>
                     <span className="block text-[#9E9E9E] text-xs">Lançamento Original</span>
                     <span className="text-[#E0E0E0]">2021</span>
                   </li>
                   <li>
                     <span className="block text-[#9E9E9E] text-xs">Tags</span>
                     <div className="flex gap-2 mt-1">
                        <span className="text-[10px] uppercase border border-[#333333] px-2 py-1 rounded-full text-[#9E9E9E]">Reality</span>
                        <span className="text-[10px] uppercase border border-[#333333] px-2 py-1 rounded-full text-[#9E9E9E]">Estratégia</span>
                     </div>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
