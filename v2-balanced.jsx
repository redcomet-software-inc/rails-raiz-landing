// Variation 2 — BALANCED: hero w/ terminal split, medium density, more interaction

const V2Hero = () => {
  const [tab, setTab] = React.useState(0);
  const tabs = [
    {
      label: 'novo-app.sh',
      lines: [
        { p: '$ ', c: 'rails new minha-loja', clr: '#fff' },
        { o: '       create  Gemfile' },
        { o: '       create  app/' },
        { o: '       create  config/routes.rb' },
        { c: '✓ Aplicação criada em 8s', clr: '#27C93F' },
        { p: '$ ', c: 'cd minha-loja && rails server', clr: '#fff' },
        { o: '=> Booting Puma' },
        { o: '=> Rails 7.1 application starting' },
        { o: '* Listening on http://localhost:3000' },
      ],
    },
    {
      label: 'model.rb',
      lines: [
        { com: '# app/models/produto.rb' },
        { c: 'class Produto < ApplicationRecord', clr: '#FF8DAA' },
        { o: '  belongs_to :categoria' },
        { o: '  has_many :avaliacoes' },
        { o: '' },
        { o: '  validates :nome, presence: true' },
        { o: '  validates :preco, numericality: { greater_than: 0 }' },
        { o: '' },
        { o: '  scope :em_promocao, -> { where(promo: true) }' },
        { c: 'end', clr: '#FF8DAA' },
      ],
    },
    {
      label: 'deploy.sh',
      lines: [
        { p: '$ ', c: 'git push railway main', clr: '#fff' },
        { o: 'Counting objects: 24, done.' },
        { o: 'Building Rails 7.1 app...' },
        { o: 'Running migrations... ✓' },
        { o: 'Compiling assets... ✓' },
        { c: '✓ Deploy concluído em 1m 12s', clr: '#27C93F' },
        { o: 'Live em: https://minha-loja.up.railway.app' },
      ],
    },
  ];
  return (
    <section style={{ padding: '60px 0 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 24 }}>
            <SectionLabel>// a escola brasileira de rails</SectionLabel>
          </div>
          <h1 style={{
            fontSize: 60,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            margin: '0 0 24px',
          }}>
            Da primeira linha<br />
            ao primeiro<br />
            <span style={{ color: 'var(--rails-red)' }}>deploy</span>.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 32px', maxWidth: 460 }}>
            A Rails Raíz é uma escola brasileira de Ruby on Rails para quem
            está começando a programar — com trilhas guiadas, projetos reais
            e uma comunidade no seu idioma.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 36 }}>
            <Btn variant="primary">Ver trilhas →</Btn>
            <Btn variant="secondary">Aula gratuita</Btn>
          </div>
          <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
            <span>✓ 7 dias grátis</span>
            <span>✓ Sem fidelidade</span>
            <span>✓ Em português</span>
          </div>
        </div>

        <div>
          <Terminal title={tabs[tab].label}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 14, marginTop: -4 }}>
              {tabs.map((tb, i) => (
                <button key={i} onClick={() => setTab(i)} style={{
                  padding: '4px 10px',
                  background: tab === i ? '#1C1C1C' : 'transparent',
                  border: '1px solid #2A2A2A',
                  borderRadius: 6,
                  color: tab === i ? '#fff' : '#888',
                  fontFamily: 'Fira Code, monospace',
                  fontSize: 11,
                  cursor: 'pointer',
                }}>{tb.label}</button>
              ))}
            </div>
            {tabs[tab].lines.map((l, i) => (
              <div key={i}>
                {l.com && <span className="t-comment">{l.com}</span>}
                {l.p && <span style={{ color: '#FF5F56' }}>{l.p}</span>}
                {l.c && <span style={{ color: l.clr || '#fff' }}>{l.c}</span>}
                {l.o && <span className="t-out">{l.o}</span>}
                {i === tabs[tab].lines.length - 1 && tab === 0 && <span className="cursor" />}
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
            <span># exemplo do que você vai construir na trilha 02</span>
            <span>~ 28h de conteúdo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const V2TrilhaCard = ({ t, featured }) => (
  <div className="card trilha-card" style={{
    padding: 28,
    borderColor: featured ? 'var(--rails-red)' : 'var(--border)',
    background: featured ? 'rgba(204,0,0,0.03)' : 'var(--surface)',
    position: 'relative',
  }}>
    {featured && (
      <div style={{
        position: 'absolute',
        top: -10,
        right: 20,
        background: 'var(--rails-red)',
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Fira Code, monospace',
        padding: '4px 10px',
        borderRadius: 999,
        letterSpacing: '0.04em',
      }}>MAIS POPULAR</div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: featured ? 'var(--rails-red)' : 'var(--bg)',
        color: featured ? '#fff' : 'var(--rails-red)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Fira Code, monospace',
        fontWeight: 600,
        fontSize: 14,
      }}>{t.code}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', marginBottom: 2 }}>
          {t.level} · {t.duration}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {t.title}
        </div>
      </div>
    </div>
    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: '0 0 20px', minHeight: 64 }}>
      {t.desc}
    </p>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 16,
      borderTop: '1px solid var(--border)',
      fontSize: 12,
      fontFamily: 'Fira Code, monospace',
      color: 'var(--text-muted)',
    }}>
      <span>{t.modules} módulos · {t.projects} projetos</span>
      <a style={{ color: 'var(--rails-red)', textDecoration: 'none' }}>começar →</a>
    </div>
  </div>
);

const V2Trilhas = () => {
  const [filter, setFilter] = React.useState('todas');
  const filtered = filter === 'todas' ? TRILHAS : TRILHAS.filter(t => t.level.toLowerCase() === filter);
  return (
    <section style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
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
            maxWidth: 540,
          }}>
            Seis trilhas conectadas. Um caminho.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>
            Comece pela 01 e siga em ordem, ou escolha a sua. Você decide.
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
        {filtered.map((t, i) => <V2TrilhaCard key={t.code} t={t} featured={t.code === '02'} />)}
      </div>
    </section>
  );
};

const V2HowItWorks = () => {
  const steps = [
    { n: '01', t: 'Comece pela trilha de Ruby', d: 'Sem pressuposto. A gente explica até o que é um terminal.' },
    { n: '02', t: 'Construa projetos reais', d: 'Cada trilha entrega projetos pra você adicionar no portfólio.' },
    { n: '03', t: 'Tire dúvidas na comunidade', d: 'Discord ativo, mentores plantonistas e fórum por trilha.' },
    { n: '04', t: 'Faça deploy e mostre', d: 'No fim, você tem apps em produção pra mostrar pra recrutadores.' },
  ];
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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
        {steps.map((s, i) => (
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

const V2FAQ = () => (
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
    <FAQ />
  </section>
);

const V2CTA = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <div style={{
      background: 'var(--text)',
      borderRadius: 16,
      padding: '56px 48px',
      color: '#F5F5F5',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 40,
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 13, color: '#888', marginBottom: 14 }}>
          $ <span style={{ color: '#FF5F56' }}>rails new</span> sua-carreira
        </div>
        <h2 style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '0 0 12px',
          lineHeight: 1.05,
          color: '#fff',
        }}>
          Sete dias grátis.<br />
          R$ 49/mês depois disso.
        </h2>
        <p style={{ color: '#aaa', fontSize: 15, margin: 0, maxWidth: 460 }}>
          Acesso a tudo. Sem cartão pra começar. Sem fidelidade. Cancele com um clique.
        </p>
      </div>
      <a className="btn btn-primary" style={{ background: '#fff', color: 'var(--text)', padding: '16px 28px' }}>Ver trilhas →</a>
    </div>
  </section>
);

const V2Page = () => (
  <div style={{ background: 'var(--bg)', minHeight: '100%' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 48px' }}>
      <Nav />
      <V2Hero />
      <V2Trilhas />
      <V2HowItWorks />
      <V2FAQ />
      <V2CTA />
      <Footer />
    </div>
  </div>
);

window.V2Page = V2Page;
