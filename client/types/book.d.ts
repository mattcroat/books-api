export type Book = {
  id: string
  title: string
  author: string
}

type BookFormProps = {
  defaultValues?: Book
  onFormSubmit: (book: Book) => void
  isLoading: boolean
}

type QueryKey = [
  key: string,
  id: {
    id: string
  }
]
