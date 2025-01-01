import Link from 'next/link'

const Contact = () => {
  return (
    <div>
       {/* CONTACT SECTION */}

       <section id="contact" className="flex w-full min-h-screen items-center justify-center px-4 md:px-12">
  <div className="md:w-auto w-full md:mx-auto mx-3"> 
    <form action="" className="flex flex-col mx-auto my-0 rounded-xl border-amber-950 w-full p-4 bg-white/20 border-2 shadow-md backdrop:blur-lg md:p-12"> 
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold font-serif mb-6">Contact Me</h1>  */}

      <div className="space-y-4 md:text-base text-sm font-semibold">
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">Hi there! I'm Fazilat Jahan, the Founder of TechWare.
        <span className='flex-col flex leading-relaxed'>This site is basically a Blog site for project selling purpose.</span>
         <span className='flex-col flex leading-relaxed'> If you want to buy it or have any qurreies, please contact me.</span>
        
          
        </div>
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">
          <span className='md:font-medium font-normal'>Email: </span>fazilat.jahan07@gmail.com
        </div>
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">
          <span className='md:font-medium font-normal'>LinkedIn: </span>
          <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="hover:underline hover:text-orange-950">linkedin.com/fazilatjahan
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="block w-full py-3 px-4 font-bold cursor-pointer transition duration-300 rounded-lg bg-orange-950/70 hover:bg-orange-950/40  border border-orange-900 hover:border-amber-950 shadow-lg text-center font-serif">
          Feel Free To Contact Me
        </Link>
      </div>
    </form>
  </div>
</section>

    </div>
  )
}

export default Contact
