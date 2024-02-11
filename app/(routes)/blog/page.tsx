import { config } from '@/app/_utils/config'
import PostCard from '@/components/molecules/card/PostCard'
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import PageInfo from '@/components/organism/pageInfo/PageInfo'

export const metadata = {
  title: `Blog Page | ${config.app.name}`,
  description: 'Generated by create next app',
}

const BlogListing = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section>
          <PageInfo />
        </section>

        <section className="my-12">
          <PostOverlayCard />
        </section>

        <section className="my-20">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
              <PostCard key={item} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
              Load More
            </button>
          </div>
        </section>

        <section className="mb-24">
          <Advertisement />
        </section>
      </div>
    </main>
  )
}

export default BlogListing