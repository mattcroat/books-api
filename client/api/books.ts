import type { Book, QueryKey } from '@/root/types/book'

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER ?? ''

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch(`${BASE_URL}/books`)

  if (!response.ok) {
    throw new Error('Kaboom 💥')
  }

  return response.json()
}
export async function updateBook({ id, ...book }: Book): Promise<Book> {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })

  if (!response.ok) {
    throw new Error((await response.json()).message)
  }

  return response.json()
}

export async function getBook({
  queryKey,
}: {
  queryKey: QueryKey
}): Promise<Book> {
  // typescript is mad about _key, but , is fine
  const [, { id }] = queryKey
  const response = await fetch(`${BASE_URL}/books/${id}`)

  if (!response.ok) {
    throw new Error((await response.json()).message)
  }

  return response.json()
}

export async function removeBook(id: number): Promise<boolean> {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error((await response.json()).message)
  }

  return true
}

export async function createBook(book: Book): Promise<Book> {
  const response = await fetch(`${BASE_URL}/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })

  if (!response.ok) {
    throw new Error((await response.json()).message)
  }

  return response.json()
}
