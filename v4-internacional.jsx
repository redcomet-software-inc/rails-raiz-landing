// V4 — Seção de Oportunidades Internacionais

const V4Internacional = () => {
  const [tab, setTab] = React.useState('eua');

  // Dados:
  // - Stack Overflow Survey 2023: Ruby chegou a média de ~$99k/ano global (top 5 highest-paying)
  // - Ruby On Remote (abr/2026): média $143.832/ano, faixa $86–$395k baseada em 1.793 salários
  // - PayScale (US, 50 respostas): faixa $50–$106k/ano
  const markets = {
    eua: {
      flag: '🇺🇸',
      label: 'Estados Unidos',
      currency: 'USD',
      jr: '$70k–95k',
      pl: '$95k–140k',
      sr: '$140k–220k',
      vagas: ['Shopify', 'GitHub', 'Stripe', 'Procore', 'Doximity', 'Gusto', 'Instacart'],
      note: 'Mercado mais maduro de Rails do mundo. Visa H-1B é difícil; remoto é o caminho viável.',
    },
    europa: {
      flag: '🇪🇺',
      label: 'Europa',
      currency: 'EUR',
      jr: '€35k–55k',
      pl: '€55k–85k',
      sr: '€85k–130k',
      vagas: ['Doctolib (FR)', 'GitLab (NL)', 'Honeypot (DE)', 'Riipen', 'Toptal', 'Decidim'],
      note: 'Alemanha, Holanda e Irlanda têm muitas vagas remotas em Rails. Inglês fluente é suficiente.',
    },
    canada: {
      flag: '🇨🇦',
      label: 'Canadá',
      currency: 'CAD',
      jr: 'C$70k–95k',
      pl: 'C$95k–135k',
      sr: 'C$135k–180k',
      vagas: ['Shopify', 'FreshBooks', 'Wave', 'Clio', 'Hopper', 'Lightspeed'],
      note: 'Shopify (Ottawa) é a maior empresa Rails do mundo. Programa Global Talent Stream facilita vistos.',
    },
    latam: {
      flag: '🌎',
      label: 'América Latina (USD)',
      currency: 'USD',
      jr: '$25k–45k',
      pl: '$45k–80k',
      sr: '$80k–130k',
      vagas: ['Nubank', 'Globant', 'Toptal', 'Distillery', 'Crossover', 'Andela'],
      note: 'Empresas que pagam em USD pra devs no Brasil/LATAM via PJ. Acesso mais fácil; sem fuso ruim.',
    },
  };
  const m = markets[tab];

  return (
    <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 720, marginBottom: 40 }}>
        <SectionLabel>// oportunidades internacionais</SectionLabel>
        <h2 style={{
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '14px 0 14px',
          lineHeight: 1.05,
        }}>
          Trabalhe daqui.<br />
          <span style={{ color: 'var(--rails-red)' }}>Receba lá fora.</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          Rails é uma das tecnologias mais bem pagas do mundo. A comunidade global
          é remote-friendly por natureza, e empresas como Shopify, GitHub e Stripe
          contratam devs Rails brasileiros há anos.
        </p>
      </div>

      {/* Top stats strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginBottom: 32,
      }}>
        <div className="card" style={{ padding: 24 }}>
          <div style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--rails-red)',
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}>$143.832</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Salário médio global/ano</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', lineHeight: 1.5 }}>
            Ruby On Remote · 1.793 salários · abril/2026
          </div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <div style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--rails-red)',
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}>top 5</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Linguagens mais bem pagas</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', lineHeight: 1.5 }}>
            Stack Overflow Survey 2023 · Ruby chegou a ~$99k médio
          </div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <div style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: 28,
            fontWeight: 600,
            color: 'var(--rails-red)',
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}>$86k–$395k</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Faixa global completa</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', lineHeight: 1.5 }}>
            Do júnior remoto ao staff em big tech
          </div>
        </div>
      </div>

      {/* Region selector */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg)',
        }}>
          {Object.entries(markets).map(([k, mk]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              flex: 1,
              padding: '16px 12px',
              border: 'none',
              borderRight: '1px solid var(--border)',
              background: tab === k ? 'var(--surface)' : 'transparent',
              borderBottom: tab === k ? `2px solid var(--rails-red)` : '2px solid transparent',
              marginBottom: -1,
              cursor: 'pointer',
              fontFamily: 'Fira Code, monospace',
              fontSize: 13,
              color: tab === k ? 'var(--text)' : 'var(--text-muted)',
              fontWeight: tab === k ? 600 : 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: 18 }}>{mk.flag}</span>
              {mk.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '32px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <div style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: 12,
                color: 'var(--text-muted)',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Faixas em {m.currency} · anuais
              </div>
              <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
                {[
                  ['júnior', m.jr],
                  ['pleno', m.pl],
                  ['sênior', m.sr],
                ].map(([level, range]) => (
                  <div key={level} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '14px 18px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {level}
                    </span>
                    <span style={{
                      fontFamily: 'Fira Code, monospace',
                      fontSize: 20,
                      fontWeight: 600,
                      color: 'var(--rails-red)',
                      letterSpacing: '-0.01em',
                    }}>{range}</span>
                  </div>
                ))}
              </div>
              <div style={{
                padding: '12px 14px',
                background: 'rgba(204,0,0,0.04)',
                border: '1px solid rgba(204,0,0,0.15)',
                borderRadius: 8,
                fontSize: 13,
                color: 'var(--text)',
                lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--rails-red)', fontFamily: 'Fira Code, monospace', fontWeight: 600 }}># </span>
                {m.note}
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: 'Fira Code, monospace',
                fontSize: 12,
                color: 'var(--text-muted)',
                marginBottom: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Empresas conhecidas que contratam
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {m.vagas.map(v => (
                  <span key={v} style={{
                    padding: '8px 14px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    borderRadius: 8,
                    fontFamily: 'Fira Code, monospace',
                    fontSize: 13,
                    color: 'var(--text)',
                  }}>
                    {v}
                  </span>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                padding: 16,
                background: 'var(--text)',
                color: '#F5F5F5',
                borderRadius: 8,
                fontFamily: 'Fira Code, monospace',
                fontSize: 12,
                lineHeight: 1.6,
              }}>
                <div style={{ color: '#888', marginBottom: 6 }}># dica da casa</div>
                <div style={{ color: '#fff' }}>
                  Pra trabalhar em USD daqui, o caminho mais comum é PJ via{' '}
                  <span style={{ color: 'var(--rails-red)' }}>plataformas remote-first</span> (Toptal,
                  Crossover, Turing) ou aplicar direto em vagas com tag "remote · worldwide".
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sources footer */}
      <div style={{
        marginTop: 18,
        padding: '14px 18px',
        border: '1px dashed var(--border)',
        borderRadius: 8,
        fontFamily: 'Fira Code, monospace',
        fontSize: 11,
        color: 'var(--text-muted)',
        lineHeight: 1.6,
      }}>
        <span style={{ color: 'var(--rails-red)', fontWeight: 600 }}># fontes:</span>{' '}
        Stack Overflow Developer Survey 2023, Ruby On Remote (abril/2026, 1.793 salários reportados),
        PayScale e levantamento próprio em sites de vagas remote-first.
        Empresas listadas têm histórico público de contratar devs Rails internacionalmente —
        não há garantia de vagas abertas hoje.
      </div>
    </section>
  );
};

window.V4Internacional = V4Internacional;
