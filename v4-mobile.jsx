// V4 Mobile — Versão mobile da landing, em coluna única

const M_TRILHAS = [
  ...TRILHAS,
  { code: '07', title: 'IA + Rails: MCPs e Agentes', duration: '~18h', level: 'Avançado',
    desc: 'Construa agentes autônomos em Rails. MCP, function calling e orquestração com LLMs.', modules: 11, projects: 3, featured: true },
  { code: '08', title: 'Performance e Escala', duration: '~14h', level: 'Avançado',
    desc: 'Caching, background jobs, queries otimizadas e arquitetura para apps grandes.', modules: 9, projects: 2 },
];

const MNav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 20px', borderBottom: '1px solid var(--border)',
        position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10,
      }}>
        <Logo size={14} />
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'Fira Code, monospace', fontSize: 18, color: 'var(--text)',
          padding: 4,
        }}>{open ? '×' : '≡'}</button>
      </nav>
      {open && (
        <div style={{ borderBottom: '1px solid var(--border)', padding: '12px 20px', background: 'var(--surface)' }}>
          {/* ['Trilhas', 'Comunidade', 'Preços', 'Entrar'].map(l => (
            <a key={l} style={{
              display: 'block', padding: '12px 0',
              fontFamily: 'Fira Code, monospace', fontSize: 14,
              color: 'var(--text)', textDecoration: 'none',
              borderBottom: '1px solid var(--border)',
            }}>~/{l.toLowerCase()}</a>
          )) */}
          <a className="btn btn-primary" style={{ marginTop: 12, padding: '12px', fontSize: 14, justifyContent: 'center', width: '100%' }}>Lista de espera</a>
        </div>
      )}
    </>
  );
};

const MHero = () => {
  const [level, setLevel] = React.useState('junior');
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSending(true);
    setError(false);
    try {
      await submitToWaitlist(email);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };
  return (
    <section style={{ padding: '32px 20px 40px' }}>
      <div style={{ marginBottom: 16 }}>
        <SectionLabel>// escola brasileira de rails</SectionLabel>
      </div>
      <h1 style={{
        fontSize: 38, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.035em',
        margin: '0 0 16px',
      }}>
        Da primeira linha ao primeiro <span style={{ color: 'var(--rails-red)' }}>deploy</span>.
      </h1>
      <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 24px' }}>
        Trilhas guiadas em português, projetos reais e uma comunidade que te apoia.
        Para quem está começando.
      </p>

      {/* Terminal preview compacto */}
      <Terminal title="rails new minha-app">
        <div><span style={{ color: '#FF5F56' }}>$ </span><span>rails new loja</span></div>
        <div className="t-out">      create  app/</div>
        <div className="t-out">      create  config/</div>
        <div style={{ color: '#27C93F' }}>✓ Aplicação criada em 8s</div>
        <div><span style={{ color: '#FF5F56' }}>$ </span><span>rails server</span></div>
        <div style={{ color: '#27C93F' }}>🎉 Você está no ar!<span className="cursor" /></div>
      </Terminal>

      {/* Nível */}
      <div style={{ marginTop: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontFamily: 'Fira Code, monospace', color: 'var(--text-muted)', marginBottom: 8 }}>
          # estou começando como...
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {[['junior', 'Júnior'], ['pleno', 'Pleno'], ['senior', 'Sênior']].map(([id, label]) => (
            <button key={id} onClick={() => setLevel(id)} style={{
              padding: '10px 8px',
              border: `1.5px solid ${level === id ? 'var(--rails-red)' : 'var(--border)'}`,
              background: level === id ? 'rgba(204,0,0,0.06)' : 'var(--surface)',
              color: level === id ? 'var(--rails-red)' : 'var(--text)',
              borderRadius: 8, cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Waitlist */}
      <div style={{ background: 'var(--surface)', border: '1.5px solid var(--rails-red)', borderRadius: 12, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span className="pill pill-red" style={{ fontSize: 11 }}>● em breve</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Lista de espera</span>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
            <input type="email" required placeholder="seu@email.com.br" value={email} onChange={e => setEmail(e.target.value)} style={{
              padding: '12px 14px', border: '1px solid var(--border)', borderRadius: 8,
              fontFamily: 'Fira Code, monospace', fontSize: 14, background: 'var(--bg)', color: 'var(--text)', outline: 'none',
            }} />
            <button type="submit" disabled={sending} className="btn btn-primary" style={{ padding: '12px', fontSize: 14, justifyContent: 'center' }}>{sending ? 'Enviando...' : 'Avise-me →'}</button>
            {error && <div style={{ fontSize: 11, color: '#FF5F56', fontFamily: 'Fira Code, monospace' }}># deu erro ao enviar, tenta de novo</div>}
          </form>
        ) : (
          <div style={{ padding: '10px 12px', background: 'rgba(39,201,63,0.08)', border: '1px solid #27C93F', borderRadius: 8,
            fontFamily: 'Fira Code, monospace', fontSize: 13 }}>✓ Você está na lista</div>
        )}
      </div>
    </section>
  );
};

const MSalarios = () => {
  const data = [
    { lvl: 'Júnior', mid: 'R$ 3.000', range: 'R$ 2.125–6.000' },
    { lvl: 'Pleno', mid: 'R$ 7.000', range: 'R$ 4.583–12.900' },
    { lvl: 'Sênior', mid: 'R$ 13.000', range: 'R$ 12.500–20.000' },
  ];
  return (
    <section style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
      <SectionLabel>// mercado brasileiro</SectionLabel>
      <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '12px 0 12px', lineHeight: 1.1 }}>
        Quanto você pode ganhar.
      </h2>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 20px' }}>
        Faixas Glassdoor BR para devs Rails (R$ brutos/mês, CLT, abril/2026).
      </p>
      <div style={{ display: 'grid', gap: 10 }}>
        {data.map(d => (
          <div key={d.lvl} className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{d.lvl}</span>
              <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 18, fontWeight: 600, color: 'var(--rails-red)' }}>{d.mid}</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
              faixa típica · {d.range}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, padding: 12, border: '1px dashed var(--border)', borderRadius: 8,
        fontFamily: 'Fira Code, monospace', fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
        # fonte: Glassdoor BR (3–56 envios por cargo)
      </div>
    </section>
  );
};

const MInternacional = () => {
  const [tab, setTab] = React.useState('eua');
  const m = {
    eua: { flag: '🇺🇸', label: 'EUA', jr: '$70k–95k', pl: '$95k–140k', sr: '$140k–220k' },
    europa: { flag: '🇪🇺', label: 'Europa', jr: '€35k–55k', pl: '€55k–85k', sr: '€85k–130k' },
    canada: { flag: '🇨🇦', label: 'Canadá', jr: 'C$70k–95k', pl: 'C$95k–135k', sr: 'C$135k–180k' },
    latam: { flag: '🌎', label: 'LATAM USD', jr: '$25k–45k', pl: '$45k–80k', sr: '$80k–130k' },
  };
  return (
    <section style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
      <SectionLabel>// internacional</SectionLabel>
      <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '12px 0 12px', lineHeight: 1.05 }}>
        Trabalhe daqui. <span style={{ color: 'var(--rails-red)' }}>Receba lá fora.</span>
      </h2>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 20px' }}>
        Rails é uma das tecnologias mais bem pagas do mundo. Empresas como Shopify,
        GitHub e Stripe contratam devs Rails brasileiros há anos.
      </p>

      <div className="card" style={{ padding: 16, marginBottom: 12 }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 22, fontWeight: 600, color: 'var(--rails-red)', marginBottom: 4 }}>$143.832</div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>Média global/ano</div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', marginTop: 2 }}>
          Ruby On Remote · 1.793 salários
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 999, marginBottom: 14, overflowX: 'auto' }}>
        {Object.entries(m).map(([k, v]) => (
          <button key={k} onClick={() => setTab(k)} style={{
            flex: '0 0 auto', padding: '8px 12px', border: 'none', borderRadius: 999,
            background: tab === k ? 'var(--rails-red)' : 'transparent',
            color: tab === k ? '#fff' : 'var(--text-muted)',
            fontFamily: 'Fira Code, monospace', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{v.flag} {v.label}</button>
        ))}
      </div>

      <div className="card" style={{ padding: 16 }}>
        {[['júnior', m[tab].jr], ['pleno', m[tab].pl], ['sênior', m[tab].sr]].map(([l, r]) => (
          <div key={l} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            padding: '12px 0', borderBottom: l !== 'sênior' ? '1px solid var(--border)' : 'none',
          }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', textTransform: 'uppercase' }}>{l}</span>
            <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 16, fontWeight: 600, color: 'var(--rails-red)' }}>{r}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const MTrilhas = () => {
  const [filter, setFilter] = React.useState('todas');
  const filtered = filter === 'todas' ? M_TRILHAS : M_TRILHAS.filter(t => t.level.toLowerCase() === filter);
  return (
    <section style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
      <SectionLabel>// trilhas</SectionLabel>
      <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '12px 0 12px', lineHeight: 1.1 }}>
        Do "nunca programei" ao sênior com IA.
      </h2>
      <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 999, marginBottom: 14, overflowX: 'auto' }}>
        {['todas', 'iniciante', 'intermediário', 'avançado'].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            flex: '0 0 auto', padding: '8px 12px', border: 'none', borderRadius: 999,
            background: filter === f ? 'var(--rails-red)' : 'transparent',
            color: filter === f ? '#fff' : 'var(--text-muted)',
            fontFamily: 'Fira Code, monospace', fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        {filtered.map(t => (
          <div key={t.code} className="card" style={{
            padding: 16,
            borderColor: (t.code === '02' || t.featured) ? 'var(--rails-red)' : 'var(--border)',
            background: (t.code === '02' || t.featured) ? 'rgba(204,0,0,0.03)' : 'var(--surface)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--rails-red)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Fira Code, monospace', fontWeight: 600, fontSize: 12,
              }}>{t.code}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>{t.level} · {t.duration}</div>
                <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{t.title}</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MAI = () => (
  <section style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
    <SectionLabel>// trilha avançada · novo</SectionLabel>
    <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '12px 0 12px', lineHeight: 1.05 }}>
      IA dentro do seu Rails. <span style={{ color: 'var(--rails-red)' }}>Não em volta dele.</span>
    </h2>
    <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 20px' }}>
      LLMs, agentes autônomos e MCP — tudo no Rails que você já conhece.
    </p>
    <div style={{ display: 'grid', gap: 12 }}>
      {[
        ['🔌', 'Model Context Protocol', 'Exponha sua app como servidor MCP. Claude e GPT chamam suas funções direto.'],
        ['🤖', 'Workflows agênticos', 'Agentes que decidem, executam e iteram dentro do seu app — com guardrails.'],
        ['🧠', 'RAG nativo', 'pgvector + Active Record. Busca semântica em cima dos seus models.'],
      ].map(([icon, t, d]) => (
        <div key={t} className="card" style={{ padding: 16 }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{t}</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{d}</div>
        </div>
      ))}
    </div>
  </section>
);

const MFAQ = () => (
  <section style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
    <SectionLabel>// dúvidas</SectionLabel>
    <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', margin: '12px 0 16px', lineHeight: 1.1 }}>
      Quem aprende, pergunta.
    </h2>
    <FAQ items={FAQS} />
  </section>
);

const MCTA = () => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSending(true);
    setError(false);
    try {
      await submitToWaitlist(email);
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };
  return (
    <section style={{ padding: '40px 20px' }}>
      <div style={{ background: 'var(--text)', borderRadius: 14, padding: 28, color: '#F5F5F5', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#888', marginBottom: 10 }}>
          $ <span style={{ color: '#FF5F56' }}>rails new</span> sua-carreira
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 10px', lineHeight: 1.05, color: '#fff' }}>
          Seja avisado quando abrirmos.
        </h2>
        <p style={{ color: '#aaa', fontSize: 14, margin: '0 0 18px', lineHeight: 1.5 }}>
          50% de desconto nos 3 primeiros meses pra quem entrar agora.
        </p>
        {!done ? (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
            <input type="email" required placeholder="seu@email.com.br" value={email} onChange={e => setEmail(e.target.value)} style={{
              padding: '12px 14px', border: '1px solid #2A2A2A', borderRadius: 8,
              background: '#0F0F0F', color: '#fff', fontFamily: 'Fira Code, monospace', fontSize: 14, outline: 'none', textAlign: 'center',
            }} />
            <button type="submit" disabled={sending} className="btn btn-primary" style={{ padding: 12, fontSize: 14, justifyContent: 'center' }}>{sending ? 'Enviando...' : 'Entrar na lista →'}</button>
            {error && <div style={{ fontSize: 11, color: '#FF5F56', fontFamily: 'Fira Code, monospace' }}># deu erro ao enviar, tenta de novo</div>}
          </form>
        ) : (
          <div style={{ padding: 12, background: 'rgba(39,201,63,0.1)', border: '1px solid #27C93F', borderRadius: 8,
            color: '#fff', fontFamily: 'Fira Code, monospace', fontSize: 13 }}>
            ✓ Você está na lista
          </div>
        )}
      </div>
    </section>
  );
};

const MFooter = () => (
  <footer style={{ padding: '24px 20px', borderTop: '1px solid var(--border)',
    fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  }}>
    <Logo size={12} />
    <span># © 2026</span>
  </footer>
);

const MobilePage = () => (
  <div style={{ background: 'var(--bg)', minHeight: '100%', fontSize: 14 }}>
    <MNav />
    <MHero />
    <MSalarios />
    <MInternacional />
    <MTrilhas />
    <MAI />
    <MFAQ />
    <MCTA />
    <MFooter />
  </div>
);

window.MobilePage = MobilePage;
