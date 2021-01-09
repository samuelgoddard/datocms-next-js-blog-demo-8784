import Date from '../components/date'
import { Image } from 'react-datocms'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-12">
        <Image data={{...coverImage.responsiveImage, alt: `Cover Image for ${title}`}}
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 font-bold">
          Posted: <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
