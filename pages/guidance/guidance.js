import Footer from "../../components/Footer";
import Link from "next/link";

export default function guidance () {
    return (
        <div>
            <div className="bg-gray-50">
                    <div className="relative z-20 bg-white border-b">
                        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                            <Link href="/">
                                <img src="/images-sas/ntc_main_logo.png" alt="National Teachers College Logo" className="w-50 cursor-pointer" />
                            </Link>
                            </div>

                            <div className="flex items-center justify-end border-l lg:border-l-0">
                            <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="fixed z-20 block p-5 -mr-5 cursor-pointer bg-slate-400 peer-checked:hamburger lg:hidden">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                </label>

                            <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                <div className="flex flex-col justify-between h-full lg:items-center lg:flex-row">
                                <ul className="px-6 pt-32 space-y-8 text-gray-700 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                    <li>
                                            <span className="relative cursor-pointer group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:bg-cyan-100">     
                                                <Link href='/'>  
                                                    <span className="relative text-cyan-800">Home</span>
                                                </Link>
                                            </span>
                                    </li>
                                    <li>
                                    <a href="#faq" className="relative group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100">
                                        <span className="relative group-hover:text-cyan-800">Contact</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#offices" className="relative group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100">
                                        <span className="relative group-hover:text-cyan-800">Guidelines</span>
                                    </a>
                                    </li>

                                </ul>

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

              
                <div className="w-full bg-center bg-cover bg-slate-900 background_pages " style={{ backgroundImage: "url(/images-sas/background_pages.png)" }}>
                <div className="container flex items-center py-12 mx-auto sm:py-24">
                    <div className="flex-col items-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
                    <h1 className="flex mx-4 text-2xl font-black leading-7 text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                        Guidance Page
                    </h1>
                    </div>
                    <div className="flex items-center justify-center">
            
                    </div>
                </div>
                </div>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8 text-gray-400" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="text-sm leading-relaxed md:text-lg summary">
                        The Guidance Office aims to assist students in meeting all their guidance needs.
                        The Office aims to provide services that will help students attain optimum adjustments 
                        in all areas of school life be it personal, educational, social and emotional through 
                        relevant guidance programs.
                    </p>
                    <span className="inline-block w-10 h-1 mt-8 mb-6 bg-indigo-500 rounded"></span>
                    <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">Guidance Office</h2>
                    <p className="text-gray-500">National Teachers College</p>
                </div>
                </div>
            </section>

            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20 text-center">
                    <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">National Teachers College</h2>
                    <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">Guidance Offers: </h1>
                </div>

                <div className="flex flex-wrap -m-4">

                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">INFORMATION</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="text-base leading-relaxed">
                                The Office provides relevant facts and data to the school community through 
                                different programs such as orientation for freshmen students, seminars developmentally 
                                designed for each year level and career and occupational information
                            </p>
                        </div>
                    </div>
                    </div>



                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">COUNSELING</h2>
                        </div>
                        <div className="flex-grow">

                        <p className="text-base leading-relaxed">
                            This is the heart of the Guidance Services. The Office provides 
                            the time to assist students in exploring possibilities and arriving at 
                            a possible solution to personal, educational, emotional or social problems 
                            that will facilitate better self-understanding and self-realization. 
                            This can be done individually or in groups
                        </p>
                        
                        </div>
                    </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">FACULTY/ PARENT CONSULTATION</h2>
                        </div>
                        <div className="flex-grow">
                                        

                        <p className="text-base leading-relaxed">
                            The Office is always open to consultations made by faculty members, school personnel and parents regarding school and family matters.
                        </p>
                
                        </div>
                    </div>
                    </div>


                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">FOLLOW-UP</h2>
                        </div>
                        <div className="flex-grow">
                                                    

                        <p className="text-base leading-relaxed">
                            This service helps determine the status of students who received assistance and other assistance to 
                            be rendered so that the service is complete and holistic. Through this service it can determine 
                            the adequacy and sufficiency of the programs and services extended in meeting the needs of its 
                            students.

                        </p>
            
                        </div>
                    </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">RESEARCH AND EVALUATION</h2>
                        </div>
                        <div className="flex-grow">
                        
                        <p className="text-base leading-relaxed">
                            
                            This service evaluates the data at the Office as a tool to aid curriculum and program development.

                        </p>
                        </div>
                    </div>
                    </div>




                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">PEER FACILITATORS GROUP PROGRAM</h2>
                        </div>
                        <div className="flex-grow">

                        <p className="text-base leading-relaxed">
                            The Peer Facilitators Group serves as the arm of the Guidance Office. 
                            The goal of the Office is to tap and train students with better potential of establishing peer 
                            helping relationships and who are capable of assisting the office  in realizing its goals by 
                            taking part in every program of the Office. The members are equipped with basic counseling skills 
                            and other self-enhancing seminars to facilitate peer counseling and other significant activities. 
                            The program develops students capacity for volunteer work and enhances the value of service
                        </p>
                        </div>
                    </div>
                    </div>
                    


                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">OUTREACH PROGRAMS</h2>
                        </div>
                        <div className="flex-grow">
                        <p className="text-base leading-relaxed">
                            To give the students the firsthand experience about the realities of life 
                            outside the school and to draw out from them the genuine care and concern for 
                            other people, students are encouraged to take part in different community outreach 
                            programs.
                        </p>
                        </div>
                    </div>
                    </div>

                    


                    <div className="p-4 md:w-1/3">
                    <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                        <h2 className="text-lg font-medium text-gray-900 title-font">TESTING</h2>
                        </div>
                        <div className="flex-grow">
                        <p className="text-base leading-relaxed">
                            Through the use of standardized tests, evaluation of student’s strong 
                            points and weak points in the areas of intelligence, aptitude and personality 
                            are being employed. This will give the Office invaluable data to be used for specific or 
                            individualized programs and for specific group needs.

                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>



        <Footer />

        </div>
    )
}