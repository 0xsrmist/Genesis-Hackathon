import React from 'react'
import SectionTitle from '../../ui/sectiontitle/SectionTitle'
import Card from '../../ui/card/Card'
import TrackCard from '../../ui/card/TrackCard'

const Tracks = () => {
    return (
        <div className='flex flex-col gap-12 items-center'>
            <SectionTitle name={'TRACKS'} />
            <div className='flex justify-evenly w-full flex-wrap gap-16 p-6'>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
            </div>
        </div>
    )
}

export default Tracks
