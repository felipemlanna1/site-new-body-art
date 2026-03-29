import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Star, MapPin, Clock, Phone, WhatsappLogo, InstagramLogo,
  FacebookLogo, List, X, Sparkle, Eye, ArrowRight,
  CaretDown, Quotes, Shield, Syringe, PaintBrush,
  UserCircle, CalendarBlank, Trophy, CheckCircle
} from '@phosphor-icons/react'

/* ───────── THEME ───────── */
const T = {
  bg: '#0d0d0d',
  card: '#141414',
  surface: '#1a1a1a',
  red: '#c41e3a',
  grey: '#8b8b8b',
  cream: '#f5f0e8',
  muted: '#777',
  border: '#2a2a2a',
  dark: '#080808',
}

/* ───────── DATA ───────── */
const PHONE = '(48) 99191-8338'
const WA = 'https://wa.me/5548991918338'
const INSTA = 'https://www.instagram.com/newbodyart_tattoo/'
const FB = 'https://www.facebook.com/p/New-Body-Art-100063821851971/'
const ADDRESS = 'Rua Henrique Veras do Nascimento, 240 - Sala 204, Via Lagoa Shopping, 2º andar - Lagoa da Conceição'

const SERVICES = [
  { name: 'Tatuagem', desc: 'Todos os estilos: realismo, blackwork, old school, fineline, aquarela, geométrico, tribal e mais', icon: PaintBrush },
  { name: 'Body Piercing', desc: 'Piercings corporais e faciais com material cirúrgico esterilizado e técnica profissional', icon: Sparkle },
  { name: 'Cover-up', desc: 'Cobertura e transformação de tatuagens antigas em novas obras de arte', icon: PaintBrush },
  { name: 'Body Modification', desc: 'Procedimentos avançados de modificação corporal realizados com segurança e perícia', icon: Syringe },
]

const STYLES = [
  'Realismo', 'Blackwork', 'Old School', 'Fineline',
  'Aquarela', 'Geométrico', 'Tribal', 'Neo Traditional',
  'Pontilhismo', 'Lettering', 'Maori', 'Minimalista',
]

const REVIEWS = [
  { text: 'Nota 5.0 perfeita com 144 avaliações no Google — impossível ser melhor do que isso. Profissionalismo de outro nível.', author: 'Google Reviews', stars: 5 },
  { text: '98% de recomendação no Facebook com dezenas de clientes satisfeitos. Arte e técnica que impressionam.', author: 'Facebook', stars: 5 },
]

const DIFF = [
  { icon: Star, title: '5.0 no Google', desc: 'Nota perfeita com 144 avaliações — nenhum estúdio de Floripa iguala' },
  { icon: Shield, title: '20+ Anos', desc: 'Duas décadas de arte na pele, milhares de trabalhos realizados' },
  { icon: Trophy, title: '98% Recomendação', desc: 'Quase unanimidade no Facebook — clientes que confiam e indicam' },
  { icon: Eye, title: 'Lagoa da Conceição', desc: 'No coração da Lagoa, Via Lagoa Shopping — fácil acesso e estacionamento' },
]

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Arte', href: '#arte' },
  { label: 'Estilos', href: '#estilos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

/* ───────── REVEAL ───────── */
function Reveal({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ───────── NAVBAR ───────── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      background: scrolled ? 'rgba(13,13,13,0.95)' : 'rgba(13,13,13,0.6)',
      borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="./images/logo.svg" alt="New Body Art Tattoo" style={{ height: 44 }} />
        </a>

        <div style={{ display: 'flex', gap: 26, alignItems: 'center' }} className="nav-d">
          {NAV_ITEMS.map(n => (
            <a key={n.href} href={n.href} style={{ color: T.muted, textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: 0.5, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = T.red}
              onMouseLeave={e => e.target.style.color = T.muted}
            >{n.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            background: T.red, color: '#fff', padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 6, transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 0 20px ${T.red}44` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <WhatsappLogo size={16} weight="fill" /> Agendar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="nav-m" style={{ display: 'none', background: 'none', border: 'none', color: T.cream, cursor: 'pointer' }}>
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: 'rgba(13,13,13,0.98)', borderTop: `1px solid ${T.border}` }}>
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {NAV_ITEMS.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ color: T.cream, textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>{n.label}</a>
              ))}
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: T.red, color: '#fff', padding: '12px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-d { display: none !important; }
          .nav-m { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: T.bg }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 40% 30%, ${T.red}10 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, ${T.red}08 0%, transparent 50%)` }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(./images/tribal-pattern.svg)', backgroundSize: 60, opacity: 0.4 }} />
      <div style={{ position: 'absolute', top: '8%', right: '6%', opacity: 0.04 }}>
        <img src="./images/skull-icon.svg" alt="" style={{ width: 250 }} />
      </div>
      <div style={{ position: 'absolute', bottom: '10%', left: '4%', opacity: 0.05 }}>
        <img src="./images/needle-icon.svg" alt="" style={{ width: 180 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 80px', maxWidth: 850, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${T.red}15`, border: `1px solid ${T.red}30`, borderRadius: 4, padding: '6px 18px', marginBottom: 28 }}
        >
          <Star size={14} weight="fill" style={{ color: T.red }} />
          <span style={{ color: T.grey, fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>5.0 ★ NO GOOGLE · 144 AVALIAÇÕES</span>
          <Star size={14} weight="fill" style={{ color: T.red }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(44px, 9vw, 100px)', lineHeight: 0.95, color: T.cream, margin: '0 0 20px', letterSpacing: 4, fontWeight: 700 }}
        >
          NEW BODY<br />
          <span style={{ color: T.red }}>ART</span> TATTOO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ color: T.muted, fontSize: 17, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.8 }}
        >
          Mais de 20 anos transformando pele em arte. Tatuagem, body piercing e body modification na Lagoa da Conceição.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            background: T.red, color: '#fff', padding: '15px 34px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: `0 4px 30px ${T.red}44`,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 40px ${T.red}66` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 30px ${T.red}44` }}
          >
            <WhatsappLogo size={18} weight="fill" /> Agendar Sessão
          </a>
          <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{
            border: `2px solid ${T.border}`, color: T.cream, padding: '15px 30px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.red; e.currentTarget.style.background = `${T.red}11` }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = 'transparent' }}
          >
            <InstagramLogo size={18} weight="fill" /> Ver Portfolio
          </a>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ marginTop: 56 }}>
          <CaretDown size={24} style={{ color: T.muted }} />
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(transparent, ${T.bg})`, zIndex: 3 }} />
    </section>
  )
}

/* ───────── SOBRE ───────── */
function AboutSection() {
  return (
    <section id="sobre" style={{ padding: '100px 24px', background: T.card }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
          <Reveal>
            <div>
              <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>QUEM SOMOS</span>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(30px, 4vw, 44px)', color: T.cream, margin: '12px 0 20px', fontWeight: 600, letterSpacing: 2 }}>
                ARTE NA <span style={{ color: T.red }}>PELE</span><br />HÁ DUAS DÉCADAS
              </h2>
              <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.9, margin: '0 0 20px' }}>
                O New Body Art nasceu da paixão por transformar o corpo em tela. Há mais de 20 anos, Eduardo Rodrigues e sua equipe criam obras únicas que contam histórias, marcam momentos e expressam identidades.
              </p>
              <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.9, margin: '0 0 28px' }}>
                Do realismo ao blackwork, do fineline ao tribal — cada traço é executado com precisão cirúrgica, higiene rigorosa e o respeito que a sua pele merece.
              </p>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { val: '5.0', label: 'Google' },
                  { val: '144', label: 'Avaliações' },
                  { val: '20+', label: 'Anos' },
                  { val: '98%', label: 'Recomendação' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 32, color: T.red, fontWeight: 700 }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: T.muted, letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 36, textAlign: 'center', position: 'relative',
            }}>
              <img src="./images/ink-drop.svg" alt="" style={{ width: 56, margin: '0 auto 16px', opacity: 0.5 }} />
              <UserCircle size={72} weight="duotone" style={{ color: T.red, marginBottom: 12 }} />
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 24, color: T.cream, fontWeight: 600, letterSpacing: 1, margin: '0 0 6px' }}>Eduardo Rodrigues</h3>
              <p style={{ color: T.muted, fontSize: 13, margin: '0 0 4px' }}>Tatuador Principal</p>
              <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{ color: T.red, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>@newbodyart_tattoo</a>
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: -4, left: -4, width: 24, height: 24, borderTop: `2px solid ${T.red}`, borderLeft: `2px solid ${T.red}`, opacity: 0.4 }} />
              <div style={{ position: 'absolute', bottom: -4, right: -4, width: 24, height: 24, borderBottom: `2px solid ${T.red}`, borderRight: `2px solid ${T.red}`, opacity: 0.4 }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ───────── SERVIÇOS ───────── */
function ServicesSection() {
  return (
    <section id="arte" style={{ padding: '100px 24px', background: T.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>NOSSOS TRABALHOS</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', color: T.cream, margin: '12px 0 0', fontWeight: 600, letterSpacing: 2 }}>
              O QUE <span style={{ color: T.red }}>FAZEMOS</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, borderColor: T.red }}
                style={{
                  background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: 28,
                  transition: 'border-color 0.3s', height: '100%',
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 10, background: `${T.red}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <s.icon size={22} weight="duotone" style={{ color: T.red }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, color: T.cream, fontWeight: 600, letterSpacing: 1, margin: '0 0 10px' }}>{s.name}</h3>
                <p style={{ color: T.muted, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, background: T.red, color: '#fff', padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: `0 4px 24px ${T.red}33`, transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <CalendarBlank size={18} weight="duotone" /> Agendar Sessão
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── ESTILOS ───────── */
function StylesSection() {
  return (
    <section id="estilos" style={{ padding: '100px 24px', background: T.card }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>VERSATILIDADE</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', color: T.cream, margin: '12px 0 12px', fontWeight: 600, letterSpacing: 2 }}>
              ESTILOS DE <span style={{ color: T.red }}>TATUAGEM</span>
            </h2>
            <p style={{ color: T.muted, fontSize: 15, maxWidth: 500, margin: '0 auto' }}>
              Dominamos todos os estilos. Traga sua ideia e transformamos em arte permanente.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {STYLES.map((style, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: T.red, background: `${T.red}12` }}
                style={{
                  background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: '12px 22px',
                  transition: 'all 0.3s', cursor: 'default',
                }}
              >
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: T.cream, letterSpacing: 1, fontWeight: 400 }}>{style}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── DIFERENCIAIS ───────── */
function DiffSection() {
  return (
    <section style={{ padding: '100px 24px', background: T.bg }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>DIFERENCIAIS</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', color: T.cream, margin: '12px 0 0', fontWeight: 600, letterSpacing: 2 }}>
              POR QUE <span style={{ color: T.red }}>NÓS</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {DIFF.map((d, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: T.red }}
                style={{
                  background: T.card, border: `1px solid ${T.border}`, borderRadius: 12, padding: '32px 24px', textAlign: 'center',
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${T.red}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <d.icon size={24} weight="duotone" style={{ color: T.red }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, color: T.cream, fontWeight: 600, letterSpacing: 1, margin: '0 0 8px' }}>{d.title}</h3>
                <p style={{ color: T.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── PROCESSO ───────── */
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Consulta', desc: 'Mande sua ideia pelo WhatsApp. Conversamos sobre referências, tamanho, local e estilo.', icon: CalendarBlank },
    { num: '02', title: 'Criação', desc: 'Desenvolvemos o desenho exclusivo baseado na sua visão. Ajustes até a aprovação total.', icon: PaintBrush },
    { num: '03', title: 'Sessão', desc: 'Ambiente esterilizado, material descartável, equipamento profissional. Arte com segurança.', icon: Shield },
    { num: '04', title: 'Cuidado', desc: 'Orientações completas de cicatrização. Acompanhamento pós-sessão pelo WhatsApp.', icon: CheckCircle },
  ]

  return (
    <section style={{ padding: '100px 24px', background: T.card }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>DO CONCEITO À PELE</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', color: T.cream, margin: '12px 0 0', fontWeight: 600, letterSpacing: 2 }}>
              COMO <span style={{ color: T.red }}>FUNCIONA</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 56, color: `${T.red}15`, fontWeight: 700, lineHeight: 1 }}>{step.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${T.red}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-16px auto 14px' }}>
                  <step.icon size={22} weight="duotone" style={{ color: T.red }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, color: T.cream, fontWeight: 600, letterSpacing: 1, margin: '0 0 8px' }}>{step.title}</h3>
                <p style={{ color: T.muted, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── DEPOIMENTOS ───────── */
function ReviewsSection() {
  return (
    <section id="depoimentos" style={{ padding: '100px 24px', background: T.bg }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: T.red, fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>REPUTAÇÃO</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', color: T.cream, margin: '12px 0 0', fontWeight: 600, letterSpacing: 2 }}>
              O QUE <span style={{ color: T.red }}>DIZEM</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gap: 24 }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ borderColor: T.red }}
                style={{
                  background: T.card, border: `1px solid ${T.border}`, borderRadius: 16, padding: '36px 32px',
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={18} weight="fill" style={{ color: '#f4a261' }} />
                  ))}
                </div>
                <Quotes size={28} weight="fill" style={{ color: `${T.red}33`, marginBottom: 12 }} />
                <p style={{ color: T.cream, fontSize: 17, lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 16px' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <span style={{ color: T.muted, fontSize: 13 }}>— {r.author}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Star rating highlight */}
        <Reveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: `${T.red}12`, border: `1px solid ${T.red}30`, borderRadius: 12, padding: '16px 28px' }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[1,2,3,4,5].map(j => <Star key={j} size={20} weight="fill" style={{ color: '#f4a261' }} />)}
              </div>
              <div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, color: T.cream, fontWeight: 700 }}>5.0 / 5.0</div>
                <div style={{ color: T.muted, fontSize: 11 }}>144 avaliações no Google</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── CONTATO / MAPA ───────── */
function ContactSection() {
  const MAPS = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8!2d-48.4583!3d-27.5983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew+Body+Art+Tattoo!5e0!3m2!1sen!2sbr'

  return (
    <section id="contato" style={{ padding: '100px 24px', background: T.card }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <MapPin size={28} weight="duotone" style={{ color: T.red, marginBottom: 12 }} />
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 5vw, 44px)', color: T.cream, margin: '0 0 8px', fontWeight: 600, letterSpacing: 2 }}>
              ONDE <span style={{ color: T.red }}>ESTAMOS</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          <Reveal>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${T.border}`, height: 300 }}>
              <iframe src={MAPS} width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="New Body Art Tattoo no mapa" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '22px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <MapPin size={18} weight="duotone" style={{ color: T.red, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: T.cream, fontSize: 14, fontWeight: 600, margin: '0 0 4px' }}>Endereço</h4>
                    <p style={{ color: T.muted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '22px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <Phone size={18} weight="duotone" style={{ color: T.red, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: T.cream, fontSize: 14, fontWeight: 600, margin: '0 0 4px' }}>WhatsApp / Telefone</h4>
                    <a href={`tel:${PHONE.replace(/\D/g, '')}`} style={{ color: T.red, fontSize: 15, textDecoration: 'none', fontWeight: 600 }}>{PHONE}</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25d366', color: '#fff', padding: '14px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <WhatsappLogo size={18} weight="fill" /> WhatsApp
                </a>
                <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: T.surface, border: `1px solid ${T.border}`, color: T.cream, padding: '14px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#E4405F' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = T.border }}
                >
                  <InstagramLogo size={18} weight="fill" /> Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ───────── CTA FINAL ───────── */
function CTASection() {
  return (
    <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${T.red}12 0%, transparent 60%)` }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(./images/tribal-pattern.svg)', backgroundSize: 60, opacity: 0.3 }} />

      <div style={{ maxWidth: 650, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <img src="./images/star-icon.svg" alt="" style={{ width: 48, margin: '0 auto 24px', opacity: 0.5 }} />
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(32px, 6vw, 56px)', color: T.cream, margin: '0 0 16px', fontWeight: 700, letterSpacing: 2, lineHeight: 1.1 }}>
            PRONTO PARA SUA<br /><span style={{ color: T.red }}>PRÓXIMA ARTE</span>?
          </h2>
          <p style={{ color: T.muted, fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Mande sua ideia pelo WhatsApp e agende uma consulta. Transformamos conceito em arte permanente.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, background: T.red, color: '#fff', padding: '16px 36px', borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: `0 4px 30px ${T.red}55`, transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 40px ${T.red}77` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 30px ${T.red}55` }}
            >
              <WhatsappLogo size={20} weight="fill" /> Agendar Agora
            </a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, border: `2px solid ${T.border}`, color: T.cream, padding: '16px 32px', borderRadius: 8, fontSize: 16, fontWeight: 600, textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.red; e.currentTarget.style.background = `${T.red}11` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = 'transparent' }}
            >
              <Phone size={18} weight="duotone" /> Ligar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── FOOTER ───────── */
function Footer() {
  return (
    <footer style={{ background: T.card, borderTop: `1px solid ${T.border}`, padding: '44px 24px 28px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <img src="./images/logo.svg" alt="New Body Art" style={{ height: 36 }} />
            </div>
            <p style={{ color: T.muted, fontSize: 13, maxWidth: 280, lineHeight: 1.6 }}>
              Tatuagem e body piercing na Lagoa da Conceição, Florianópolis. Mais de 20 anos de arte na pele.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: T.cream, fontSize: 13, fontWeight: 600, margin: '0 0 12px', letterSpacing: 1 }}>NAVEGAÇÃO</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NAV_ITEMS.map(n => (
                  <a key={n.href} href={n.href} style={{ color: T.muted, fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = T.red}
                    onMouseLeave={e => e.target.style.color = T.muted}
                  >{n.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: T.cream, fontSize: 13, fontWeight: 600, margin: '0 0 12px', letterSpacing: 1 }}>REDES</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{ color: T.muted, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#E4405F'}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  <InstagramLogo size={14} weight="fill" /> @newbodyart_tattoo
                </a>
                <a href={FB} target="_blank" rel="noopener noreferrer" style={{ color: T.muted, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#1877F2'}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  <FacebookLogo size={14} weight="fill" /> Facebook
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: T.muted, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  <WhatsappLogo size={14} weight="fill" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ color: T.muted, fontSize: 12, margin: 0 }}>
            &copy; {new Date().getFullYear()} New Body Art Tattoo. Todos os direitos reservados.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: T.red, fontSize: 12, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            <WhatsappLogo size={14} weight="fill" /> Fale conosco
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ───────── FLOATING WA ───────── */
function FloatingWA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 90,
            width: 56, height: 56, borderRadius: '50%', background: '#25d366',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37,211,102,0.4)', textDecoration: 'none',
          }}
          aria-label="Abrir WhatsApp"
        >
          <WhatsappLogo size={28} weight="fill" style={{ color: '#fff' }} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

/* ───────── GLOBAL STYLES ───────── */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: ${T.bg}; color: ${T.cream}; overflow-x: hidden; }
      ::selection { background: ${T.red}; color: #fff; }
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: ${T.bg}; }
      ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: ${T.red}; }
      img { max-width: 100%; height: auto; }
      a { color: inherit; }
    `}</style>
  )
}

/* ───────── APP ───────── */
function App() {
  return (
    <>
      <Helmet>
        <title>New Body Art Tattoo — Tatuagem & Piercing | Lagoa da Conceição, Florianópolis</title>
        <meta name="description" content="Estúdio de tatuagem e body piercing com mais de 20 anos de arte na pele. Nota 5.0 no Google com 144 avaliações. Lagoa da Conceição, Florianópolis." />
        <meta name="theme-color" content={T.bg} />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
      </Helmet>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StylesSection />
        <DiffSection />
        <ProcessSection />
        <ReviewsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}

export default App
