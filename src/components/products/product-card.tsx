import Image from 'next/image'

export default function ProductCard({ img }: any) {
  return (
    <div className='flex justify-center'>
      <div>
        <Image
          src={img}
          alt='Product image'
          width={400}
          height={48}
          priority
        />
      </div>
    </div>
  )
}
