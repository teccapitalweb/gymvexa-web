import { LayoutDashboard, Sparkles } from 'lucide-react';

// oxlint-disable next/no-html-link-for-pages -- The same component is rendered by the static GitHub Pages build.

type Props = { current: 'nueva' | 'clasica' };

/** Switch para alternar entre las dos versiones de la landing (misma marca, mismo diseño). */
export default function VersionSwitch({ current }: Props) {
  return (
    <div className="version-switch" aria-label="Versión del sitio">
      <a href="/" className={current === 'nueva' ? 'is-active' : ''} aria-current={current === 'nueva' ? 'page' : undefined}>
        <span className="version-switch-icon"><Sparkles /></span><span>Nueva</span>
      </a>
      <a href="/clasico/" className={current === 'clasica' ? 'is-active' : ''} aria-current={current === 'clasica' ? 'page' : undefined}>
        <span className="version-switch-icon"><LayoutDashboard /></span><span>Clásica</span>
      </a>
    </div>
  );
}
