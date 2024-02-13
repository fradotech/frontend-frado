import { IPost } from '@/app/(routes)/blog/_infrastructure/post.interface'
import PostCard from '@/components/molecules/card/PostCard'
import Link from 'next/link'

type TProps = {
  data: IPost[]
}

const LatestPost: (props: TProps) => JSX.Element = (props: TProps) => {
  return (
    <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
      <h3 className="text-base-content font-bold text-2xl mb-8">Latest Post</h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {props.data.map((item) => (
          <PostCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        <Link
          href={`/blog`}
          className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
        >
          View All Post
        </Link>
      </div>
    </div>
  )
}

export default LatestPost
