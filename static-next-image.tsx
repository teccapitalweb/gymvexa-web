import type { ImgHTMLAttributes } from 'react';

type StaticImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  priority?: boolean;
};

export default function StaticImage({ src, priority, ...props }: StaticImageProps) {
  const base = import.meta.env.BASE_URL;
  const resolved = src.startsWith('/') ? `${base}${src.slice(1)}` : src;
  return <img src={resolved} loading={priority ? 'eager' : 'lazy'} {...props} />;
}
