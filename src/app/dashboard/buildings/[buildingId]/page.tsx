import Image from 'next/image'

import building from '@/assets/building.png'

export default function BuildingPage({
  params: { buildingId }
}: {
  params: { buildingId: string }
}) {
  return (
    <section>
      <h1>Building #{buildingId} page</h1>
      <section className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mt-4'>
        <div className='flex flex-col gap-2'>
          here will be your building image
          <Image src={building} alt='building' width={300} height={300} />
        </div>
        <div>here will be your building data</div>
      </section>
    </section>
  )
}
