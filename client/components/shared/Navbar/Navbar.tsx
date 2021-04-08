import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-baseline justify-between px-8 py-4 bg-indigo-800">
      <Link href="/">
        <a className="text-lg font-semibold uppercase">{`📖 Book API`}</a>
      </Link>
      <Link href="/create-book">
        <a className="font-bold">+ Add Book</a>
      </Link>
    </nav>
  )
}
