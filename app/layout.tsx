import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"; 'next/font/google';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "SkyHub",
    template: "SkyHub | %s"
  },
  description: "The land of the space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`dark:bg-slate-900 bg-slate-200 bg-[linear-gradient(to_right,#DDD6FE_1px,transparent_1px),linear-gradient(to_bottom,#DDD6FE_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] ${poppins_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
