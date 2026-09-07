'use client';

import Image from 'next/image';
import {
  ArrowLeftRight, ArrowRight, Banknote, BellRing, Check, CircleDollarSign, ClipboardList,
  CreditCard, Fingerprint, History, KeyRound, LockKeyhole, Monitor,
  QrCode, ShieldCheck, Smartphone, Store, Tablet, Users, Wallet, X,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import VersionSwitch from '@/components/version-switch';

const registerUrl = 'https://gymteck.vercel.app/registro';
const loginUrl = 'https://gymteck.vercel.app/login';
const waMore = 'https://wa.me/5212361112213?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20de%20Gymvexa';
const waStart = 'https://wa.me/5212361112213?text=Hola%2C%20quiero%20empezar%20con%20Gymvexa%20para%20mi%20gimnasio';

const features = [
  [QrCode, 'ACCESO', 'Acceso inteligente', 'Entrada por QR, PIN o tarjeta. Si la membresía está activa, entra. Si está vencida, se bloquea.', 'cyan'],
  [Banknote, 'COBROS', 'Cobros sin fricción', 'Registra pagos en efectivo, transferencia, OXXO, tarjeta o monedero. Todo queda en el historial del socio.', 'blue'],
  [Wallet, 'MONEDERO', 'Monedero digital', 'Tus socios recargan saldo y lo usan para renovar, comprar productos o pagar servicios dentro del gimnasio.', 'violet'],
  [ClipboardList, 'FIADO', 'Fiado con límite', 'Permite fiar con topes definidos. Sabes quién debe, cuánto debe y desde cuándo.', 'amber'],
  [CircleDollarSign, 'CAJA', 'Cierre de caja', 'Cuadra efectivo, ventas, recargas, pagos y diferencias por turno. Sin depender de libretas o Excel.', 'blue'],
  [Monitor, 'VISTAS', 'Tres vistas conectadas', 'Panel del dueño, mostrador para clientes y app de miembros. Cada quien ve solo lo que necesita.', 'cyan'],
] as const;

const before = ['Pagos anotados en libreta', 'Fiados que se olvidan', 'Productos sin registro', 'Socios vencidos que entran', 'Caja que no cuadra', 'Todo se resuelve por WhatsApp'];
const after = ['Pagos con historial', 'Fiado visible y con tope', 'Productos registrados', 'Acceso según membresía', 'Cierre de caja por turno', 'Panel en tiempo real'];

const steps = [
  ['Crea tu cuenta', 'Regístrate gratis y entra al panel en minutos.'],
  ['Configura tu gimnasio', 'Agrega planes, socios, productos, métodos de pago y reglas de acceso.'],
  ['Activa tus cobros', 'Empieza a registrar pagos, ventas, monedero, fiado y caja.'],
  ['Controla todo', 'Consulta accesos, socios, ventas, inventario y movimientos desde un solo lugar.'],
];

const includes = ['Panel del dueño completo', 'Mostrador para tus clientes', 'App de miembros (PWA)', 'Acceso por QR, PIN y tarjeta', 'Monedero digital y fiado', 'Cierre de caja por turno', 'Inventario y ventas', 'Socios y planes ilimitados'];

const gyms = [
  ['gladiator', 'Gladiator Fitness'], ['crack', 'Gym Crack'], ['golds', "Gold's Gym"], ['yu', 'YU GYM'], ['king', 'The King Gym'], ['cubi', 'GymCubi'],
  ['infinity', 'Infinity Pro Gym'], ['activa', 'Activa Club Fitness'], ['triton', 'Triton Fitness'], ['clubgym', 'Club Gym'], ['genesis', 'Club Génesis'],
  ['pk', 'PK Gym'], ['enermfit', 'Enermfit Fitness Center'], ['megahulk', 'Mega Hulk Gym'], ['brothers', 'Brothers Gym'], ['martin', 'Martin Gym'],
];

const reviews = ['activa', 'brothers', 'clubgym', 'crack', 'enermfit', 'infinity', 'king', 'martin', 'megahulk', 'yu'];

const views = [
  [Monitor, 'Panel del dueño', 'Socios, planes, pagos, productos, personal, caja, inventario y reportes.'],
  [Tablet, 'Panel de clientes', 'La tablet del mostrador: comprar, fiar, renovar, inscribirse y escanear el QR.'],
  [Smartphone, 'App de miembros (PWA)', 'El socio entra desde su celular con PIN: renueva, compra y recibe avisos.'],
] as const;

export default function Clasico() {
  return (
    <main className="site">
      <header className="site-nav">
        <a href="#inicio" className="brand" aria-label="Gymvexa, inicio">
          <span className="brand-mark"><Image src="/gymvexa-icon.svg" alt="" width={38} height={38} priority /></span>
          <span className="brand-name">Gym<span>vexa</span></span>
        </a>
        <nav aria-label="Navegación principal" className="nav-links">
          <a href="#problema">Problema</a><a href="#funciones">Funciones</a><a href="#incluye">Qué incluye</a><a href="#preguntas">Preguntas</a>
        </nav>
        <div className="nav-actions">
          <VersionSwitch current="clasica" />
          <a href={registerUrl} className="nav-cta">Comenzar gratis <ArrowRight /></a>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="pulse-dot" /> PLATAFORMA WEB · PANEL, MOSTRADOR Y APP</div>
          <h1>El software que automatiza tu gimnasio<br /><span>desde un solo panel.</span></h1>
          <p className="hero-lead">Gestiona accesos, socios, membresías, pagos, caja, inventario y ventas con una plataforma diseñada para gimnasios que buscan operar con más orden, control y eficiencia.</p>
          <div className="hero-actions">
            <a href={registerUrl} className="primary-cta">Comenzar gratis <ArrowRight /></a>
            <a href={waMore} className="secondary-cta">Hablar con ventas <ArrowRight /></a>
          </div>
          <p className="download-note">Sin tarjeta para empezar · Sin comisión por socio · Listo para gimnasios reales</p>
          <div className="trust-row">
            <span><Banknote /> Efectivo</span><span><Store /> OXXO</span><span><CreditCard /> Tarjeta</span><span><ArrowLeftRight /> Transferencia</span><span><Wallet /> Monedero</span>
          </div>
        </div>

        <div id="producto" className="product-stage">
          <div className="stage-glow" />
          <div className="window-shell">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>Gymvexa · Panel del dueño</span><div className="window-status"><span /> En tiempo real</div></div>
            <div className="window-image"><Image src="/clasico/principal.webp" alt="Panel principal de Gymvexa con accesos, pagos, fiados y caja del día" width={1920} height={1035} priority /></div>
          </div>
          <div className="floating-card floating-access"><span className="floating-icon"><ClipboardList /></span><div><strong>3 fiados activos</strong><small>Con tope y sin olvidos</small></div><Check /></div>
          <div className="floating-card floating-update"><span className="floating-icon"><CircleDollarSign /></span><div><strong>$0 diferencia en caja</strong><small>Turno conciliado</small></div></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Beneficios principales">
        <div><strong>6+</strong><span>métodos de pago</span></div><div><strong>3</strong><span>vistas en un sistema</span></div><div><strong>$0</strong><span>comisión por socio</span></div><div><strong>24/7</strong><span>acceso y control</span></div>
      </section>

      <section className="cl-logos" aria-label="Gimnasios que ya confían en Gymvexa">
        <div className="cl-logos-head"><span className="section-kicker">YA CONFÍAN EN GYMVEXA</span><p>Dueños reales usando Gymvexa para controlar accesos, caja, ventas y socios.</p></div>
        <div className="cl-marquee">
          <div className="cl-marquee-track">
            {[...gyms, ...gyms].map(([slug, name], i) => <span key={`${slug}-${i}`} className="cl-logo" aria-hidden={i >= gyms.length ? 'true' : undefined}><Image src={`/clasico/gym-${slug}.webp`} alt={i >= gyms.length ? '' : name} width={120} height={56} /></span>)}
          </div>
        </div>
      </section>

      <section id="problema" className="dark-section">
        <div className="dark-noise" />
        <div className="dark-copy"><span className="section-kicker light">EL PROBLEMA REAL</span><h2>Los gimnasios no pierden control por falta de clientes.<br /><em>Lo pierden por operar a ciegas.</em></h2><p>El problema no es cobrar en efectivo. Es que cada pago, fiado, producto y acceso queda suelto, sin historial y sin evidencia. Gymvexa convierte ese caos en movimientos registrados.</p><ul><li><X /> &ldquo;No sé quién me debe. El fiado vive suelto en una libreta.&rdquo;</li><li><X /> &ldquo;No sé cuánto entró hoy. El efectivo no cuadra al cerrar.&rdquo;</li><li><X /> &ldquo;Se me fue un producto. La venta nunca quedó registrada.&rdquo;</li><li><X /> &ldquo;Entró un socio vencido. Nadie validó su membresía.&rdquo;</li></ul></div>
        <div className="flow-card cl-compare">
          <div className="flow-head"><span>EL MISMO GIMNASIO, DOS REALIDADES</span><span className="live-pill"><i /> EN VIVO</span></div>
          <div className="cl-compare-cols">
            <div className="cl-compare-col is-before"><strong>Antes · Operando a ciegas</strong>{before.map((t) => <span key={t}><X /> {t}</span>)}</div>
            <div className="cl-compare-col is-after"><strong>Con Gymvexa · Todo bajo control</strong>{after.map((t) => <span key={t}><Check /> {t}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="funciones" className="content-section feature-section">
        <div className="section-heading"><div><span className="section-kicker">TODO EN UN SISTEMA</span><h2>Todo lo que tu gimnasio<br />necesita para operar solo.</h2></div><p>Pensado para gimnasios reales: efectivo, fiado, recepción y socios sin banco. Cada función la prendes o apagas según tu operación.</p></div>
        <div className="feature-grid cl-six">
          {features.map(([Icon, eyebrow, title, copy, tone]) => <article key={title} className={`feature-card tone-${tone}`}><div className="feature-top"><span className="feature-icon"><Icon /></span><small>{eyebrow}</small></div><h3>{title}</h3><p>{copy}</p><span className="feature-line" /></article>)}
        </div>
      </section>

      <section className="content-section cl-split">
        <div className="cl-split-media"><Image src="/clasico/operacion.webp" alt="Mostrador y app de socios de Gymvexa trabajando en tiempo real" width={1400} height={900} /></div>
        <div className="cl-split-copy">
          <span className="section-kicker">OPERACIÓN AUTOMÁTICA</span>
          <h2>El gimnasio sigue operando aunque tú no estés.</h2>
          <p>Tus socios se registran, renuevan, compran productos, recargan saldo o consultan su perfil desde la tablet del mostrador o desde la app de miembros. Sin que tú estés ahí.</p>
          <ul>
            <li><Check /> Un socio renueva su mensualidad desde la tablet, sin hacer fila.</li>
            <li><Check /> Un cliente compra agua o proteína y la paga con su monedero digital.</li>
            <li><Check /> Un nuevo usuario se registra escaneando el QR y queda dado de alta al instante.</li>
            <li><Check /> Un socio vencido intenta entrar y el sistema lo bloquea en la puerta.</li>
            <li><Check /> Recepción vende, pero no perdona deudas ni cambia precios sin permiso.</li>
          </ul>
        </div>
      </section>

      <section className="content-section cl-split is-reverse">
        <div className="cl-split-media"><Image src="/clasico/dinero.webp" alt="Cierre de caja por turno en Gymvexa" width={1400} height={900} /></div>
        <div className="cl-split-copy">
          <span className="section-kicker">DINERO Y CAJA</span>
          <h2>El dinero no se pierde: cada movimiento deja rastro.</h2>
          <p>Pensado para gimnasios que cobran en efectivo, transferencia, OXXO, tarjeta, monedero o incluso fiado. Recargas, compras, pagos, deudas y ajustes: todo se registra como movimiento.</p>
          <ul>
            <li><Check /> <b>Efectivo en caja.</b> Cada pago en efectivo entra al corte del día.</li>
            <li><Check /> <b>Monedero digital.</b> Saldo por socio para comprar sin tarjeta.</li>
            <li><Check /> <b>Fiado con límite.</b> Deuda controlada y un tope que no se rebasa.</li>
            <li><Check /> <b>Esperado vs. contado.</b> El sistema te dice si falta o sobra dinero.</li>
            <li><Check /> <b>Historial por socio.</b> Estado de cuenta completo de cada cliente.</li>
          </ul>
          <p className="cl-note">El saldo y la deuda no se editan a mano: se calculan sumando movimientos, como un estado de cuenta. Los anteriores nunca se borran.</p>
        </div>
      </section>

      <section className="content-section cl-split">
        <div className="cl-split-media"><Image src="/clasico/vistas.webp" alt="Las vistas de Gymvexa: panel del dueño, mostrador y app de miembros" width={1400} height={900} /></div>
        <div className="cl-split-copy">
          <span className="section-kicker">VISTAS DEL SISTEMA</span>
          <h2>Cada persona ve solo lo que necesita.</h2>
          <p>Gymvexa no es una sola pantalla. Está dividido en vistas para que el dueño, recepción, el cliente en mostrador y el socio desde su celular tengan una experiencia distinta, conectada a una sola fuente de verdad.</p>
          <div className="cl-views">
            {views.map(([Icon, title, copy]) => <div key={title} className="cl-view"><span className="floating-icon"><Icon /></span><div><strong>{title}</strong><small>{copy}</small></div></div>)}
          </div>
        </div>
      </section>

      <section className="content-section protection-section"><div className="protection-card"><div className="protection-icon"><LockKeyhole /></div><span className="section-kicker">SEGURIDAD</span><h2>Control sin confianza ciega.</h2><p>Gymvexa registra quién hizo cada acción importante: quién activó una membresía, registró un pago, modificó inventario, perdonó una deuda o cerró caja. Cada acción sensible deja evidencia.</p><div className="security-tags"><span><Users /> Permisos por rol</span><span><History /> Bitácora de acciones</span><span><KeyRound /> Zona privada con PIN</span><span><Fingerprint /> Accesos que no se borran</span><span><ShieldCheck /> Cancelaciones con folio</span></div></div></section>

      <section id="como" className="content-section">
        <div className="section-heading"><div><span className="section-kicker">EMPIEZA EN MINUTOS</span><h2>Empieza gratis.<br />Activa cuando estés listo.</h2></div><p>Crea tu cuenta, explora el panel y activa Gymvexa cuando quieras operar tu gimnasio en serio.</p></div>
        <div className="cl-steps">
          {steps.map(([title, copy], i) => <article key={title} className="cl-step"><span className="cl-step-num">{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section id="incluye" className="content-section cl-includes-section">
        <div className="pv-addons cl-includes">
          <div className="pv-addons-head">
            <span className="pv-mini-kicker"><BellRing /> TODO INCLUIDO</span>
            <h3>Un solo sistema. Sin comisión.</h3>
            <p>El dinero de tus clientes es tuyo. Gymvexa solo te da el sistema para operar mejor.</p>
          </div>
          <div className="pv-kit">
            {includes.map((label) => <span key={label} className="pv-kit-item"><Check /> {label}</span>)}
          </div>
          <div className="pv-final-actions cl-includes-actions"><a href={registerUrl} className="pv-cta solid">Crear cuenta y verlo por dentro <ArrowRight /></a><a href={waStart} className="pv-cta ghost">Hablar con ventas</a></div>
        </div>
      </section>

      <section id="testimonios" className="content-section">
        <div className="section-heading"><div><span className="section-kicker">TESTIMONIOS</span><h2>Dueños reales. Problemas reales.<br />Control real.</h2></div><p>Gimnasios que ya recuperaron control de caja, accesos, ventas y socios con Gymvexa.</p></div>
        <div className="cl-shots">
          {reviews.map((slug) => <figure key={slug} className="cl-shot"><Image src={`/clasico/rev-${slug}.webp`} alt={`Reseña de un gimnasio usando Gymvexa`} width={720} height={480} /></figure>)}
        </div>
      </section>

      <section id="preguntas" className="content-section faq-section">
        <div className="faq-heading"><span className="section-kicker">ANTES DE EMPEZAR</span><h2>¿Tienes dudas?</h2><p>Lo que más nos preguntan los dueños de gimnasios antes de empezar.</p></div>
        <Accordion className="faq-list">
          <AccordionItem value="item-1"><AccordionTrigger>¿Mis clientes necesitan tarjeta o banco?</AccordionTrigger><AccordionContent>No. Gymvexa funciona con efectivo, OXXO, transferencia, tarjeta o monedero digital. Tus socios pagan como prefieran, sin obligarlos a tener cuenta bancaria.</AccordionContent></AccordionItem>
          <AccordionItem value="item-2"><AccordionTrigger>¿Qué es el monedero digital y cómo funciona?</AccordionTrigger><AccordionContent>Es un saldo digital que cada socio tiene dentro de Gymvexa. Recargan su monedero en efectivo en tu mostrador (o tú se los cargas) y con ese saldo renuevan su membresía, pagan o compran productos ellos solos, sin que tengas que estar presente. Tú ves cada recarga y cada movimiento en tiempo real.</AccordionContent></AccordionItem>
          <AccordionItem value="item-3"><AccordionTrigger>¿Cómo entran mis socios al gimnasio?</AccordionTrigger><AccordionContent>Por QR, PIN o tarjeta. Si su membresía está al corriente, el acceso se permite; si está vencida, no. Cada entrada queda registrada con su hora.</AccordionContent></AccordionItem>
          <AccordionItem value="item-4"><AccordionTrigger>¿Puedo probarlo antes de pagar?</AccordionTrigger><AccordionContent>Sí. Creas tu cuenta gratis, exploras todo el panel por dentro y lo activas con un pago seguro por Stripe solo cuando estés listo.</AccordionContent></AccordionItem>
          <AccordionItem value="item-5"><AccordionTrigger>¿Cobran comisión por cada socio?</AccordionTrigger><AccordionContent>No. Pagas una sola cuota por usar Gymvexa. El dinero que cobras a tus clientes llega directo a tu cuenta, sin que toquemos un peso.</AccordionContent></AccordionItem>
          <AccordionItem value="item-6"><AccordionTrigger>¿Qué pasa con el fiado de mis socios?</AccordionTrigger><AccordionContent>Tú defines un tope de fiado. Sabes quién debe, cuánto y desde cuándo, y la deuda no se borra aunque el socio cancele su membresía.</AccordionContent></AccordionItem>
          <AccordionItem value="item-7"><AccordionTrigger>¿Necesito saber de tecnología para usarlo?</AccordionTrigger><AccordionContent>No. Está pensado para que lo uses desde el primer día, sin instalaciones complicadas. Y si te atoras, te damos soporte.</AccordionContent></AccordionItem>
        </Accordion>
      </section>

      <section id="contacto" className="final-cta-section"><div className="final-glow" /><Image src="/gymvexa-icon.svg" alt="" width={58} height={58} /><span className="section-kicker light">TU GIMNASIO, BAJO CONTROL</span><h2>Toma el control de tu gimnasio.</h2><p>Crea tu cuenta gratis y mira por dentro cómo Gymvexa ordena tus accesos, cobros, socios, caja y ventas desde un solo lugar.</p><div><a href={registerUrl} className="primary-cta inverse">Comenzar gratis <ArrowRight /></a><a href={waStart} className="text-cta">Hablar con ventas</a></div><small>Sin tarjeta para empezar · Soporte en español · Tehuacán, Puebla, MX</small></section>

      <footer><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><Image src="/gymvexa-icon.svg" alt="" width={34} height={34} /></span><span className="brand-name">Gym<span>vexa</span></span></a><p>Gymvexa automatiza accesos, cobros, caja, socios y productos para gimnasios reales.</p><div><a href="#funciones">Funciones</a><a href="#como">Cómo funciona</a><a href="#incluye">Qué incluye</a><a href="#preguntas">Preguntas</a><a href={loginUrl}>Acceso</a></div><small>© 2026 Gymvexa. Todos los derechos reservados.</small></footer>
    </main>
  );
}
