import Footer from "../../components/Footer"


export default function osa () {
    return (
       
        <div>
            
            <style jsx>
            {`


            .home_title{
                text-shadow: 4px 4px 3px #023e8a;
                color: white;
            }
            .blur{
                filter: blur(10px);
              }
              .mv-container{
                background: linear-gradient(0deg, rgba(37, 37, 37, 0.781), rgba(255, 251, 251, 0.562)), url('/images-sas/bg_component.jpg');
                /* background-image: url('../assets/bg_component.jpg'); */
                background-repeat: no-repeat;
                background-size: cover;
              
              }
              .mv-card{
               
               
               
                backdrop-filter: blur(4.4px);
                -webkit-backdrop-filter: blur(4.4px);
                  padding: 50px;
              }
              
              .mv-card > p{
                font-size: var(--font-size-sm);
              }
            
              
                .mission_title,
                .vission_title,
                .values_title{
                border-bottom: 2px solid yellow;
                padding: 5px;
                font-size: 2em;
                }
            
                .icons{
  
                    color: yellow;
                    font-size: 50px;
                  }
                  
                  
                  .mission, .vission, .values{
                    text-align: justify;
                  }
            
            `}
            </style>


            <div className="w-full bg-center bg-cover bg-slate-900 h-120 bg_pages" style={{ backgroundImage: "url(/images-sas/background_pages.png)" }}>
                <div className="container flex flex-col py-12 mx-auto sm:py-24">
                    <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10 header_title">
                        <h1 className="text-2xl leading-7 tracking-wider text-center home_title sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                        Welcome to Office of the <br /> Student Affairs
                        </h1>
                    </div>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8 text-gray-400" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="text-lg leading-relaxed summary">
                            The Student Affairs Center envisions the pursuit of 
                            strong leadership abilities for all students by emphasizing 
                            the exercise of dynamic, proactive, and innovative leadership through the following activities:

                            Extra and co-curricular reforms which is responsive to the call of times.
                            Well-planned leadership development programs for group leaders and proactive student organizations.
                            Intra and inter-school networking and outsourcing.
                        </p>
                        <span className="inline-block w-10 h-1 mt-8 mb-6 bg-indigo-500 rounded"></span>
                        <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">Office of the Student Affairs ( O.S.A )</h2>
                        <p className="text-gray-500">National Teachers College</p>
                    </div>
                </div>
             </section>


            {/* mision vission, goal */}

            <section className="text-white body-font mv-container">
                <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap justify-center m-4">
                    <div className="p-4 lg:w-1/3">
                    <div className="relative h-full p-20 px-8 pt-16 pb-24 overflow-hidden text-center bg-opacity-75 rounded-lg mv-card">
                        <i className="icons fa fa-flag"></i>
                        <h1 className="mb-3 font-bold tracking-widest title-font sm:text-2xl mission_title">Mision</h1>
                        <p className="mt-8 mb-3 leading-relaxed tracking-widest mission">
                            The National Teachers College office of the Students Affairs (NTC-OSA) 
                            commits itself to produce future workforce who possess moral and spiritual uprightness, 
                            and who impose upon themselves a high degree of social discipline and leadership 
                            values necessary for active and successful participation in a humane and fast-changing society.
                        </p>
                    </div>
                    </div>


                    <div className="p-4 lg:w-1/3">
                    <div className="relative h-full p-20 px-8 pt-16 pb-24 overflow-hidden text-center bg-opacity-75 rounded-lg mv-card">
                        <i className="icons fa fa-lightbulb-o"></i>
                        <h1 className="mb-3 font-bold tracking-widest text-white title-font sm:text-2xl vission_title">Vission</h1>
                        <p className="mt-8 mb-3 leading-relaxed tracking-widest vission">
                            The NTC-OSA shall be geared toward the pursuit of strong leadership 
                            abilities for all students by emphasizing the exercise of dynamic, 
                            proactive and innovative leadership.
                        </p>
                    </div>
                    </div>

                    <div className="p-4 lg:w-1/3">
                    <div className="relative h-full p-20 px-8 pt-16 pb-24 overflow-hidden text-center bg-opacity-75 rounded-lg mv-card">
                        <i className="icons fa-solid fa-hands-holding-circle"></i>
                        <h1 className="mb-3 font-bold tracking-widest text-white title-font sm:text-2xl values_title">Values</h1>
                        <p className="mt-8 mb-3 leading-relaxed tracking-widest values">
                        NTC envisions itself as a leading academic institution for the development of all levels of education anchored
                        on the ideals of Excellence, Relevance, Access, and Effectiveness, geared towards national productivity and
                        world-class competitiveness.
                        </p>
                    </div>
                    </div>


                </div>
                </div>
            </section>



                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                    <div className="mb-20 text-center">
                        <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">Office of The Student Affairs Aims</h1>
                        <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4"> 
                            The office of Students Affairs supervises all club and organization in the campus. 
                            This office is open to all clubs and organization for small group conferences aims to:
                        </p>
                    </div>

                    <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
                        <div className="w-full p-2 sm:w-1/2">
                        <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium title-font">
                                Develop a sense of commitment and responsibilities among the faculty- adviser and the student-leader.
                            </span>
                        </div>
                        </div>
                        <div className="w-full p-2 sm:w-1/2">
                        <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium title-font">
                                Assist the school administrators in the implementation and enforcement of school rules and regulation.
                            </span>
                        </div>
                        </div>
                        <div className="w-full p-2 sm:w-1/2">
                        <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium title-font">
                                Participate actively in activities outside of the college that will helps improve student welfare.
                            </span>
                        </div>
                        </div>
                        <div className="w-full p-2 sm:w-1/2">
                        <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium title-font">
                                Tap and develop creative and leadership potentials among students.
                            </span>
                        </div>
                        </div>
                        <div className="w-full p-2 sm:w-1/2">
                        <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium title-font">
                                Develop a sense of fulfillment through recognition of students achievements in their respective clubs and organizations.
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            
            <Footer />
        </div>
    )
}   