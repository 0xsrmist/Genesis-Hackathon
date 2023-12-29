import conference from '../../assets/images/conference.svg'
import SectionTitle from '../../ui/sectiontitle/SectionTitle';

function Conference() {
  return (
    <div className='flex flex-col gap-y-12'>
      <div className='w-full flex justify-end px-20'>
        <SectionTitle name={'CONFERENCE'} />
      </div>
      <div className='flex flex-col items-center md:items-start md:flex-row justify-evenly'>
        <img className='w-96 h-96' src={conference} alt='' />
        <div className='w-[70%] text-center md:text-start md:w-[40%] text-white py-16'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit a accusantium fuga, ex distinctio quod voluptate velit tempora. Quam hic ad nesciunt animi. Commodi doloremque, labore vitae possimus vero eum minima. Voluptatibus necessitatibus, doloremque fugit repellat at sed unde porro tempore ad obcaecati, repudiandae adipisci consequuntur optio ratione voluptate perspiciatis corrupti praesentium in amet sint maiores nostrum, ea perferendis. Recusandae?
        </div>
      </div>
    </div>
  );
}

export default Conference;
