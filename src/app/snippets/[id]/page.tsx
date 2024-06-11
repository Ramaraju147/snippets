import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { deleteSnippet } from '@/actions';

interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

const ShowSnippetPage = async ({ params }: ShowSnippetPageProps) => {
  // Simulate some delay
  await new Promise((r) => setTimeout(r, 2000));

  const id = parseInt(params.id, 10);
  const deleteSnippetAction = deleteSnippet.bind(null,id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    notFound();
    return;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link href={`${snippet.id}/edit`}>
          Edit
          </Link>
        </button>
        <form action={deleteSnippetAction}>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
        </form>
      </div>

      <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
        <code className="text-sm text-gray-700">{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ShowSnippetPage;
