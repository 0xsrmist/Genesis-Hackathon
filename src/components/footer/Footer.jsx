import logo from '../../assets/icons/TPH_LOGO.png';
import emailIcon from '../../assets/icons/emailIcon.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer rounded-t-3xl pt-2 sm:p-14 sm:pb-0 sm:pr-5 w-full m-0">
            <div className='flex flex-col items-center gap-4 justify-between sm:flex-row'>
                <div className='flex flex-col justify-start gap-8'>
                    <div className='font-poppins ml-4 font-medium text-[#FFF] text-5xl'>
                        <span className='inline-block border-[#FFF] border-t-[2px] border-l-[2px] pt-2 pl-2'>G</span>ENESI<span className='inline-block border-[#FFF] border-b-[2px] border-r-[2px] pb-2 pr-2'>S</span>
                    </div>
                    <div>
                        <img src={logo} className='' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[#FFF] font-poppins text-xl font-semibold'>Get In Touch</div>
                        <a href="mailto:tphsrmist@gmail.com">
                            <div className='flex gap-2 text-[#FFF]'>
                                <img src={emailIcon} className='w-[25px] h-[25px]' />
                                <p className='font-poppins font-normal text-center'>tphsrmist@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:6393221408">
                            <div className='flex gap-2 text-[#FFF]'>
                                <img src={phoneIcon} className='w-[25px] h-[25px]' />
                                <p className='font-poppins font-normal text-center'>Md Zeeve Javed</p>
                            </div>
                        </a>
                        <a href="tel:9352917041">
                            <div className='flex gap-2 text-[#FFF]'>
                                <img src={phoneIcon} className='w-[25px] h-[25px]' />
                                <p className='font-poppins font-normal text-center'>Ankit Choudhary</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-8 sm:mt-0'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <a target='__blank' href="https://www.instagram.com/0xsrmist/">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 58 53" fill="none">
                                    <path d="M29.0009 36.9446C32.0656 36.9446 35.0048 35.8442 37.1719 33.8854C39.339 31.9267 40.5564 29.2701 40.5564 26.5001C40.5564 23.7301 39.339 21.0735 37.1719 19.1148C35.0048 17.1561 32.0656 16.0557 29.0009 16.0557C25.9361 16.0557 22.9969 17.1561 20.8299 19.1148C18.6628 21.0735 17.4453 23.7301 17.4453 26.5001C17.4453 29.2701 18.6628 31.9267 20.8299 33.8854C22.9969 35.8442 25.9361 36.9446 29.0009 36.9446Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 36.9444V16.0556C3 12.593 4.52182 9.27228 7.23068 6.82388C9.93954 4.37549 13.6135 3 17.4444 3H40.5556C44.3865 3 48.0605 4.37549 50.7693 6.82388C53.4782 9.27228 55 12.593 55 16.0556V36.9444C55 40.407 53.4782 43.7277 50.7693 46.1761C48.0605 48.6245 44.3865 50 40.5556 50H17.4444C13.6135 50 9.93954 48.6245 7.23068 46.1761C4.52182 43.7277 3 40.407 3 36.9444Z" stroke="white" strokeWidth="5" />
                                    <path d="M44.8867 12.1644L44.9161 12.1362" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                        <a target='__blank' href="https://twitter.com/0xsrmist">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 52 47" fill="none">
                                    <path d="M30.9482 19.9022L50.3032 0H45.7162L28.9065 17.2795L15.4851 0H0L20.3019 26.132L0 47H4.58695L22.3381 28.7523L36.5149 47H52L30.9482 19.9022ZM24.6644 26.36L22.6063 23.7585L6.24 3.055H13.2874L26.4954 19.7635L28.5507 22.365L45.7189 44.0837H38.6743L24.6617 26.3623L24.6644 26.36Z" fill="white" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <p className='font-poppins text-lg text-[#FFF]'>
                        © 2023 TPH 0x Srmist. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer