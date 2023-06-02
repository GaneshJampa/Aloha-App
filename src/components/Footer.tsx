
const Footer = () => {

    const logoSrc: string = '../assets/aloha-white.svg';

    return (
      <div className='w-full bg-[#001A1A]'>
        <div className="lg:px-24 px-6 py-6 mx-auto lg:max-w-screen-xl">
              <img src={logoSrc} alt='logo' />
        </div>
      </div>
    )
  }
  
  export default Footer;