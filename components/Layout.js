import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">Jobberwoman</Link>
          </h1>
          <nav className="space-x-4">
            <Link href="/jobs" className="hover:underline">Jobs</Link>
            <Link href="/returnships" className="hover:underline">Returnships</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-100 text-center p-4 text-gray-600">
        © {new Date().getFullYear()} Jobberwoman – Empowering women's careers
      </footer>
    </div>
  );
}
