import { db } from '@/db';
import Link from 'next/link';

const HomePage = async () => {
  const snippets = await db.snippet.findMany();

  const snippetsTitles = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="block p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        {snippet.title}
      </Link>
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>
      <div className="flex justify-center mb-6">
        <Link
          href="/snippets/new"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          New Snippet
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {snippetsTitles}
      </div>
    </div>
  );
};

export default HomePage;
