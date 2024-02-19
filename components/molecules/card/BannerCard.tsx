import { IPost } from '@/app/(routes)/blog/_infrastructure/post.interface'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

type TProps = {
  data: IPost[]
}

const BannerCard: React.FC<TProps> = (props) => {
  const postTop = props.data.shift()

  return (
    <div className="flex">
      <div className="relative rounded-xl font-work">
        <Image
          alt={`banner_image`}
          src={postTop?.imageUrl || 'https://placehold.it/720x400'}
          className="rounded-xl object-cover h-720 w-400"
          width={720}
          height={400}
          style={{
            maxHeight: '400px',
            minHeight: '400px',
          }}
        />
        <div className="absolute -bottom-8 left-4 right-4 md:left-8 rounded-xl p-4 md:p-10 bg-base-100 w-10/120 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
          <h3>
            <Link
              href="/"
              className="text-base-content font-semibold text-xl md:text-xl lg:text-xl hover:text-primary transition-all hover:duration-500"
            >
              {postTop?.title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
