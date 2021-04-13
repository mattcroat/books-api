import { useForm } from 'react-hook-form'

import { Book } from '@/root/types/book'

export function BookForm({ defaultValues, onFormSubmit, isLoading }) {
  const { register, handleSubmit } = useForm({ defaultValues })

  return (
    <form
      className="flex flex-col gap-2 mt-4"
      onSubmit={handleSubmit((book: Book) => onFormSubmit(book))}
    >
      <label htmlFor="title">Title</label>
      <input
        className="p-2 text-black"
        id="title"
        name="title"
        type="text"
        {...register('title')}
      />
      <label htmlFor="author">Author</label>
      <input
        className="p-2 text-black"
        id="author"
        name="author"
        type="text"
        {...register('author')}
      />
      <button
        className="p-2 mt-2 font-bold bg-indigo-600 rounded-sm max-w-min disabled:opacity-50"
        disabled={isLoading ? true : false}
      >
        Submit
      </button>
    </form>
  )
}
