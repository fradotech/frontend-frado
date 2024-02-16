import { CompanyLogo } from '@/components/molecules/Identity/Logo'
import Link from 'next/link'

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
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <CompanyLogo className={`text-base-content`} />
            </Link>
            <div>
              <h4 className="text-xl text-base-content font-sans">Fradotech</h4>
              <p className="mt-0.5 text-base-content/70 text-base">
                © Copyright {new Date().getFullYear()}{' '}
                <strong>fradotech</strong>
              </p>
            </div>
          </div>
          {/* TODO: sosmed */}
          {/* <div className="flex items-center gap-4 text-base-content/70">
            <Link
              href="/"
              className="text-base border-r border-base-content/10 pr-4  hover:text-primary transition hover:duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-base hover:text-primary transition hover:duration-300"
            >
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
