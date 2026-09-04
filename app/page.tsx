'use client';

import Image from 'next/image';
import {
  ArrowRight, BadgeCheck, BarChart3, BellRing, Boxes, Check,
  ChevronRight, CircleDollarSign, CloudDownload, Fingerprint,
  LockKeyhole, MonitorCheck, ShieldCheck, Sparkles, Users, WifiOff,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const registerUrl = 'https://gymteck.vercel.app/registro';
const loginUrl = 'https://gymteck.vercel.app/login';

const features = [
  [Fingerprint, 'ACCESOS', 'La recepción fluye sola', 'Reconocimiento con huella, entrada y salida automáticas, avisos visuales y bienvenida por voz sin detener la operación.', 'cyan'],
  [Users, 'SOCIOS', 'Cada socio, bajo control', 'Expediente completo, membresías, vigencias, congelamientos, pagos, notas y actividad reunidos en un solo lugar.', 'violet'],
  [CircleDollarSign, 'NEGOCIO', 'Caja clara todos los días', 'Ventas, gastos, cambios, adeudos, cortes y responsables con trazabilidad para que cada peso tenga contexto.', 'amber'],
  [BarChart3, 'DECISIONES', 'El gimnasio habla con datos', 'Reportes, alertas de renovación, inventario bajo y seguimiento inteligente para actuar a tiempo.', 'blue'],
] as const;

const plans = [
  { name: 'Mensual', price: '$300', period: 'MXN / mes', note: 'Flexibilidad total, sin plazo largo.' },
  { name: 'Trimestral', price: '$900', period: 'MXN / 3 meses', note: 'Un solo cobro cada tres meses.' },
  { name: 'Anual', price: '$3,000', period: 'MXN / año', note: 'La mejor elección para trabajar todo el año.', featured: true, badge: '2 MESES GRATIS' },
];

const included = [
  'Socios y membresías ilimitados', 'Asistencia escrita y con huella',
  'Ventas, caja, gastos e inventario', 'Reportes, perfiles y permisos',
  'Actualizaciones oficiales incluidas', 'Voz de bienvenida sin conexión',
];

export default function Home() {
  return (
    <main className="site">
      <header className="site-nav">
        <a href="#inicio" className="brand" aria-label="Gymvexa, inicio">
          <span className="brand-mark"><Image src="/gymvexa-icon.svg" alt="" width={38} height={38} priority /></span>
          <span className="brand-name">Gym<span>vexa</span></span>
        </a>
        <nav aria-label="Navegación principal" className="nav-links">
          <a href="#producto">Producto</a><a href="#funciones">Funciones</a><a href="#planes">Planes</a><a href="#preguntas">Preguntas</a>
        </nav>
        <div className="nav-actions">
          <a href={loginUrl} className="login-link">Iniciar sesión</a>
          <a href="#planes" className="nav-cta">Conocer planes <ArrowRight /></a>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="pulse-dot" /> GESTIÓN NATIVA PARA WINDOWS</div>
          <h1>Tu gimnasio en orden.<br /><span>Tu equipo en movimiento.</span></h1>
          <p className="hero-lead">Gymvexa reúne socios, accesos, membresías, caja e inventario en un programa rápido, elegante y preparado para trabajar en recepción.</p>
          <div className="hero-actions">
            <a href={registerUrl} className="primary-cta">Comenzar 14 días gratis <ArrowRight /></a>
            <a href="#producto" className="secondary-cta">Ver cómo funciona <ChevronRight /></a>
          </div>
          <div className="trust-row">
            <span><MonitorCheck /> Aplicación de escritorio</span><span><WifiOff /> Hasta 7 días sin internet</span><span><ShieldCheck /> Datos protegidos localmente</span>
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
        <div className="pricing-heading"><span className="section-kicker">UN PLAN. TODO INCLUIDO.</span><h2>Empieza sin complicarte.</h2><p>Elige cómo pagar. Todas las modalidades incluyen las mismas herramientas y futuras actualizaciones.</p></div>
        <div className="pricing-grid">{plans.map((plan) => <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>{plan.badge && <span className="price-badge"><Sparkles /> {plan.badge}</span>}<h3>{plan.name}</h3><div className="price"><strong>{plan.price}</strong><span>{plan.period}</span></div><p>{plan.note}</p><a href={registerUrl}>{plan.featured ? 'Elegir anual' : `Elegir ${plan.name.toLowerCase()}`} <ArrowRight /></a></article>)}</div>
        <div className="included-card"><div><strong>Todo lo que necesita tu gimnasio</strong><span>Sin módulos escondidos ni cargos por función.</span></div><ul>{included.map((item) => <li key={item}><Check /> {item}</li>)}</ul></div>
      </section>

      <section id="preguntas" className="content-section faq-section">
        <div className="faq-heading"><span className="section-kicker">ANTES DE EMPEZAR</span><h2>Preguntas frecuentes.</h2><p>Lo importante, explicado sin letra pequeña.</p></div>
        <Accordion className="faq-list">
          <AccordionItem value="item-1"><AccordionTrigger>¿Gymvexa funciona sin internet?</AccordionTrigger><AccordionContent>Sí. La operación cotidiana es local y puede continuar hasta siete días sin conexión. Internet se utiliza para validar la licencia y recibir actualizaciones.</AccordionContent></AccordionItem>
          <AccordionItem value="item-2"><AccordionTrigger>¿Necesito comprar un lector de huellas?</AccordionTrigger><AccordionContent>No es obligatorio. Puedes registrar asistencias por nombre o teléfono. Si deseas biometría, Gymvexa está preparado para el lector ZKTeco ZK9500.</AccordionContent></AccordionItem>
          <AccordionItem value="item-3"><AccordionTrigger>¿Qué ocurre después de pagar?</AccordionTrigger><AccordionContent>Recibirás tu clave y la descarga para Windows. Al abrir Gymvexa, un asistente te ayudará a configurar el gimnasio, el dueño y los planes.</AccordionContent></AccordionItem>
          <AccordionItem value="item-4"><AccordionTrigger>¿Las actualizaciones borran mis datos?</AccordionTrigger><AccordionContent>No. Antes de instalar una versión nueva, Gymvexa crea un respaldo. El instalador reemplaza el programa, no la base operativa.</AccordionContent></AccordionItem>
          <AccordionItem value="item-5"><AccordionTrigger>¿Puedo controlar lo que hace cada empleado?</AccordionTrigger><AccordionContent>Sí. El dueño puede asignar permisos distintos por perfil y consultar una bitácora de acciones.</AccordionContent></AccordionItem>
        </Accordion>
      </section>

      <section className="final-cta-section"><div className="final-glow" /><Image src="/gymvexa-icon.svg" alt="" width={58} height={58} /><span className="section-kicker light">TU GIMNASIO, MEJOR OPERADO</span><h2>Haz que cada día cuente.</h2><p>Prueba Gymvexa durante 14 días y descubre una forma más clara de llevar tu gimnasio.</p><div><a href={registerUrl} className="primary-cta inverse">Crear mi gimnasio <ArrowRight /></a><a href={loginUrl} className="text-cta">Ya tengo una cuenta</a></div><small>Sin tarjeta para comenzar · Configuración guiada · Soporte en español</small></section>

      <footer><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><Image src="/gymvexa-icon.svg" alt="" width={34} height={34} /></span><span className="brand-name">Gym<span>vexa</span></span></a><p>Software de gestión para gimnasios, creado por TEC Capital.</p><div><a href="#funciones">Funciones</a><a href="#planes">Planes</a><a href="#preguntas">Preguntas</a><a href={loginUrl}>Acceso</a></div><small>© 2026 Gymvexa. Todos los derechos reservados.</small></footer>
    </main>
  );
}
