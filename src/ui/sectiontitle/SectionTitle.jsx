
// eslint-disable-next-line react/prop-types
const SectionTitle = ({ name }) => {
    return (
        <div className='flex font-poppins'>
            <div className='relative'>
                <div className='absolute inset-0 bg-[#1E1268] rounded-full blur-md'></div>
                <div className='relative bg-[#C684F1] shadow-inner shadow-[#ffffff] rounded-full px-5 py-1 font-semibold text-xl text-[#07071C]'>{name}</div>
                <div className='absolute shadow-inner shadow-[#FFFFFF] inset-0 opacity-5 bg-theme-dark-button rounded-full'></div>
                <div className='absolute shadow-inner shadow-[#FFFFFF] inset-0 opacity-5 bg-theme-light-button rounded-full'></div>
            </div>
        </div>
    )
}

export default SectionTitle
