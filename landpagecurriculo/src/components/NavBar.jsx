import { useState, useRef } from 'react';

export default function Navbar() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Função para lidar com o upload de arquivos
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    
    // Verificar se há espaço para novos arquivos
    if (uploadedFiles.length + files.length > 5) {
      alert('Você pode anexar no máximo 5 arquivos');
      return;
    }

    // Processar cada arquivo
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      file: file
    }));

    // Adicionar novos arquivos à lista existente
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Limpar o input de arquivo
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Função para remover um arquivo
  const handleRemoveFile = (id) => {
    // Revogar a URL do objeto para evitar vazamentos de memória
    const fileToRemove = uploadedFiles.find(file => file.id === id);
    if (fileToRemove && fileToRemove.url) {
      URL.revokeObjectURL(fileToRemove.url);
    }
    
    // Remover o arquivo da lista
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  // Função para formatar o tamanho do arquivo
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Função para obter ícone baseado no tipo de arquivo
  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('word') || fileType.includes('document')) return '📝';
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('zip') || fileType.includes('compressed')) return '📦';
    if (fileType.includes('text')) return '📃';
    return '📎';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-banner-wrapper">
          {/* Banner de fundo */}
          <div className="nav-banner">
            <img 
              src="./imagens/banner.png" 
              alt="Banner Tecnologia e Dados" 
              className="banner-image"
            />
            <div className="banner-overlay"></div>
          </div>
          
          {/* Conteúdo do perfil sobre o banner */}
          <div className="nav-profile-overlay">
            <div className="nav-profile">
              <div className="profile-image-wrapper">
                <img
                  src="./imagens/perfil.png"
                  className="nav-icon"
                  alt="Foto de perfil Lucas Martins"
                />
              </div>
              <div className="nav-text">
                <h1 className="nav-name">Lucas Martins Coelho</h1>
                <h2 className="nav-title">Analista de Sistemas</h2>
                <p className="nav-location">Araçatuba - SP</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="nav-contacts">
          <a href="tel:+5562986343341" className="nav-contact-link">
            📱 (62) 98634-3341
          </a>
          <a href="mailto:danilucascoe@gmail.com" className="nav-contact-link">
            ✉️ danilucascoe@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/lucas-martins-29a06a72/" 
             className="nav-contact-link" 
             target="_blank" 
             rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://github.com/lucmarc02" 
             className="nav-contact-link" 
             target="_blank" 
             rel="noopener noreferrer">
            🔗 GitHub
          </a>

          {/* Upload de Arquivos */}
          <div className="file-upload-container">
            <input
              type="file"
              id="file-upload"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload" className="file-upload-button">
              <span className="file-upload-icon">📎</span>
              Anexar Arquivos
            </label>
            <span className="file-upload-hint">(Máx: 5 arquivos)</span>
          </div>
        </div>

        {/* Lista de Arquivos Anexados */}
        {uploadedFiles.length > 0 && (
          <div className="uploaded-files-container">
            <h4 className="uploaded-files-title">Arquivos Anexados ({uploadedFiles.length}/5)</h4>
            <div className="uploaded-files-list">
              {uploadedFiles.map(file => (
                <div key={file.id} className="uploaded-file-item">
                  <div className="file-info">
                    <span className="file-icon">{getFileIcon(file.type)}</span>
                    <div className="file-details">
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">{formatFileSize(file.size)}</span>
                    </div>
                  </div>
                  <div className="file-actions">
                    <a 
                      href={file.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="file-view-link"
                      title="Visualizar arquivo"
                    >
                      👁️
                    </a>
                    <button 
                      onClick={() => handleRemoveFile(file.id)}
                      className="file-remove-button"
                      title="Remover arquivo"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="uploaded-files-footer">
              <span className="files-total-size">
                Total: {formatFileSize(uploadedFiles.reduce((total, file) => total + file.size, 0))}
              </span>
              <button 
                onClick={() => setUploadedFiles([])}
                className="clear-all-files-button"
                disabled={uploadedFiles.length === 0}
              >
                Limpar Todos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}