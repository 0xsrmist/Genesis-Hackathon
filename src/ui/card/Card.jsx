import React from 'react'

const Card = ({ image, title, content }) => {
  return (
    <div className='flex items-center'>
      <div className='relative'>
        <div className='absolute inset-0 bg-card-grad rounded-2xl opacity-10'></div>
        <div className='relative w-60 h-60 rounded-3xl'>
          <div style={{ boxShadow: 'inset 1px 0px 1px 1px #1238FF' }} className='absolute rounded-3xl w-60 h-60'></div>
          <div style={{ boxShadow: 'inset 0px 0px 1px 1px #38CCEC' }} className='absolute rounded-3xl w-60 h-60'></div>
          <div style={{ boxShadow: 'inset 0.5px 0px 1px 1px #BD00FF' }} className='absolute rounded-3xl w-60 h-60 opacity-60'></div>
          <div className='flex flex-col gap-4 py-6 px-2 text-center items-center'>
            <img className='w-20 h-20' src={image} alt='' />
            {title ? <div className='text-lg font-bold text-white uppercase'>{title}</div> : <div></div>}
            {content ? <div className='text-sm text-white'>{content}</div> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
