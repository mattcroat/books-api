import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { createBook } from '@/root/api/books'
import { BookForm, Container } from '@/root/components/shared'

import type { Book } from '@/root/types/book'

export function CreateBook() {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation(createBook)

  async function onFormSubmit(book: Book) {
    await mutateAsync(book)
    router.push('/')
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold">Update Book</h1>
      <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
    </Container>
  )
}
