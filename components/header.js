import Container from '../components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 md:py-10">
      <Container>
        <div className="flex flex-wrap">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold">
              <Link href="/">
                <a className="hover:underline focus:underline">Next x Tailwind x Dato</a>
              </Link>.
            </h2>
          </div>

          <div className="w-auto ml-auto">
            <Link href="/about"><a aria-label="Navigate to About Page" className="hover:underline focus:underline">About</a></Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
