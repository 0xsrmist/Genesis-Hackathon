import Card from './Card'

const TrackCard = () => {
  return (
    <div className='relative'>
      <div className='rounded-3xl text-white text-3xl w-80 h-80 p-5 bg-gradient-to-b from-[#070145] via-[#170C8C] to-[#a13bf5] flex justify-center items-center'>
        TRACK
      </div>
      <div className='absolute inset-10 rounded-3xl backdrop-blur-lg shadow-lg shadow-gray-950'>
        <Card />
      </div>
    </div>
  )
}

export default TrackCard
