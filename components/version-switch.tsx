import { LayoutTemplate, Sparkles } from 'lucide-react';

type Props = { current: 'nueva' | 'clasica' };

/** Switch para alternar entre las dos versiones de la landing (misma marca, mismo diseño). */
export default function VersionSwitch({ current }: Props) {
  return (
    <div className="version-switch" aria-label="Versión del sitio">
      <a href="/" className={current === 'nueva' ? 'is-active' : ''} aria-current={current === 'nueva' ? 'page' : undefined}>
        <Sparkles /> Nueva
      </a>
      <a href="/clasico/" className={current === 'clasica' ? 'is-active' : ''} aria-current={current === 'clasica' ? 'page' : undefined}>
        <LayoutTemplate /> Clásica
      </a>
    </div>
  );
}
