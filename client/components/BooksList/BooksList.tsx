import { useQuery } from 'react-query'

import { Container } from '@/root/components/shared/Container'
import { getAllBooks } from '@/root/api/books'

export function BooksList() {
  const { data: books, error, isLoading, isError } = useQuery<any[], Error>(
    'books',
    getAllBooks
  )

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  if (isError) {
    return <Container>Oh dear! 😱: {error.message}</Container>
  }

  return (
    <Container>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </Container>
  )
}
