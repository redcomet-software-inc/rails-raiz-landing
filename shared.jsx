// Rails Raíz — Shared components

const Logo = ({ size = 18, withBrackets = true }) => (
  <span className="rr-logo" style={{ fontSize: size }}>
    {withBrackets && <span className="bracket">[</span>}
    <span>rails</span>
    <span className="at">@</span>
    <span>raíz</span>
    {withBrackets && <span className="bracket">]</span>}
  </span>
);

const SectionLabel = ({ children }) => (
  <span className="section-label">
    <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--rails-red)' }} />
    {children}
  </span>
);

// Trilhas data — shared
const TRILHAS = [
  {
    code: '01',
    title: 'Fundamentos de Ruby',
    duration: '~12h',
    level: 'Iniciante',
    desc: 'Sintaxe, blocos, classes e o jeito Ruby de pensar. Sem pressuposto de programação prévia.',
    modules: 8,
    projects: 2,
    icon: '💎',
  },
  {
    code: '02',
    title: 'Rails do Zero ao Deploy',
    duration: '~28h',
    level: 'Iniciante',
    desc: 'Construa sua primeira aplicação Rails completa: models, views, controllers e deploy em produção.',
    modules: 14,
    projects: 3,
    icon: '🛤️',
  },
  {
    code: '03',
    title: 'Banco de Dados com Active Record',
    duration: '~16h',
    level: 'Intermediário',
    desc: 'Migrations, associações, validações e queries performáticas. Tudo o que o seu app precisa.',
    modules: 10,
    projects: 2,
    icon: '🗄️',
  },
  {
    code: '04',
    title: 'Hotwire e Front-end Moderno',
    duration: '~14h',
    level: 'Intermediário',
    desc: 'Turbo, Stimulus e o jeito Rails de fazer SPAs sem o peso do JavaScript moderno.',
    modules: 9,
    projects: 2,
    icon: '⚡',
  },
  {
    code: '05',
    title: 'Testes Automatizados',
    duration: '~10h',
    level: 'Intermediário',
    desc: 'RSpec, fixtures e TDD na prática. Escreva código com confiança.',
    modules: 7,
    projects: 1,
    icon: '🧪',
  },
  {
    code: '06',
    title: 'APIs com Rails',
    duration: '~12h',
    level: 'Avançado',
    desc: 'Construa APIs REST e JSON robustas. Autenticação, versionamento e documentação.',
    modules: 8,
    projects: 2,
    icon: '🔌',
  },
];

const FAQS = [
  {
    q: 'Preciso saber programar antes de começar?',
    a: 'Não precisa. As trilhas iniciantes começam do absoluto zero — incluindo o que é uma linha de comando, como instalar o Ruby e como pensar em código. A gente caminha junto.',
  },
  {
    q: 'Quanto tempo leva pra estar empregável?',
    a: 'Depende do seu ritmo. Alunos dedicando 10h por semana costumam concluir as trilhas de iniciante em ~3 meses e estar prontos pra entrevistas júnior em ~6 meses.',
  },
  {
    q: 'Como funciona a assinatura mensal?',
    a: 'Um valor fixo por mês destrava todas as trilhas, projetos e a comunidade. Sem fidelidade — você cancela quando quiser, com um clique.',
  },
  {
    q: 'O conteúdo é em português?',
    a: 'Sim, tudo em português brasileiro. Vídeos, exercícios, documentação interna e suporte da comunidade. Os termos técnicos em inglês a gente explica no caminho.',
  },
  {
    q: 'Tem certificado?',
    a: 'Sim. Cada trilha concluída gera um certificado digital verificável, e o portfólio dos projetos fica público no seu perfil pra mostrar pra recrutadores.',
  },
  /* {
    q: 'E se eu travar em algum exercício?',
    a: 'Tem fórum da comunidade ativo, mentores plantonistas em horário comercial e uma biblioteca de soluções comentadas pra cada projeto.',
  }, */
];

// FAQ Accordion
const FAQ = ({ items = FAQS }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} className="faq-item" data-open={open === i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-a">{it.a}</div>
        </div>
      ))}
    </div>
  );
};

// Terminal mock
const Terminal = ({ title = 'rails@raíz: ~/meu-app', children, height }) => (
  <div className="terminal" style={{ height }}>
    <div className="terminal-bar">
      <span className="terminal-dot r" />
      <span className="terminal-dot y" />
      <span className="terminal-dot g" />
      <span className="terminal-title">{title}</span>
    </div>
    <div className="terminal-body">{children}</div>
  </div>
);

const Prompt = ({ user = 'voce', host = 'raiz', cmd, out, comment }) => (
  <>
    <div>
      <span className="t-prompt">{user}@{host}</span>
      <span className="t-prompt"> ~ </span>
      <span style={{ color: '#FF5F56' }}>$ </span>
      <span className="t-cmd">{cmd}</span>
    </div>
    {out && <div className="t-out">{out}</div>}
    {comment && <div className="t-comment"># {comment}</div>}
  </>
);

// Buttons
const Btn = ({ variant = 'primary', children, ...props }) => (
  <a className={`btn btn-${variant}`} {...props}>{children}</a>
);

// Nav
const Nav = ({ ctaLabel = 'Ver trilhas' }) => (
  <nav style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
  }}>
    <Logo size={18} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
      {/* <a className="btn btn-ghost">Trilhas</a> */}
      {/* <a className="btn btn-ghost">Comunidade</a> */}
      {/* <a className="btn btn-ghost">Preços</a> */}
      {/* <a className="btn btn-ghost">Entrar</a> */}
      <a className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>{ctaLabel}</a>
    </div>
  </nav>
);

// Footer minimal
const Footer = () => (
  <footer style={{
    padding: '40px 0 24px',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 13,
    color: 'var(--text-muted)',
    fontFamily: 'Fira Code, monospace',
  }}>
    <Logo size={14} />
    <span># feito no Brasil — © 2026</span>
  </footer>
);

Object.assign(window, { Logo, SectionLabel, TRILHAS, FAQS, FAQ, Terminal, Prompt, Btn, Nav, Footer });
