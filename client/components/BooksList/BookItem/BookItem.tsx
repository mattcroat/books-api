import Link from 'next/link'
import { useMutation, useQueryClient } from 'react-query'

import { removeBook } from '@/root/api/books'

export function BookItem({ id, title, author }) {
  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(removeBook)

  async function remove() {
    await mutateAsync(id)
    // need to invalidate query, and clear cache
    queryClient.invalidateQueries('books')
  }

  return (
    <article className="flex justify-between">
      <div>
        <Link href={`/update-book/${id}`}>
          <a className="font-bold underline">{title}</a>
        </Link>
        <span className="block italic">{author}</span>
      </div>
      <button
        onClick={remove}
        className="p-2 font-bold bg-indigo-600 rounded-sm disabled:opacity-50"
        disabled={isLoading ? true : false}
      >
        Yeet
      </button>
    </article>
  )
}
