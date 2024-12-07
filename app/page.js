import Link from 'next/link';
import ButtonLogin from '../components/ButtonLogin';

export default function Home() {
  const isLoggedIn = false;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, prioritize features, and build
        products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} />
    </main>
  );
}
