import SectionTitle from '../../ui/sectiontitle/SectionTitle';

const AboutUs = () => {
  // const boxStyle = {
  //   backgroundColor: '#D9D9D9',
  //   width: '469px',
  //   height: '182px',
  //   position: 'absolute',
  //   top: '1196px',
  //   left: '947px',
  //   right: '96px',
  // };

  // const secondBoxStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   backgroundColor: '#07071C',
  //   width: '641px',
  //   height: '115px',
  //   position: 'absolute',
  //   left: '121px',
  //   top: '1209px',
  //   color: '#FFF',
  //   fontFamily: 'Poppins',
  //   fontSize: '20px',
  //   fontStyle: 'normal',
  //   fontWeight: '600',
  //   lineHeight: 'normal',

  // };

  return (
    // <div>
    //   <div style={boxStyle}>
    //     {/* Content inside the grey box */}
    //   </div>
    //   <div style={secondBoxStyle}>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tristique velit, ut fringilla orci tempor vel.
    //     </p>
    //   </div>
    // </div>
    <div className='flex flex-col gap-y-5'>
      <div className='flex items-center justify-center'>
        <SectionTitle name={'ABOUT GENESIS'} />
      </div>
      <div className='flex items-center gap-y-6 flex-col-reverse md:flex-row md:justify-evenly'>
        <div className='text-white text-base w-[60%] md:w-[40%] font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel facilis dicta repellat optio expedita quasi, illo aperiam sequi, dolor voluptatibus repellendus voluptates saepe adipisci provident commodi rerum inventore nam eligendi ducimus reiciendis ipsa mollitia eaque. Quisquam temporibus ipsa minus sit?

        </div>
        <div className='bg-[#D9D9D9] w-[450px] h-52'></div>
      </div>
    </div>
  );
};


export default AboutUs;
