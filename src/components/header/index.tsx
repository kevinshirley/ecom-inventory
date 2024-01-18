import Image from 'next/image'
import DynamiteLogo from '@/assets/dynamite.svg'
import ProfileLogo from '@/assets/profile.svg'
import SearchLogo from '@/assets/search.svg'

export default function Header() {
  return (
    <header className='flex justify-between m-4'>
      <div>
        <Image
          src={DynamiteLogo}
          alt='Dynamite Logo'
          width={200}
          height={48}
          priority
        />
      </div>
      <div className='flex flex-row gap-x-4'>
        <Image
          src={SearchLogo}
          alt='Profile'
          width={40}
          height={40}
          priority
        />
        <Image
          src={ProfileLogo}
          alt='Profile'
          width={40}
          height={40}
          priority
        />
      </div>
    </header>
  )
}
