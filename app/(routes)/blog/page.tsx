import { config } from '@/app/_infrastructure/config'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import LatestPost from '@/components/organism/latestPost/LatestPost'
import { PostAction } from './_infrastructure/post.action'

export const metadata = {
  title: `Blog Page | ${config.app.name}`,
  description: 'Generated by create next app',
}

/*
 * [ ] All stories, sort by created at
 */

const BlogListing = async () => {
  const { data } = await PostAction.fetch()

  return (
    <main>
      <div className="container mx-auto">
        <section>
          <LatestPost data={data} />
        </section>

        <section className="mb-24">
          <Advertisement />
        </section>
      </div>
    </main>
  )
}

export default BlogListing
