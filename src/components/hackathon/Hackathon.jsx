import hackathonimage from '../../assets/images/hackathon.svg'
import SectionTitle from '../../ui/sectiontitle/SectionTitle';

function Hackathon() {
    return (
        <div className='flex flex-col gap-y-12'>
            <div className='w-full flex justify-start px-20'>
                <SectionTitle name={'HACKATHON'} />
            </div>
            <div className='flex flex-col items-center md:items-start md:flex-row justify-evenly'>
                <div className='w-[70%] text-center md:text-start md:w-[40%] text-white py-16'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit a accusantium fuga, ex distinctio quod voluptate velit tempora. Quam hic ad nesciunt animi. Commodi doloremque, labore vitae possimus vero eum minima. Voluptatibus necessitatibus, doloremque fugit repellat at sed unde porro tempore ad obcaecati, repudiandae adipisci consequuntur optio ratione voluptate perspiciatis corrupti praesentium in amet sint maiores nostrum, ea perferendis. Recusandae?
                </div>
                <img className='w-96 h-96' src={hackathonimage} alt='' />
            </div>
        </div>
    );
}

export default Hackathon;
