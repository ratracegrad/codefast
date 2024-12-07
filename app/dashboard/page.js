import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Dashboard</h1>
      <div>Private dashboard area.</div>
      <Link href="/">Home</Link>
    </main>
  );
}
