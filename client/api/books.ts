import type { Book } from '@/root/types/book'

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/books`)

  if (!response.ok) {
    throw new Error('Kaboom 💥')
  }

  return response.json()
}

export async function removeBook(id: number): Promise<boolean> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/books/${id}`,
    {
      method: 'DELETE',
    }
  )

  if (!response.ok) {
    throw new Error((await response.json()).message)
  }

  return true
}
