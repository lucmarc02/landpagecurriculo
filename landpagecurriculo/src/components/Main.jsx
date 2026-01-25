export default function Main() {
  const CERTIFICADOPOS_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1gkwEaosxgo7azFgOvRk5NZVDnRuJ1ymk/view?usp=sharing";
  const DIPLOMATECNICO_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/18nQb5X3U5DPurQjIPlXpbOtdVB24QqHj/view?usp=sharing";
  const DIPLOMASUPERIOR_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1Igf1MpuhEcOoO1hz_1XZw_lJY_se8-S2/view?usp=sharing";
  const CERTIFICADOREACT_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1xGsfm0KtD4AzkUVkdWaYqUI9Vp60yXK8/view?usp=sharing";
  const CERTIFICADOJAVASPRI_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/10nU1vV-Vc6lRrzRqrEiEFgx7nyldFUtu/view?usp=sharing";
  const CERTIFICADOGENEXUS_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/10qZy2OVo7YjMPRLJVUOgFubkSKbi9Axe/view?usp=sharing";
  const CERTIFICADOSRP_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1jVIfeaiohxO_Jrah0iqWzv9QSAeKOiOs/view?usp=sharing";
  const CERTIFICADOIBGESPCOMP_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1AIwqiS57TvclkYOTeHglZ6MnXv7M8K0d/view?usp=sharing";
  const CERTIFICADOPYTHONDATASCIENCI_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1GUwauQkdglbu7Ubb4D1L5C-8wh9YuzA-/view?usp=sharing";
  
  return (
    <main className="main-content">
      {/* Objetivo Profissional */}
      <section className="section">
        <h2 className="section-title">🎯 Objetivo Profissional</h2>
        <p className="section-text">
          Profissional de Tecnologia da Informação com sólida experiência em conversão, migração e integração de bancos de dados no setor público. Atuação em projetos de transformação digital, garantindo a integridade, segurança e conformidade dos dados, além de promover a modernização de sistemas legados e a interoperabilidade entre diferentes órgãos públicos.
        </p>
      </section>

      {/* Experiência Profissional */}
      <section className="section">
        <h2 className="section-title">💼 Experiência Profissional</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-role">Consultor de Suporte</h3>
            <span className="experience-company">ASP Tecnologia de Sistemas</span>
            <span className="experience-date">Mai 2020 - Atual</span>
          </div>
          <ul className="experience-list">
            <li>Conversão de bancos de dados entre sistemas</li>
            <li>Implantação e manutenção de sistemas</li>
            <li>Atendimento e suporte ao cliente</li>
            <li>Monitoramento de resultados e performance</li>
            <li>Implementação de rotinas de integração entre sistemas de diferentes órgãos públicos</li>
            <li>Planejamento e execução de migração de dados entre sistemas legados e novas plataformas</li>
            <li>Desenvolvimento de processos ETL (Extract, Transform, Load)</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-role">Analista de Suporte</h3>
            <span className="experience-company">Prodata Gestão Estratégica</span>
            <span className="experience-date">2011 - 2020</span>
          </div>
          <ul className="experience-list">
            <li>Configuração de servidores Linux (banco de dados e aplicação)</li>
            <li>Manutenção de dados e sistemas</li>
            <li>Atendimento em help desk</li>
            <li>Implantação de sistemas</li>
            <li>Treinamentos técnicos para usuários finais</li>
            <li>Especialista em área de compras, licitações e materiais</li>
            <li>Criação de relatórios e métricas</li>
            <li>Participação ativa em reuniões de gestão pública</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-role">Operador de Atendimento</h3>
            <span className="experience-company">Brasil Center Comunicações</span>
            <span className="experience-date">2008 - 2010</span>
          </div>
          <ul className="experience-list">
            <li>Atendimento ao cliente</li>
            <li>Suporte em redes de computadores</li>
          </ul>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="section">
        <h2 className="section-title">🎓 Formação Acadêmica</h2>
        
        <div className="education-item">
          <h3 className="education-course">Pós-graduação em Desenvolvimento Web Full Stack</h3>
          <div className="education-details">
            <span className="education-institution">UNOPAR</span>
            <span className="education-year">2022</span>
            <a 
              href={CERTIFICADOPOS_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado pós (PDF)</span>
            </a>
          </div>
        </div>

        <div className="education-item">
          <h3 className="education-course">Técnico desenvolvimento de sistemas</h3>
          <div className="education-details">
            <span className="education-institution">ETEC - Escola Técnica Estadual de São Paulo</span>
            <span className="education-year">2022</span>
            <a 
              href={DIPLOMATECNICO_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Diploma técnico (PDF)</span>
            </a>
          </div>
        </div>

        <div className="education-item">
          <h3 className="education-course">Graduação em Gestão de Sistema da Informação</h3>
          <div className="education-details">
            <span className="education-institution">Faculdade Objetivo</span>
            <span className="education-year">2009</span>
            <a 
              href={DIPLOMASUPERIOR_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Diploma graduação (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="section">
        <h2 className="section-title">🛠️ Habilidades Técnicas</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h4 className="skill-category-title">Banco de Dados</h4>
            <div className="skill-tags">
              <span className="skill-tag">Firebird</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQL Avançado</span>
              <span className="skill-tag">Modelagem de Dados</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Ferramentas & Tecnologias</h4>
            <div className="skill-tags">
              <span className="skill-tag">Pentaho (ETL)</span>
              <span className="skill-tag">Crystal Reports</span>
              <span className="skill-tag">Jasper Report</span>
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">Excel Avançado</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Desenvolvimento</h4>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Full Stack</span>
              <span className="skill-tag">Low Code</span>
              <span className="skill-tag">Genexus</span>
              <span className="skill-tag">Spring</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">PHP</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Áreas de Conhecimento</h4>
            <div className="skill-tags">
              <span className="skill-tag">Migração de Sistemas</span>
              <span className="skill-tag">ERP/CRM</span>
              <span className="skill-tag">Processos ETL</span>
              <span className="skill-tag">Gestão Pública</span>
              <span className="skill-tag">Licitações</span>
              <span className="skill-tag">Compras Públicas</span>
              <span className="skill-tag">AUDESP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Comportamentais */}
      <section className="section">
        <h2 className="section-title">🌟 Habilidades Comportamentais</h2>
        <div className="soft-skills">
          <div className="soft-skill-tags">
            <span className="soft-skill-tag">Capacidade Analítica</span>
            <span className="soft-skill-tag">Atenção a Detalhes</span>
            <span className="soft-skill-tag">Organização</span>
            <span className="soft-skill-tag">Gestão de Prazos</span>
            <span className="soft-skill-tag">Comunicação Clara</span>
            <span className="soft-skill-tag">Pensamento Lógico</span>
            <span className="soft-skill-tag">Resolução de Problemas</span>
            <span className="soft-skill-tag">Escuta Ativa</span>
          </div>
        </div>
      </section>

      {/* Cursos e Certificações */}
      <section className="section">
        <h2 className="section-title">📜 Cursos e Certificações</h2>
        
        <div className="courses-container">
          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Programação Full-Stack Javascript</span>
              <span className="course-year">2026</span>
            </div>
            <a 
              href={CERTIFICADOREACT_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>

          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Genexus Core - Desenvolvimento Low Code em Java</span>
              <span className="course-year">2023 (Fundação Fat)</span>
            </div>
            <a 
              href={CERTIFICADOGENEXUS_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>

          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Curso Java Full Stack com Spring e Angular</span>
              <span className="course-year">2023 (3way)</span>
            </div>
            <a 
              href={CERTIFICADOJAVASPRI_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>
          
          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Compras Públicas - Planejamento e procedimentos</span>
              <span className="course-year">2022 (IBEGESP)</span>
            </div>
            <a 
              href={CERTIFICADOIBGESPCOMP_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>

          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Python para Data Science e Machine Learning</span>
              <span className="course-year">2021 </span>
            </div>
            <a 
              href={CERTIFICADOPYTHONDATASCIENCI_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>

          <div className="course-item">
            <div className="course-info">
              <span className="course-name">AUDESP FASE IV</span>
              <span className="course-year">2018 (IBEGESP)</span>
            </div>
          </div>

          <div className="course-item">
            <div className="course-info">
              <span className="course-name">Sistema de Registro de Preço</span>
              <span className="course-year">2018</span>
            </div>
            <a 
              href={CERTIFICADOSRP_GOOGLE_DRIVE_URL} 
              className="certificado-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Visualizar certificado no Google Drive"
            >
              <span className="contact-icon">📄</span>
              <span className="contact-text">Certificado (PDF)</span>
            </a>
          </div>
        </div>
      </section>

       {/* Projetos */}
      <section className="section">
        <h2 className="section-title">🚀 Projetos</h2>
        
        <div className="projects-container">

          {/* Projeto 1: LandpageCurriculo */}
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">LandpageCurriculo - React</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/landpagecurriculo.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub
                </a>
              </div>
            </div>
            <p className="project-description">
              Landing page de currículo interativa desenvolvida em React com design responsivo,
              apresentando experiência profissional, habilidades técnicas e formação acadêmica
              de forma moderna e acessível.
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">React.js</span>
              <span className="project-tech-tag">CSS3</span>
              <span className="project-tech-tag">Design Responsivo</span>
              <span className="project-tech-tag">JavaScript ES6+</span>
            </div>
          </div>

          {/* Projeto 2: Livraria */}
          <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Projeto Livraria - React + MongoDB</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/projeto-livraria-final.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub
                </a>
              </div>
            </div>
            <p className="project-description">
              Aplicação web completa para gerenciamento de livraria com funcionalidades CRUD (Create, Read, Update, Delete).
              Sistema desenvolvido com React no frontend , backend e o MongoDB como Banco de Dados , com design responsivo e interface intuitiva.
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">React.js</span>
              <span className="project-tech-tag">MongoDB</span>
              <span className="project-tech-tag">Node.js</span>
              <span className="project-tech-tag">Express</span>
              <span className="project-tech-tag">CRUD</span>
              <span className="project-tech-tag">API REST</span>
              <span className="project-tech-tag">CSS3</span>
            </div>
          </div>  

          {/* Projeto 3: grid-react-router*/}
        <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Grid-react-router</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/grid-react-router.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub
                </a>
              </div>
            </div>
             <p className="project-description">
              Aplicativo com múltiplas rotas "React Router v6"
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">React.js</span>
              <span className="project-tech-tag">Node.js</span>
              <span className="project-tech-tag">CSS3</span>
            </div>
          </div>

           {/* Projeto 4: Projeto Java + Angular Despesa de viagem*/}
        <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Despesa de viagem</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/projetoangulardespesaviagem.github.io.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub
                </a>
              </div>
            </div>
             <p className="project-description">
              Aplicação web  para gerenciamento despesa de viagem CRUD (Create, Read, Update, Delete).
              Sistema desenvolvido com Angular no frontend, Java spring boot backend e Postgres como Banco de Dados.Com design responsivo e interface intuitiva.
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">Java spring boot</span>
              <span className="project-tech-tag">Angular</span>
              <span className="project-tech-tag">Postgres</span>
            </div>
          </div>


            {/* Projeto 5: Projeto Java + Angular Projeto Produto categoria.*/}
        <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">Produto categoria</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/projetoangularprodutocategoria.github.io.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub
                </a>
              </div>
            </div>
             <p className="project-description">
              Aplicação web  para gerenciamento de categorização de produto CRUD (Create, Read, Update, Delete).
              Sistema desenvolvido com Angular no frontend, Java spring boot backend e Postgres como Banco de Dados.Com design responsivo e interface intuitiva.
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">Java spring boot</span>
              <span className="project-tech-tag">Angular</span>
              <span className="project-tech-tag">Postgres</span>
            </div>
          </div>

            {/* Projeto 6: Projeto PHP + Mysql Projeto Controle Materias(TCC).*/}
        <div className="project-item">
            <div className="project-header">
              <h3 className="project-title">SGM-Sistema Gerenciador de Materiais(TCC)</h3>
              <div className="project-links">
                <a href="https://github.com/lucmarc02/Projeto_tcc_eteclucmarc1908.github.io.git" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> GitHub               
                </a>
                 <a href="https://ric.cps.sp.gov.br/handle/123456789/9585" 
                   className="project-link github-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <span>🔗</span> Etec
                  
                </a>
              </div>
            </div>
             <p className="project-description">
              Aplicação web  para gerenciamento controle de entrada e saída de materiais com Kardex, registrando todas os histórico das movimentações dos materiais(entrada e saida de estoque). CRUD (Create, Read, Update, Delete).
              Sistema desenvolvido com JavaScript, CSS no frontend, PHP backend e Mysql como Banco de Dados.Com design responsivo e interface intuitiva.Projeto foi TCC entregue, e foi publicado na revista científica ETEC - Centro Paula Souza
            </p>
            <div className="project-tech">
              <span className="project-tech-tag">PHP</span>
              <span className="project-tech-tag">CSS</span>
              <span className="project-tech-tag">JavaScript</span>
              <span className="project-tech-tag">Mysql</span>
            </div>
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Lucas Martins Coelho - Todos os direitos reservados</p>
        <p>Desenvolvido com React.js | Atualizado em Dezembro 2026</p>
      </footer>
    </main>
  );
}