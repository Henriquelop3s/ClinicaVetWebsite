import "../styles/globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aaucare.pt"),
  title: {
    default: "AuAu Care Clínica Veterinária | Lisboa - Portugal",
    template: "%s | AuAu Care",
  },
  description:
    "AuAu Care: clínica veterinária com banho e tosa, consultas, vacinas e exames. Experiência premium para o seu animal de estimação em Lisboa.",
  openGraph: {
    title: "AuAu Care Clínica Veterinária",
    description:
      "Cuidados completos para o seu animal de estimação: banho e tosa, consultas, vacinas e mais.",
    type: "website",
    locale: "pt_PT",
    siteName: "AuAu Care Clínica Veterinária",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={clsx("min-h-screen bg-background text-foreground overflow-x-hidden")}>{children}</body>
    </html>
  );
}

