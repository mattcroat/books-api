export type Book = {
  id: string
  title: string
  author: string
}

type QueryKey = [
  key: string,
  id: {
    id: string
  }
]
