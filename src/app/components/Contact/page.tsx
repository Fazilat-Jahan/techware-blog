import Link from 'next/link'
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
const Contact = () => {
  return (
    <div>
      <Header />
       {/* CONTACT SECTION */}

       <section id="contact" className="flex w-full min-h-screen items-center justify-center px-4 md:px-12 ">
  <div className="md:w-auto w-full md:mx-auto mx-3"> 
    <form action="" className="flex flex-col mx-auto my-0 rounded-xl border-cyan-950 w-full p-4 bg-white/20 border-2 shadow-md backdrop:blur-lg md:p-12 bg-gradient-to-b from-cyan-500 to-slate-900"> 
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white mb-4 underline">Contact Us</h1>

      <div className="space-y-4 md:text-base text-sm font-semibold text-white">
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">Welcome to TechWare, your premier destination for cutting-
        <span className='flex-col flex leading-relaxed'>edge technology insights and professional blogging solutions.</span>
        <span className='flex-col flex leading-relaxed'>We specialize in providing high-quality, customizable blog</span>
         <span className='flex-col flex leading-relaxed'> platforms for businesses and individuals alike.</span>
       
          
        </div>
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">
          <span className='md:font-medium font-normal'>Email: </span>techware-solutions@gmail.com
        </div>
        <div className="w-full font-serif bg-orange-950/30 px-4 py-3 border-none  rounded-lg">
          <span className='md:font-medium font-normal'>LinkedIn: </span>
          <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="hover:underline hover:text-cyan-300"
                >
                  linkedin.com/techware/founder
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="block w-full py-3 px-4 font-bold cursor-pointer transition duration-300 rounded-lg bg-cyan-800 hover:bg-cyan-700 text-white border border-cyan-500 hover:border-cyan-400 shadow-lg text-center font-serif"
              >
         Get In Touch
        </Link>
      </div>
    </form>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Contact

