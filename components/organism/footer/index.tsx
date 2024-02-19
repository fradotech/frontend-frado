import Link from 'next/link'
import { socialShare } from '../authorInfo/AuthorInfo'

/**
 * Our Footer is a reusable UI component that used to represent bottom section of any website.
 *
 * @property website details, email, phone number, some necessary link and a newsletter component.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Footer = () => {
  return (
    <footer className="px-5 md:px-0 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 border-t border-base-content/10">
          <div>
            <p className="mt-0.5 text-base-content/70 text-base">
              © Copyright {new Date().getFullYear()} <strong>frado</strong>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            {socialShare?.map((item, index) => (
              <Link
                href={item?.link}
                target="_blank"
                key={index}
                className="bg-secondary text-secondary-content hover:text-primary-content w-8 h-8 flex justify-center items-center rounded-md hover:bg-primary transition duration-300 ease-in-out"
              >
                {item?.icon()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
