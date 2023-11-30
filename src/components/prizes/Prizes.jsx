import React from 'react'
import SectionTitle from '../../ui/sectiontitle/SectionTitle'
import Card from '../../ui/card/Card'
import technical_mock from '../../assets/images/technical_mock.svg'


const Prizes = () => {
    return (
        <div className='flex flex-col gap-12 items-center'>
            <SectionTitle name={'PRIZES'} />
            <div className='flex justify-evenly w-full flex-wrap gap-8'>
                <Card image={technical_mock} title={'Top % mock Technical'} content={'2K each + Tshirt + Goodies'} />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Prizes
