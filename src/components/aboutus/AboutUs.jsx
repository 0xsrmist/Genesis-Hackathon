import SectionTitle from '../../ui/sectiontitle/SectionTitle';

const AboutUs = () => {

  return (
    <div id='about' className='flex flex-col gap-y-16'>
      <div className='flex items-center justify-center'>
        <SectionTitle name={'ABOUT GENESIS'} />
      </div>
      <div className='flex items-center gap-y-6 flex-col-reverse md:flex-row md:justify-evenly'>
        <div className='text-white text-base w-[60%] md:w-[40%] font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel facilis dicta repellat optio expedita quasi, illo aperiam sequi, dolor voluptatibus repellendus voluptates saepe adipisci provident commodi rerum inventore nam eligendi ducimus reiciendis ipsa mollitia eaque. Quisquam temporibus ipsa minus sit?
        </div>
        <div className='bg-[#D9D9D9] w-[40vw] h-52'></div>
      </div>
    </div>
  );
};


export default AboutUs;
