// V4 Sections — Salários BR, Trilhas (com nível avançado), AI/MCP/Agents, etc.

const V4Salarios = () => {
  const [highlighted, setHighlighted] = React.useState('junior');
  // Dados Glassdoor BR (consultados em abril/2026)
  // - Geral Ruby on Rails Developer: mediana R$ 7.000, faixa típica R$ 4.583–11.000, p90 R$ 12.900
  // - Ruby Júnior: mediana R$ 3.000, faixa típica R$ 2.125–5.375, p90 R$ 6.000
  // - Senior Ruby Developer: mediana R$ 13.000, faixa típica R$ 12.500–20.000, p90 R$ 20.000
  const data = [
    {
      id: 'junior', level: 'Júnior', exp: '0–2 anos',
      min: 2125, mid: 3000, max: 6000,
      desc: 'Faixa de entrada CLT. A maioria dos nossos alunos começa aqui.',
    },
    {
      id: 'pleno', level: 'Pleno', exp: '2–5 anos',
      min: 4583, mid: 7000, max: 12900,
      desc: 'Faixa "Ruby on Rails Developer" geral do Glassdoor — onde a maioria dos devs CLT em Rails se encontra.',
    },
    {
      id: 'senior', level: 'Sênior', exp: '5+ anos',
      min: 12500, mid: 13000, max: 20000,
      desc: 'Faixa Senior Ruby Developer (Glassdoor). Empresas remotas pagando em USD podem ir além disso.',
    },
  ];
  const fmt = (n) => `R$ ${n.toLocaleString('pt-BR')}`;
  const maxMax = Math.max(...data.map(d => d.max));

  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-end', marginBottom: 40 }}>
        <div>
          <SectionLabel>// mercado brasileiro</SectionLabel>
          <h2 style={{
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            margin: '14px 0 12px',
            lineHeight: 1.1,
          }}>
            O quanto você pode ganhar<br />programando em Rails.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0, maxWidth: 520 }}>
            Faixas salariais para devs Ruby on Rails no Brasil, com base em
            dados públicos do Glassdoor (consulta de abril/2026).
            Valores em R$ brutos mensais, regime CLT.
          </p>
        </div>
        <div style={{
          padding: 18,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          fontFamily: 'Fira Code, monospace',
          fontSize: 12,
          color: 'var(--text-muted)',
          lineHeight: 1.7,
        }}>
          <div style={{ color: 'var(--rails-red)', fontWeight: 600, marginBottom: 6 }}># fontes</div>
          Glassdoor Brasil — cargos "Junior Ruby On Rails Developer",
          "Ruby On Rails Developer" e "Senior Ruby Developer".
          Amostras pequenas no Glassdoor (3–56 envios por cargo);
          ver número como referência, não como verdade absoluta.
        </div>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        {data.map(d => {
          const isOn = highlighted === d.id;
          return (
            <div
              key={d.id}
              onMouseEnter={() => setHighlighted(d.id)}
              className="card"
              style={{
                padding: '24px 28px',
                borderColor: isOn ? 'var(--rails-red)' : 'var(--border)',
                background: isOn ? 'rgba(204,0,0,0.03)' : 'var(--surface)',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '180px 1fr 240px',
                alignItems: 'center',
                gap: 24,
              }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>{d.level}</div>
                  {d.id === 'junior' && (
                    <span style={{ fontSize: 10, fontFamily: 'Fira Code, monospace', color: 'var(--rails-red)', fontWeight: 600 }}>
                      ← VOCÊ AQUI
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12, fontFamily: 'Fira Code, monospace', color: 'var(--text-muted)' }}>
                  {d.exp}
                </div>
              </div>

              <div>
                {/* Bar */}
                <div style={{ position: 'relative', height: 28, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6 }}>
                  <div style={{
                    position: 'absolute',
                    left: `${(d.min / maxMax) * 100}%`,
                    width: `${((d.max - d.min) / maxMax) * 100}%`,
                    top: 3,
                    bottom: 3,
                    background: isOn ? 'var(--rails-red)' : 'var(--text-muted)',
                    opacity: isOn ? 1 : 0.4,
                    borderRadius: 4,
                    transition: 'all 0.2s',
                  }} />
                  <div style={{
                    position: 'absolute',
                    left: `${(d.mid / maxMax) * 100}%`,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: '#fff',
                    transform: 'translateX(-1px)',
                  }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, fontFamily: 'Fira Code, monospace', color: 'var(--text-muted)' }}>
                  <span>min · {fmt(d.min)}</span>
                  <span>mediana · <span style={{ color: 'var(--text)', fontWeight: 600 }}>{fmt(d.mid)}</span></span>
                  <span>top · {fmt(d.max)}</span>
                </div>
              </div>

              <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {d.desc}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 24,
        padding: '20px 24px',
        background: 'var(--text)',
        color: '#F5F5F5',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 24 }}>📈</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2, color: '#fff' }}>
              Devs Rails que dominam <span style={{ color: 'var(--rails-red)' }}>IA, agentes e MCPs</span> são os mais disputados do mercado em 2026.
            </div>
            <div style={{ fontSize: 12, color: '#aaa', fontFamily: 'Fira Code, monospace' }}>
              # tendência observada nas vagas remotas em USD · sem dado público consolidado ainda
            </div>
          </div>
        </div>
        {/* <span className="pill pill-red" style={{ background: 'rgba(204,0,0,0.2)' }}>
          ver trilha de IA →
        </span> */}
      </div>
    </section>
  );
};

const V4Trilhas = () => {
  const [filter, setFilter] = React.useState('todas');
  // Add advanced AI track to trilhas
  const allTrilhas = [
    ...TRILHAS,
    {
      code: '07',
      title: 'IA + Rails: MCPs e Agentes',
      duration: '~18h',
      level: 'Avançado',
      desc: 'Construa agentes autônomos em Rails. Model Context Protocol, ferramentas, function calling e orquestração com LLMs.',
      modules: 11,
      projects: 3,
      featured: true,
    },
    {
      code: '08',
      title: 'Performance e Escala',
      duration: '~14h',
      level: 'Avançado',
      desc: 'Caching, background jobs, otimização de queries e arquitetura para apps com milhões de requests.',
      modules: 9,
      projects: 2,
    },
  ];

  const filtered = filter === 'todas'
    ? allTrilhas
    : allTrilhas.filter(t => t.level.toLowerCase() === filter);

  const levelDescs = {
    todas: '8 trilhas · 76 módulos · 17 projetos · ~124h',
    iniciante: 'Comece aqui se você nunca programou. Foco no que importa para conseguir o primeiro emprego.',
    'intermediário': 'Pra quem já tem base e quer se tornar produtivo em times Rails.',
    'avançado': 'Especialização sênior: IA, performance, arquitetura. Pra quem quer um lugar entre os tops do mercado.',
  };

  return (
    <section style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div style={{ marginBottom: 14 }}>
            <SectionLabel>// trilhas</SectionLabel>
          </div>
          <h2 style={{
            fontSize: 38,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            margin: '0 0 8px',
            lineHeight: 1.1,
            maxWidth: 620,
          }}>
            Do "nunca programei" ao sênior com IA.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: 0, maxWidth: 560, lineHeight: 1.5 }}>
            {levelDescs[filter]}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 999 }}>
          {['todas', 'iniciante', 'intermediário', 'avançado'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: 999,
              background: filter === f ? 'var(--rails-red)' : 'transparent',
              color: filter === f ? '#fff' : 'var(--text-muted)',
              fontFamily: 'Fira Code, monospace',
              fontSize: 12,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}>{f}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {filtered.map(t => (
          <V2TrilhaCard key={t.code} t={t} featured={t.code === '02' || t.featured} />
        ))}
      </div>
    </section>
  );
};

const V4AI = () => (
  <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
    <div style={{ marginBottom: 40, maxWidth: 720 }}>
      <SectionLabel>// trilha avançada · novo</SectionLabel>
      <h2 style={{
        fontSize: 42,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        margin: '14px 0 14px',
        lineHeight: 1.05,
      }}>
        IA dentro do seu Rails.<br />
        <span style={{ color: 'var(--rails-red)' }}>Não em volta dele.</span>
      </h2>
      <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
        A trilha mais procurada de 2026. Aprenda a integrar LLMs, construir agentes
        autônomos e expor sua aplicação como servidor MCP — tudo no Rails que
        você já conhece.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
      <div className="card" style={{ padding: 28 }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: 'var(--rails-red)', marginBottom: 12 }}>
          módulo_01 · MCP
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.2 }}>
          Model Context Protocol
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 18px' }}>
          Exponha sua app Rails como um servidor MCP. Modelos como Claude e GPT
          podem chamar suas funções, ler seus dados e executar ações — sem
          glue code complicado.
        </p>
        <div className="terminal" style={{ background: '#0F0F0F' }}>
          <div className="terminal-body" style={{ padding: '14px 16px', fontSize: 12 }}>
            <div className="t-comment"># config/initializers/mcp.rb</div>
            <div><span style={{ color: '#FF8DAA' }}>Rails::MCP</span><span>.configure </span><span style={{ color: '#FF8DAA' }}>do</span></div>
            <div>  expose <span style={{ color: '#27C93F' }}>:Pedido</span>, <span style={{ color: '#27C93F' }}>:Cliente</span></div>
            <div>  tool <span style={{ color: '#27C93F' }}>:emitir_nf</span></div>
            <div><span style={{ color: '#FF8DAA' }}>end</span></div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 28 }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: 'var(--rails-red)', marginBottom: 12 }}>
          módulo_02 · agentes
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.2 }}>
          Workflows Agênticos
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 18px' }}>
          Construa agentes que decidem, executam e iteram dentro do seu app.
          Atendimento automático, processamento de documentos, análise de dados —
          com observabilidade e guardrails de produção.
        </p>
        <div className="terminal" style={{ background: '#0F0F0F' }}>
          <div className="terminal-body" style={{ padding: '14px 16px', fontSize: 12 }}>
            <div className="t-comment"># app/agents/triagem.rb</div>
            <div><span style={{ color: '#FF8DAA' }}>class</span> <span>TriagemAgent</span> <span>&lt;</span> <span style={{ color: '#FF8DAA' }}>AI::Agent</span></div>
            <div>  use_mcp <span style={{ color: '#27C93F' }}>:zendesk</span>, <span style={{ color: '#27C93F' }}>:crm</span></div>
            <div>  tool <span style={{ color: '#27C93F' }}>:classificar</span>, <span style={{ color: '#27C93F' }}>:rotear</span></div>
            <div>  guardrail <span style={{ color: '#27C93F' }}>:custo_max</span>, R$ 0.10</div>
            <div><span style={{ color: '#FF8DAA' }}>end</span></div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
      {[
        ['🔌', 'Function calling', 'OpenAI, Anthropic, Gemini — interface única, troca em uma linha.'],
        ['🧠', 'RAG nativo', 'pgvector + Active Record. Busca semântica em cima dos seus models.'],
        ['📊', 'Observabilidade', 'Traces, custos por request, replay de conversas. Built-in.'],
      ].map(([icon, t, d]) => (
        <div key={t} className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.015em' }}>{t}</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{d}</div>
        </div>
      ))}
    </div>

    {/* <div style={{ marginTop: 32, textAlign: 'center' }}>
      <Btn variant="primary">Conhecer trilha de IA →</Btn>
    </div> */}
  </section>
);

const V4HowItWorks = () => {
  const steps = [
    { n: '01', t: 'Comece pela trilha de Ruby', d: 'Sem pressuposto. A gente explica até o que é um terminal.' },
    { n: '02', t: 'Construa projetos reais', d: 'Cada trilha entrega projetos pra você adicionar no portfólio.' },
    { n: '03', t: 'Tire dúvidas na comunidade', d: 'Discord ativo, mentores plantonistas e fórum por trilha.' },
    { n: '04', t: 'Faça deploy e mostre', d: 'No fim, você tem apps em produção pra mostrar pra recrutadores.' },
  ];
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ marginBottom: 36 }}>
        <SectionLabel>// como funciona</SectionLabel>
        <h2 style={{
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '14px 0 0',
        }}>
          Quatro passos. Sem mistério.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {steps.map(s => (
          <div key={s.n}>
            <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: 'var(--rails-red)', marginBottom: 12 }}>
              passo_{s.n}
            </div>
            <div style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-muted)',
              opacity: 0.25,
              marginBottom: 12,
              fontFamily: 'Fira Code, monospace',
            }}>{s.n}</div>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.25 }}>{s.t}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const V4FAQ = () => {
  const v4faqs = [
    ...FAQS.slice(0, 3),
    {
      q: 'Tem trilha pra quem já é dev sênior?',
      a: 'Sim. As trilhas avançadas (IA + Rails, Performance e Escala, APIs) são pensadas pra devs com experiência que querem se especializar. Você pode pular as iniciantes — o sistema te recomenda por onde começar com base num teste rápido.',
    },
    {
      q: 'A trilha de IA tem pré-requisito?',
      a: 'Sim, é pré-requisito ter concluído a trilha de Rails do Zero ao Deploy ou ter experiência equivalente. A trilha pressupõe que você já manipula models, controllers e migrations com confiança.',
    },
    ...FAQS.slice(3),
  ];
  return (
    <section style={{ padding: '60px 0', maxWidth: 760, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <SectionLabel>// dúvidas frequentes</SectionLabel>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '14px 0 0',
        }}>
          Quem aprende, pergunta.
        </h2>
      </div>
      <FAQ items={v4faqs} />
    </section>
  );
};

const V4CTA = () => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div style={{
        background: 'var(--text)',
        borderRadius: 16,
        padding: '56px 48px',
        color: '#F5F5F5',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 13, color: '#888', marginBottom: 14 }}>
          $ <span style={{ color: '#FF5F56' }}>rails new</span> sua-carreira
        </div>
        <h2 style={{
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '0 0 14px',
          lineHeight: 1.05,
          color: '#fff',
        }}>
          Seja avisado quando abrirmos.
        </h2>
        <p style={{ color: '#aaa', fontSize: 16, margin: '0 auto 28px', maxWidth: 480, lineHeight: 1.5 }}>
          Estamos finalizando a plataforma. Entre na lista pra garantir 50% de desconto
          nos 3 primeiros meses quando lançarmos.
        </p>
        {!done ? (
          <form onSubmit={e => { e.preventDefault(); if (email.includes('@')) setDone(true); }}
            style={{ display: 'flex', gap: 8, maxWidth: 480, margin: '0 auto' }}>
            <input
              type="email"
              required
              placeholder="seu@email.com.br"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 16px',
                border: '1px solid #2A2A2A',
                borderRadius: 8,
                background: '#0F0F0F',
                color: '#fff',
                fontFamily: 'Fira Code, monospace',
                fontSize: 14,
                outline: 'none',
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '14px 24px' }}>
              Entrar na lista →
            </button>
          </form>
        ) : (
          <div style={{
            maxWidth: 480,
            margin: '0 auto',
            padding: 16,
            background: 'rgba(39,201,63,0.1)',
            border: '1px solid #27C93F',
            borderRadius: 8,
            color: '#fff',
            fontFamily: 'Fira Code, monospace',
            fontSize: 14,
          }}>
            ✓ Você é o aluno #2.848 na lista. Te avisamos no lançamento.
          </div>
        )}
        <div style={{ fontSize: 12, color: '#666', marginTop: 18, fontFamily: 'Fira Code, monospace' }}>
          # 2.847 já estão na lista · sem spam · cancele com um clique
        </div>
      </div>
    </section>
  );
};

const V4Page = () => (
  <div style={{ background: 'var(--bg)', minHeight: '100%' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 48px' }}>
      <Nav ctaLabel="Lista de espera" />
      <V4Hero />
      <V4Salarios />
      <V4Internacional />
      <V4Trilhas />
      <V4AI />
      <V4HowItWorks />
      <V4FAQ />
      <V4CTA />
      <Footer />
    </div>
  </div>
);

window.V4Page = V4Page;
