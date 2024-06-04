import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: 'normal',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Euller Gomes | Dev Full Stack',
  description:
    'Portfólio de Euller Gomes, Desenvolvedor Full Stack, apaixonado por tecnologia e com foco em desenvolver em alta performance. Saiba mais sobre mim e meus projetos.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
