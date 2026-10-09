import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yannawut Roumsuk — DevOps Engineer & Product Builder",
  description:
    "Selected products, automation, infrastructure, and AI experiments by Yannawut Roumsuk.",
  openGraph: {
    title: "Yannawut Roumsuk — Selected Work",
    description: "Reliable systems. Useful automation. Thoughtful products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
