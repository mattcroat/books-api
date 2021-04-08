export async function getAllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/books`)

  if (!response.ok) {
    throw new Error('Kaboom 💥')
  }

  return response.json()
}
