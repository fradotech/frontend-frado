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

const PostCard: (props: TProps) => JSX.Element = (props: TProps) => {
  return (
    <div className="card w-fit p-4 border-base-content/10 rounded-xl font-work shadow-[0_8px_16px_-6px] shadow-base-content/20">
      <figure>
        <Image
          src={props.data.imageUrl || 'https://placehold.it/360x240'}
          alt="email"
          className={`rounded-xl`}
          width={360}
          height={240}
        />
      </figure>
      <div className="card-body py-6 px-2">
        <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
          props.data.tags[0]
        </span>
        <h3>
          <Link
            href="/single-post"
            className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
          >
            {props.data.title}
          </Link>
        </h3>
        <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
          <div className=" flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <Image
                  src="https://placehold.it/100x100"
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h5>
              <Link
                href="/"
                className="text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {props.data.author || 'Frado'}
              </Link>
            </h5>
          </div>
          <p className="text-base">{Util.formatDate(props.data.createdAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
