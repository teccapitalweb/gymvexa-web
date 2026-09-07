'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import {
  ArrowRight, BadgeCheck, BarChart3, BellRing, Boxes, Cable, Calculator,
  Check, CircleDollarSign, CloudDownload, Cpu, Fingerprint, Keyboard,
  LockKeyhole, Mail, MessageCircle, Monitor, MonitorCheck,
  ShieldCheck, Users, WifiOff,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import VersionSwitch from '@/components/version-switch';

const registerUrl = 'https://gymteck.vercel.app/registro';
const loginUrl = 'https://gymteck.vercel.app/login';
const downloadUrl = 'https://github.com/teccapitalweb/gymvexa-downloads/releases/download/v0.1.0-pilot/Gymvexa-Setup-0.1.0.exe';

const features = [
  [Fingerprint, 'ACCESOS', 'La recepción fluye sola', 'Reconocimiento con huella, entrada y salida automáticas, avisos visuales y bienvenida por voz sin detener la operación.', 'cyan'],
  [Users, 'SOCIOS', 'Cada socio, bajo control', 'Expediente completo, membresías, vigencias, congelamientos, pagos, notas y actividad reunidos en un solo lugar.', 'violet'],
  [CircleDollarSign, 'NEGOCIO', 'Caja clara todos los días', 'Ventas, gastos, cambios, adeudos, cortes y responsables con trazabilidad para que cada peso tenga contexto.', 'amber'],
  [BarChart3, 'DECISIONES', 'El gimnasio habla con datos', 'Reportes, alertas de renovación, inventario bajo y seguimiento inteligente para actuar a tiempo.', 'blue'],
] as const;

const pvPlans: { key: string; name: string; price: string; period: string; tag: string; cta: string; featured?: boolean; badge?: string }[] = [
  { key: 'mensual', name: 'Mensual', price: '$300', period: 'MXN / mes', tag: 'Flexibilidad.', cta: 'Elegir Mensual' },
  { key: 'anual', name: 'Anual', price: '$2,350', period: 'MXN / año', tag: 'Ahorra $1,250.', cta: 'Elegir Anual', featured: true, badge: 'MÁS CONVENIENTE' },
  { key: 'devida', name: 'De por vida', price: '$3,600', period: 'MXN único', tag: 'Sin renovaciones.', cta: 'Elegir De por vida' },
];

const pvFeatures = [
  'Software Gymvexa completo',
  'Gestión de socios y membresías',
  'Control de asistencias',
  'Pagos y renovaciones',
  'Página web para el gimnasio',
  'Panel administrativo',
];

const pvKit = [
  [Cpu, 'Computadora'],
  [Monitor, 'Monitor'],
  [Keyboard, 'Teclado y mouse'],
  [Calculator, 'Caja registradora'],
  [Fingerprint, 'Lector de huella digital'],
  [Cable, 'Configuración / instalación'],
] as const;

export default function Home() {
  return (
    <main className="site site-classic site-new">
      <header className="site-nav">
        <a href="#inicio" className="brand brand-premium" aria-label="Gymvexa, inicio">
          <span className="brand-emblem"><Image src="/gymvexa-mark-transparent.png" alt="" width={48} height={44} priority /></span>
          <span className="brand-wordmark">GYMVEXA</span>
        </a>
        <nav aria-label="Navegación principal" className="nav-links">
          <a href="#producto">Producto</a><a href="#funciones">Funciones</a><a href="#planes">Planes</a><a href="#preguntas">Preguntas</a>
        </nav>
        <div className="nav-actions">
          <VersionSwitch current="nueva" />
          <a href={downloadUrl} className="nav-cta"><CloudDownload /> Descargar</a>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="hero-grid" />
        <div className="new-hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-pill"><span className="pulse-dot" /> GESTIÓN NATIVA PARA WINDOWS</div>
            <h1>Tu gimnasio en orden.<br /><span>Tu equipo en movimiento.</span></h1>
            <p className="hero-lead">Gymvexa reúne socios, accesos, membresías, caja e inventario en un programa rápido, elegante y preparado para trabajar en recepción.</p>
            <div className="hero-actions">
              <a href={downloadUrl} className="primary-cta"><CloudDownload /> Descargar para Windows</a>
              <a href={registerUrl} className="secondary-cta">Comenzar 14 días gratis <ArrowRight /></a>
            </div>
            <p className="download-note">Versión piloto 0.1.0 · Windows 10 y 11 · Instalador completo</p>
            <div className="trust-row">
              <span><MonitorCheck /> Aplicación de escritorio</span><span><WifiOff /> Hasta 30 días sin internet</span><span><ShieldCheck /> Datos protegidos localmente</span>
            </div>
          </div>

          <div id="producto" className="product-stage">
            <div className="stage-glow" />
            <div className="window-shell">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>Gymvexa · Centro de operación</span><div className="window-status"><span /> Sistema listo</div></div>
              <div className="window-image"><Image src="/gymvexa-dashboard.png" alt="Panel principal de Gymvexa mostrando socios, asistencias y alertas" width={1920} height={1035} priority /></div>
            </div>
            <div className="floating-card floating-access"><span className="floating-icon"><Fingerprint /></span><div><strong>Entrada registrada</strong><small>Bienvenida, Ana</small></div><BadgeCheck /></div>
            <div className="floating-card floating-update"><span className="floating-icon"><CloudDownload /></span><div><strong>Siempre al día</strong><small>Actualizaciones seguras</small></div></div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Beneficios principales">
        <div><strong>1</strong><span>programa para toda la operación</span></div><div><strong>360°</strong><span>de actividad por socio</span></div><div><strong>24/7</strong><span>control local del gimnasio</span></div><div><strong>0</strong><span>hojas de cálculo necesarias</span></div>
      </section>

      <section id="funciones" className="content-section feature-section">
        <div className="section-heading"><div><span className="section-kicker">TODO CONECTADO</span><h2>Menos ventanas.<br />Más control real.</h2></div><p>Diseñado desde la recepción hacia todo el negocio, con información clara para quien atiende y profundidad para quien dirige.</p></div>
        <div className="feature-grid">
          {features.map(([Icon, eyebrow, title, copy, tone]) => <article key={title} className={`feature-card tone-${tone}`}><div className="feature-top"><span className="feature-icon"><Icon /></span><small>{eyebrow}</small></div><h3>{title}</h3><p>{copy}</p><span className="feature-line" /></article>)}
        </div>
      </section>

      <section className="dark-section">
        <div className="dark-noise" />
        <div className="dark-copy"><span className="section-kicker light">HECHO PARA EL DÍA A DÍA</span><h2>Llegar, abrir y operar.<br /><em>Así de sencillo.</em></h2><p>Gymvexa vive en la computadora del gimnasio. Es rápido, conserva la operación localmente y utiliza internet únicamente cuando aporta valor.</p><ul><li><Check /> Funciona incluso con una conexión inestable.</li><li><Check /> La huella se escucha desde cualquier pantalla.</li><li><Check /> Los respaldos protegen cada actualización.</li><li><Check /> Los permisos mantienen cada rol en su lugar.</li></ul></div>
        <div className="flow-card">
          <div className="flow-head"><span>UN DÍA CON GYMVEXA</span><span className="live-pill"><i /> EN VIVO</span></div>
          {[
            ['08:02', Fingerprint, 'Ana registra su entrada', 'Huella reconocida · membresía vigente'],
            ['10:18', Users, 'Nueva membresía mensual', 'Venta registrada · efectivo'],
            ['13:40', Boxes, 'Producto con inventario bajo', 'Gymvexa genera seguimiento'],
            ['20:57', CircleDollarSign, 'Entrega de turno completa', 'Caja conciliada · sin diferencias'],
          ].map(([time, Icon, title, detail]) => { const FlowIcon = Icon as typeof Fingerprint; return <div className="flow-row" key={String(title)}><time>{String(time)}</time><span className="flow-icon"><FlowIcon /></span><div><strong>{String(title)}</strong><small>{String(detail)}</small></div><Check /></div>; })}
        </div>
      </section>

      <section className="content-section protection-section"><div className="protection-card"><div className="protection-icon"><LockKeyhole /></div><span className="section-kicker">TRANQUILIDAD OPERATIVA</span><h2>Tu información se queda contigo.</h2><p>Respaldos automáticos, permisos por empleado, bitácora de acciones y validación segura de actualizaciones para proteger la continuidad del gimnasio.</p><div className="security-tags"><span><ShieldCheck /> Firma digital</span><span><CloudDownload /> Actualizador seguro</span><span><BellRing /> Alertas accionables</span></div></div></section>

      <section id="planes" className="pricing-section">
        <div className="pv-head">
          <span className="pv-brand-badge"><Image className="official-mark on-light" src="/gymvexa-mark-transparent.png" alt="" width={24} height={24} /><span>LICENCIA DEL SOFTWARE</span></span>
          <h2>Planes Gymvexa</h2>
          <p className="pv-sub">Elige la modalidad que mejor se adapta a tu gimnasio.</p>
          <p className="pv-support">El mismo software completo en las tres modalidades. Solo cambia la forma de pago y la vigencia.</p>
        </div>

        <div className="pv-grid">
          <div className="pv-hl" aria-hidden="true" />
          <div className="pv-corner"><strong>Compara las modalidades</strong><span>Elijas la que elijas, tienes el sistema completo.</span></div>
          {pvPlans.map((p) => (
            <div key={p.key} className={`pv-planhead plan-${p.key} ${p.featured ? 'is-featured' : ''}`}>
              {p.badge && <span className="pv-badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <div className="pv-price"><strong>{p.price}</strong><span>{p.period}</span></div>
              <p className="pv-tag">{p.tag}</p>
              <a href={registerUrl} className="pv-cta">{p.cta} <ArrowRight /></a>
            </div>
          ))}
          {pvFeatures.map((f) => (
            <Fragment key={f}>
              <div className="pv-label">{f}</div>
              <div className="pv-check"><Check /></div>
              <div className="pv-check is-featured"><Check /></div>
              <div className="pv-check"><Check /></div>
            </Fragment>
          ))}
        </div>

        <div className="pv-cards">
          {pvPlans.map((p) => (
            <article key={p.key} className={`pv-card ${p.featured ? 'is-featured' : ''}`}>
              {p.badge && <span className="pv-badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <div className="pv-price"><strong>{p.price}</strong><span>{p.period}</span></div>
              <p className="pv-tag">{p.tag}</p>
              <ul>{pvFeatures.map((f) => <li key={f}><Check /> {f}</li>)}</ul>
              <a href={registerUrl} className="pv-cta">{p.cta} <ArrowRight /></a>
            </article>
          ))}
        </div>

        <div className="pv-reminders">
          <div>
            <span className="pv-mini-kicker"><BellRing /> SERVICIO OPCIONAL · COTIZACIÓN ADICIONAL</span>
            <h3>Recordatorios y recuperación de socios</h3>
            <p>Servicio adicional para mantener al socio activo y recuperar clientes inactivos, con avisos de membresías próximas a vencer y seguimiento a quienes dejaron de asistir.</p>
            <div className="pv-channels"><span><MessageCircle /> WhatsApp</span><span><Mail /> Correo electrónico (Gmail)</span></div>
            <p className="pv-service-note">No está incluido en la licencia del software. Precio adicional por definir.</p>
          </div>
          <div className="pv-rem-visual">
            <div className="pv-notif"><span className="pv-notif-ico"><MessageCircle /></span><div><strong>Membresía por vencer</strong><small>Hola Carlos, tu plan vence en 3 días. Renueva y no pierdas tu acceso.</small></div></div>
            <div className="pv-notif"><span className="pv-notif-ico mail"><Mail /></span><div><strong>Te extrañamos en el gym</strong><small>No te vemos hace 2 semanas. Vuelve y retoma tu rutina cuando quieras.</small></div></div>
          </div>
        </div>

        <div className="pv-addons">
          <div className="pv-addons-head">
            <span className="pv-mini-kicker alt"><Boxes /> COTIZACIÓN ADICIONAL</span>
            <h3>Kit y equipo para tu recepción</h3>
            <p>Opcional y aparte de la licencia. Si tu gimnasio lo necesita, cotizamos e instalamos el equipo completo para dejar tu recepción lista para operar.</p>
          </div>
          <div className="pv-kit">
            {pvKit.map(([Icon, label]) => <span key={label} className="pv-kit-item"><Icon /> {label}</span>)}
          </div>
          <p className="pv-addons-note">El equipo físico no forma parte del precio de la licencia. Se cotiza según las necesidades de cada gimnasio.</p>
        </div>

        <p className="pv-commercial-note">Precios en MXN. El kit de equipo y el servicio de recordatorios no están incluidos en la licencia del software y se cotizan por separado. Alcances finales sujetos a definición comercial.</p>

        <div className="pv-final-cta">
          <div><strong>¿Listo para ordenar tu gimnasio?</strong><span>Te mostramos Gymvexa funcionando y cotizamos tu implementación.</span></div>
          <div className="pv-final-actions"><a href={registerUrl} className="pv-cta solid">Cotizar mi implementación <ArrowRight /></a><a href={registerUrl} className="pv-cta ghost">Quiero una demo</a></div>
        </div>
      </section>

      <section id="preguntas" className="content-section faq-section">
        <div className="faq-heading"><span className="section-kicker">ANTES DE EMPEZAR</span><h2>Preguntas frecuentes.</h2><p>Lo importante, explicado sin letra pequeña.</p></div>
        <Accordion className="faq-list">
          <AccordionItem value="item-1"><AccordionTrigger>¿Gymvexa funciona sin internet?</AccordionTrigger><AccordionContent>Sí. La operación cotidiana es local y puede continuar hasta 30 días sin conexión. Internet se utiliza para validar la licencia y recibir actualizaciones.</AccordionContent></AccordionItem>
          <AccordionItem value="item-2"><AccordionTrigger>¿Necesito comprar un lector de huellas?</AccordionTrigger><AccordionContent>No es obligatorio. Puedes registrar asistencias por nombre o teléfono. Si deseas biometría, Gymvexa está preparado para el lector ZKTeco ZK9500.</AccordionContent></AccordionItem>
          <AccordionItem value="item-3"><AccordionTrigger>¿Qué ocurre después de pagar?</AccordionTrigger><AccordionContent>Recibirás tu clave y la descarga para Windows. Al abrir Gymvexa, un asistente te ayudará a configurar el gimnasio, el dueño y los planes.</AccordionContent></AccordionItem>
          <AccordionItem value="item-4"><AccordionTrigger>¿Las actualizaciones borran mis datos?</AccordionTrigger><AccordionContent>No. Antes de instalar una versión nueva, Gymvexa crea un respaldo. El instalador reemplaza el programa, no la base operativa.</AccordionContent></AccordionItem>
          <AccordionItem value="item-5"><AccordionTrigger>¿Puedo controlar lo que hace cada empleado?</AccordionTrigger><AccordionContent>Sí. El dueño puede asignar permisos distintos por perfil y consultar una bitácora de acciones.</AccordionContent></AccordionItem>
        </Accordion>
      </section>

      <section className="final-cta-section"><div className="final-glow" /><Image className="official-mark" src="/gymvexa-mark-transparent.png" alt="" width={58} height={58} /><span className="section-kicker light">TU GIMNASIO, MEJOR OPERADO</span><h2>Haz que cada día cuente.</h2><p>Descarga Gymvexa para Windows y descubre una forma más clara de llevar tu gimnasio.</p><div><a href={downloadUrl} className="primary-cta inverse"><CloudDownload /> Descargar Gymvexa</a><a href={registerUrl} className="text-cta">Crear mi cuenta</a></div><small>Versión piloto para Windows · Configuración guiada · Soporte en español</small></section>

      <footer><a href="#inicio" className="brand footer-brand brand-premium"><span className="brand-emblem"><Image src="/gymvexa-mark-transparent.png" alt="" width={48} height={44} /></span><span className="brand-wordmark">GYMVEXA</span></a><p>Software de gestión para gimnasios, creado por TEC Capital.</p><div><a href="#funciones">Funciones</a><a href="#planes">Planes</a><a href="#preguntas">Preguntas</a><a href={loginUrl}>Acceso</a></div><small>© 2026 Gymvexa. Todos los derechos reservados.</small></footer>
    </main>
  );
}
