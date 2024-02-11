import Image from 'next/image'

export const CompanyLogo = ({ ...props }) => (
  <Image src="/company-logo.png" alt="company_logo" width={52} height={52} />
)
