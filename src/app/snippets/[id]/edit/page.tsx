import {db} from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippetEditForm'

interface editSnippetPageProps{
params:{
  id: string
}
}

const editSnippetPage = async ({params}:editSnippetPageProps) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({where:{id}})
  if(!snippet){
    return notFound()
  }
  return <SnippetEditForm snippet={snippet} />
}

export default editSnippetPage;