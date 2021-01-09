import Date from '../components/date'
import Button from '../components/button'
import { Image } from 'react-datocms'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  featured,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title} className="block mb-2">
          <Image
            data={{...coverImage.responsiveImage, alt: `Cover Image for ${title}` }}
            className="w-full"
          />
        </a>
      </Link>
      <div className="border-b mb-3">
        <h3 className={featured ? `text-4xl mb-0 font-bold` : `text-xl mb-0 font-bold`}>
          <Link href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-sm mb-2">
          <Date dateString={date} />
        </div>
      </div>
      { !featured && (
        <>
          <p className="mb-4">{excerpt}</p>
          <Button link={`/posts/${slug}`}>
            Read More
          </Button>
        </>
      )}
    </div>
  )
s}
