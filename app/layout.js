import { Inter } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";


const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'My Profile',
  description: 'Personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-textLight text-textDark flex flex-col font-mono">
        {/* Header */}
        <header className="bg-white py-6 shadow-md font-bold text-xl">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-textDark">
          <Link href="/" className="text-textDark hover:text-primary">Yannawut Roumsuk</Link>
          </div>
          <div className="flex space-x-40">
            <Link href="/about" className="text-textDark hover:text-primary">About</Link>
            <Link href="/projects" className="text-textDark hover:text-primary">Projects</Link>
            <Link href="/hobby" className="text-textDark hover:text-primary">Hobby</Link>
          </div>
          <Link href="/contact" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-bgwhite transition duration-300 hover:text-black transition duration-300">Contact Me</Link>
        </nav>
      </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-textLight py-4 text-center text-textDark font-sans ">
          <p>© 2025 | Yannawut Roumsuk</p>
        </footer>
      </body>
    </html>
  );
}