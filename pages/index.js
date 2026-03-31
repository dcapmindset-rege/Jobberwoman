import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-purple-800">Your career, on your terms.</h1>
        <p className="text-xl text-gray-600 mt-4">
          Flexible jobs • Returnships • Community
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/jobs" className="bg-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            Find a Job
          </Link>
          <Link href="/returnships" className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block">
            Explore Returnships
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="border rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">🎯 Flexible Work</h2>
          <p>Remote, hybrid, part‑time – filter by what fits your life.</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">🔄 Returnships</h2>
          <p>Paid programs to restart your career after a break.</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">🤝 Community</h2>
          <p>Mentorship, events, and a network of women like you.</p>
        </div>
      </div>
    </Layout>
  );
}
