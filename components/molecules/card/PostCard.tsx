import { IPost } from '@/app/(routes)/blog/_infrastructure/post.interface'
import { Util } from '@/app/_infrastructure/util'
import Image from 'next/image'
import Link from 'next/link'

type TProps = {
  data: IPost
}

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostCard: React.FC<TProps> = (props) => {
  return (
    <div className="p-2 border-b md:border-b-0">
      <Link href={`/${props.data.id}`}>
        <figure>
          <Image
            src={props.data.imageUrl || 'https://placehold.it/360x240'}
            alt="image_post"
            className="object-cover h-200 w-360"
            width={360}
            height={200}
            style={{ maxHeight: '200px', minHeight: '200px' }}
          />
        </figure>
      </Link>
      <div className="card-body py-6 px-2">
        <Link href={`/${props.data.id}`}>
          <h4
            className="mb-2 overflow-hidden overflow-ellipsis"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {props.data.title}
          </h4>
          <p
            className="mb-2 overflow-hidden overflow-ellipsis opacity-60"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
          >
            {props.data.summary}
          </p>
        </Link>
        <div className="flex mt-4 space-x-2">
          {props.data.tags?.map((data) => {
            return (
              <span
                key={data.id}
                className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-xs px-2 py-1 min-h-fit h-fit rounded-md w-fit capitalize font-medium"
              >
                {data.name}
              </span>
            )
          })}
        </div>
        <Link href={`/${props.data.id}`}>
          <div className="mt-2 flex justify-between opacity-75">
            <p className="text-base">{Util.formatDate(props.data.createdAt)}</p>
            <p className="text-base">{`${
              props.data.readingTimeInMinutes || 2
            } min read`}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
