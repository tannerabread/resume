// date formatter
import { parseISO, format } from 'date-fns'

function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL      d, yyyy')}</time>
}

// post title
function PostTitle({ children }) {
  return (
    <h1>
      {children}
    </h1>
  )
}

// avatar
function Avatar({ name, picture }) {
  return (
    <div>
      <img src={picture} alt={name} />
      <div>{name}</div>
    </div>
  )
}

// cover image
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
        <Avatar name={author.name} />
      </div>
      <div>
        <div>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          <Avatar name={author.name} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}