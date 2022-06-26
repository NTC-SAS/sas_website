import Head from 'next/head'
import HeaderSas from '../components/HeaderSas'
import Summary from '../components/Summary'
import Offices from '../components/Offices'


import Faq from '../components/Faq'
import Footer from '../components/Footer'


export default function Home({greets, title, content}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Student Affairs Service</title>
        <meta name="description" content="This is the Official Website of Student Affairs Service" />
        <meta name="author" content="Student Affairs Service" />
        <meta name="copyright" content="Student Affairs Service" />
        <meta name="robots" content="index, follow" />
      </Head>

      <HeaderSas />

        {/* ----------------------- Main --------------------------------------*/}

        <div className="w-full bg-center bg-cover bg-slate-900 h-120" style={{ backgroundImage: "url(/images-sas/Homepage_NTC.jpg)" }}>
          <div className="container flex flex-col px-4 py-12 mx-auto ">
            <div className="flex-col w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10 header_title">
              <h1 className="text-3xl leading-8 tracking-wider text-center text-white home_title sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10"
                style={{ textShadow: "4px 4px 3px #023e8a"}}
              >
                Welcome to Student <br /> Affairs Service
              
              </h1>
              <p className="mt-5 text-sm font-normal tracking-wider text-center text-white home_paragraph sm:mt-10 lg:w-10/12 sm:text-lg"
              style={{ textShadow: "2px 2px 3px #023e8a"}} 
              >
                At The National Teachers College, we boost the continuous development 
                of our students through multiple student services. Our guidance center and student affairs 
                office are well equipped to help students address any developmental challenge they may have. 
              </p>
            </div>

          </div>
        </div>

      <Summary 
        greets = "Hello students!s"
        title = "How Can We Help you Today?"
        content = "The National Teachers College is a premier education institution that develops top-level manpower skills. It seeks to further its philosophy, mission and vision by imparting to its graduates a high degree of competence in their chosen career, and in their quest for the required specialized knowledge, training and professional preparation for national and international endeavours. In this age of convergence, NTC helps graduates excel in a just & equitable world, armed with wisdom, excellence, relevance, access and effectiveness in the attainment of national productivity and world-class competitiveness. All courses are information-technology enhanced with a wide variety of specialization for personal and professional growth."

      />


        
        <div className="container px-5 mx-auto">
            <div className="flex justify-center w-full mb-12 text-center image-container">
                <img src="/illustrations/people-with-questions.jpg" alt="Illustration of People with Questions" />
            </div>
        </div>

      
      
    <Faq />
    <Offices />
    <Footer />

    </div>
  )
}
