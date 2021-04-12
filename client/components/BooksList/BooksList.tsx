import { useQuery } from 'react-query'

import { BookItem } from '@/root/components/BooksList/BookItem'
import { Container } from '@/root/components/shared/Container'
import { getAllBooks } from '@/root/api/books'

import type { Book } from '@/root/types/book'

export function BooksList() {
  const { data: books, error, isLoading, isError } = useQuery<Book[], Error>(
    'books',
    getAllBooks
  )

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
      <div className="space-y-8">
        {books.map(({ id, title, author }) => (
          <BookItem key={id} id={id} title={title} author={author} />
        ))}
      </div>
    </Container>
  )
}
