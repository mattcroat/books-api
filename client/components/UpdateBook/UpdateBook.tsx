import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'

import { getBook, updateBook } from '@/root/api/books'
import { BookForm, Container } from '@/root/components/shared'

import type { Book } from '@/root/types/book'

export function UpdateBook() {
  const router = useRouter()
  const id = router?.query?.id as string

  const { data: book, error, isLoading, isError } = useQuery<Book, Error>(
    ['book', { id }],
    getBook
  )
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook)

  async function onFormSubmit(book: Book) {
    await mutateAsync({ ...book, id })
    router.push('/')
  }

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  if (isError) {
    return (
      <Container>
        Oh dear! 😱: <strong>{error.message}</strong>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold">Update Book</h1>
      <BookForm
        defaultValues={book}
        onFormSubmit={onFormSubmit}
        isLoading={isMutating}
      />
    </Container>
  )
}
