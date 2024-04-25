import React from 'react';
import {db} from '@/db';
import { redirect } from 'next/navigation';

const CreateSnippetPage = () => {

  async function createSnippet(formData: FormData){
    'use server'

    const title = formData.get('title') as string
    const code = formData.get('code') as string

    await db.snippet.create({
      data:{
        title,
        code
      }
    })

    redirect('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <h1 className="my-6 text-lg font-bold">CREATE SNIPPET</h1>
        <form action={createSnippet}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="w-full border rounded-md px-4 py-2"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="code" className="block mb-2">Code</label>
            <textarea 
              name="code" 
              id="code" 
              className="w-full border rounded-md px-4 py-2"
              rows="6"
              placeholder="Enter code"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
