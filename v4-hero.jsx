// Variation 4 — V2 evoluído: salários BR, captura de email (waitlist), níveis jr/mid/sr,
// destaque AI/MCP/agents. Versão focada e mais longa, baseada no que o usuário pediu.

const V4Hero = () => {
  const [level, setLevel] = React.useState('junior');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const tabsByLevel = {
    junior: {
      title: 'novo-app.sh',
      lines: [
        { p: '$ ', c: 'rails new minha-loja', clr: '#fff' },
        { o: '       create  Gemfile' },
        { o: '       create  app/models/' },
        { o: '       create  config/routes.rb' },
        { c: '✓ Aplicação criada em 8s', clr: '#27C93F' },
        { p: '$ ', c: 'rails server', clr: '#fff' },
        { o: '* Listening on http://localhost:3000' },
        { c: '🎉 Você está no ar!', clr: '#27C93F' },
      ],
    },
    pleno: {
      title: 'service.rb',
      lines: [
        { com: '# app/services/processador_pagamento.rb' },
        { c: 'class ProcessadorPagamento', clr: '#FF8DAA' },
        { o: '  include Dry::Monads[:result]' },
        { o: '' },
        { o: '  def call(pedido)' },
        { o: '    yield validar(pedido)' },
        { o: '    yield cobrar(pedido)' },
        { o: '    Success(pedido.confirmar!)' },
        { o: '  end' },
        { c: 'end', clr: '#FF8DAA' },
      ],
    },
    senior: {
      title: 'agent.rb',
      lines: [
        { com: '# app/agents/atendimento_agent.rb' },
        { c: 'class AtendimentoAgent < AI::Agent', clr: '#FF8DAA' },
        { o: '  use_mcp :stripe, :crm_interno' },
        { o: '  tool :buscar_pedido' },
        { o: '  tool :emitir_reembolso' },
        { o: '' },
        { o: '  system_prompt <<~PROMPT' },
        { o: '    Você é um agente de suporte...' },
        { o: '  PROMPT' },
        { c: 'end', clr: '#FF8DAA' },
      ],
    },
  };

  const tab = tabsByLevel[level];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 24 }}>
            <SectionLabel>// a escola brasileira de rails</SectionLabel>
          </div>
          <h1 style={{
            fontSize: 60,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            margin: '0 0 22px',
          }}>
            Da primeira linha<br />
            ao primeiro<br />
            <span style={{ color: 'var(--rails-red)' }}>deploy</span>.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 28px', maxWidth: 480 }}>
            A Rails Raíz é uma escola brasileira de Ruby on Rails para quem
            está começando — com trilhas guiadas, projetos reais e
            uma comunidade no seu idioma.
          </p>

          {/* Level shortcuts */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontFamily: 'Fira Code, monospace', color: 'var(--text-muted)', marginBottom: 10 }}>
              # estou começando como...
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[
                { id: 'junior', label: 'Júnior', sub: 'do zero' },
                { id: 'pleno', label: 'Pleno', sub: 'tenho base' },
                { id: 'senior', label: 'Sênior', sub: 'quero IA + Rails' },
              ].map(l => (
                <button key={l.id} onClick={() => setLevel(l.id)} style={{
                  padding: '10px 16px',
                  border: `1.5px solid ${level === l.id ? 'var(--rails-red)' : 'var(--border)'}`,
                  background: level === l.id ? 'rgba(204,0,0,0.06)' : 'var(--surface)',
                  color: level === l.id ? 'var(--rails-red)' : 'var(--text)',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{l.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>{l.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Email capture (waitlist) */}
          <div style={{
            background: 'var(--surface)',
            border: '1.5px solid var(--rails-red)',
            borderRadius: 12,
            padding: 18,
            marginBottom: 18,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span className="pill pill-red" style={{ fontSize: 11 }}>● em breve</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Entre na lista de espera</span>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  placeholder="seu@email.com.br"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: '12px 14px',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    fontFamily: 'Fira Code, monospace',
                    fontSize: 14,
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    outline: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--rails-red)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 14 }}>
                  Avise-me →
                </button>
              </form>
            ) : (
              <div style={{
                padding: '12px 14px',
                background: 'rgba(39,201,63,0.08)',
                border: '1px solid #27C93F',
                borderRadius: 8,
                color: 'var(--text)',
                fontFamily: 'Fira Code, monospace',
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <span style={{ color: '#27C93F' }}>✓</span>
                Você é o aluno #2.848 na lista. Vamos te avisar pelo email.
              </div>
            )}
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8, fontFamily: 'Fira Code, monospace' }}>
              # 2.847 já estão na lista · sem spam
            </div>
          </div>

          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
            <span>✓ 100% em português</span>
            <span>✓ Foco no mercado BR</span>
          </div>
        </div>

        <div>
          <Terminal title={tab.title}>
            {tab.lines.map((l, i) => (
              <div key={`${level}-${i}`}>
                {l.com && <span className="t-comment">{l.com}</span>}
                {l.p && <span style={{ color: '#FF5F56' }}>{l.p}</span>}
                {l.c && <span style={{ color: l.clr || '#fff' }}>{l.c}</span>}
                {l.o && <span className="t-out">{l.o}</span>}
                {i === tab.lines.length - 1 && <span className="cursor" />}
              </div>
            ))}
          </Terminal>
          <div style={{
            marginTop: 12,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 11,
            fontFamily: 'Fira Code, monospace',
            color: 'var(--text-muted)',
          }}>
            <span># exemplo da trilha {level === 'junior' ? '02' : level === 'pleno' ? '04' : '07 (avançada)'}</span>
            <span>{level === 'junior' ? 'iniciante' : level === 'pleno' ? 'intermediário' : 'avançado'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

window.V4Hero = V4Hero;
