import footerImage from '../assets/images/footerImage.png'

function LandingFooter() {
  return (
    <div className='flex font-prime_font px-16 gap-10'>
      <div>
        <p className=' font-semibold text-2xl text-white mb-8'>Get our stories delivered From us to your inbox weekly.</p>
        <div className='my-8'>
          <form action="">
            <input type="text" className='rounded-md mr-2 p-2'/>
            <button className='text-white font-semibold rounded-md bg-orange_primary p-2'>Get started</button>
          </form>
        </div>
        <p className='text-gray-400'>
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </p>
      </div>
      <div className='bg-white p-2 rounded-md'>
        <img src={footerImage} alt="pic" />
        <div className='my-5 mx-5'>
          <p className='text-lg font-semibold mb-4'>The best articles every week</p>
          <p>Our insurance plans offers are priced the same everywhere else.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingFooter;
