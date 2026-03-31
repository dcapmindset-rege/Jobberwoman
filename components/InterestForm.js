import { useState } from 'react';

export default function InterestForm({ programType, programId, programTitle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, programType, programId, programTitle }),
    });
    if (res.ok) {
      setSubmitted(true);
      setName('');
      setEmail('');
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return <p className="text-green-600">Thank you! We'll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 border-t pt-4">
      <h3 className="font-semibold">Interested in this opportunity?</h3>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full mb-2 rounded"
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Register Interest
        </button>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </div>
    </form>
  );
}
