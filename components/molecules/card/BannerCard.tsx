import Image from 'next/image'
import Link from 'next/link'

/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const BannerCard = () => {
  return (
    <div className="flex">
      <div className="relative rounded-xl font-work">
        <Image
          alt={`banner_image`}
          src="https://placehold.it/720x400"
          className="rounded-xl"
          width={720}
          height={400}
          style={{ maxHeight: '720px', minHeight: '400px' }}
        />
        <div className="absolute -bottom-8 left-4 md:left-8 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
          <h3>
            <Link
              href="/"
              // className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
            >
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </Link>
          </h3>
        </div>
      </div>
      {/* <div>TODO: Trending</div> */}
    </div>
  )
}

export default BannerCard
