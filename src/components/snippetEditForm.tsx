'use client';
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import {editSnippet} from '@/actions'

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {

  const [code,setCode] = useState(snippet.code);

  const changeHandler = (value:string="")=> {
    setCode(value);
  }

  const editSnippetAction = editSnippet.bind(null,snippet.id,code)

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Snippet</h2>
      <p className="text-gray-600 mb-6">You are editing the snippet: {snippet.title}</p>
      {/* Form fields for editing can be added here */}

      <Editor
        height="50vh" // Reduced height for better UX
        language="javascript" // Language without 'default'
        defaultValue={snippet.code}
        options={{ theme: 'vs-dark' }} // Dark theme for the editor
        className="rounded-md border" // Adds border and rounded corners
        onChange={(value) => changeHandler(value)}
      />

      <div className="mt-6 flex justify-end gap-4">
        <form action={editSnippetAction}>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Save
        </button>
        </form>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SnippetEditForm;
