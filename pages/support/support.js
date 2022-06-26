import Footer from "../../components/Footer"
import Link from "next/link"

export default function support () {
    return (
        <div>

            <style jsx>
            {`

            
                .home_title{
                    text-shadow: 4px 4px 3px #023e8a;
                    color: white;
                }
        
                
                .faq_dropdown{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
                
                .faq{
                    font-family: Poppins-medium;
                    font-size: x-large;
                    line-height: 2;
                }
                .faq p {
                    font-family: Lora-medium;
                }
                
                
                
                
                summary{
                    display: block;
                    font-family: Poppins-medium;
                    user-select: none;
                }
                
                
                summary::marker{
                    display: none;
                }
                details{
                    border: 1px solid rgb(107, 106, 106);
                    line-height: 1.2;
                    background-color: #fff3e8;
                    overflow: hidden;
                }
                
                details > p{
                    padding-left: 25px;
                    font-family: Lora-medium;
                    user-select: none;
                       
                }
                
                details p span{
                    text-decoration: underline;
                    color: blue;
                }

            
            `}
            </style>

            <div className="bg-gray-50">
                    <div className="relative z-20 bg-white border-b">
                        <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                            <a href="#">
                                <img src="/images-sas/ntc_main_logo.png" alt="National Teachers College Logo" className="w-50" />
                            </a>
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
                                        <span className="relative group-hover:text-cyan-800">Frequently Asked Questions</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="" className="relative group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100">
                                        <span className="relative group-hover:text-cyan-800">Contact</span>
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





            <div className="w-full bg-center bg-cover bg-slate-900 h-120 "  style={{ backgroundImage: "url(/images-sas/background_pages.png)" }}>
                <div className="container flex flex-col py-12 mx-auto sm:py-24">
                <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10 header_title">
                    <h1 className="px-4 text-2xl leading-7 home_title sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                    Student<br /> Support Center
                    

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
                        The role of the SSC Team is to ensure that all questions 
                        to our department are answered and that we are in sync with 
                        the concerned departments.
                    </p>
                    <span className="inline-block w-10 h-1 mt-8 mb-6 bg-indigo-500 rounded"></span>
                    <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">Student Support Center ( S.S.C )</h2>
                    <p className="text-gray-500">National Teachers College</p>
                </div>
                </div>
            </section>



        <section className="p-5 text-gray-600 body-font">
            <div className="container py-24 mx-auto">
                <div className="px-4">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Objectives</h1>
                </div>

                <div className="flex flex-wrap -mx-2 lg:w-5/5 sm:mx-auto sm:mb-2">
                    <div className="w-full p-2 sm:w-1/2">
                    <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="font-medium title-font">
                        To provide support to the client and to the management.
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
                        To act as a channel of communication.
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
                        To facilitate coordination.
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
                        To serve as an Information Center.
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
                        To act as a Control Center.
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
                        To act as a Service Center. 
                        </span>
                    </div>
                    </div>

                </div>
            </div>
        </section>




            <section className="text-gray-600 body-font ">
                <div className="container px-5 mx-auto">
                <div className="px-4">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Duties and Responsibilities</h1>
                </div>

                <div className="flex flex-wrap -mx-2 lg:w-5/5 sm:mx-auto sm:mb-2">
                    <div className="w-full p-2 sm:w-1/2">
                    <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="font-medium title-font">
                        To gather the inquiries, questions and concerns directly from the stakeholders.
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
                        To endorse that inquiry to the concerned department.
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
                        To assist the client in obtaining the answers to their questions.
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
                        Keeping track of both the client and the concerned department.
                        </span>
                    </div>
                    </div>

                </div>    
                </div>
            </section>


        

            <div className="container px-5 mx-auto">
                <section className="px-6 py-12 bg-white md:py-20 md:px-0">
                    <div className="m-auto max-w-default">
                            <div className="px-1">
                                <h2 className="text-3xl font-bold text-gray-800 md:text-5xl faq" id="faq"> Student Support Center </h2>
                                <p>
                                    Is a department where students can get help with their school-related questions and issues.
                                    The SSC will also serve as a link to other departments that are involved in their inquiries.
                                </p>
                            </div>

                        <div className="mt-10 md:mt-16" id="faq">
                            
                            <div className="md:w-full">
                                <details className="mb-2 border-b-2">
                                    <summary className="p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                        
                                        <div className="faq_dropdown">
                                        <div className="flex items-center">
                                            <img src="/illustrations/student-icon.png" className="question_mark" alt="" />
                                            <p>Student</p>
                                        </div>
                                        
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>

                                        </div>
                                        
                                    </summary>
                                        <p className="px-3 py-2 text-gray-600">
                                            ● The student starts the process by requesting a document via the Centralized Documents Request Form  
                                            <a href="https://bit.ly/3xhdNcF">https://bit.ly/3xhdNcF</a> 

                                            <br />
                                            <br />
                                            ● The student can check the status of their request to this link: 
                                            <a href=" https://www.tracker.ntc.edu.ph/ntctracker/"> https://www.tracker.ntc.edu.ph/ntctracker/</a>
                                        </p>

                                        <br />
                                    
                                

                                </details>

                                <div className="md:w-full">
                                    <details className="mb-2 border-b-2">

                                    <summary className="p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                        
                                        <div className="faq_dropdown">
                                            <div className="flex items-center">
                                            <img src="/illustrations/documents-icon.png" className="question_mark" alt="" />
                                            <p> Departments and Document Requests </p>
                                            </div>
                                            
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                            </div>

                                        </div>
                                    </summary>
                                            <p className="px-3 py-2 text-gray-600">
                                                1. Finance Department 

                                                <br />
                                                <br />

                                                Overpayments 
                                                Refunds 
                                                Statement of Account (SOA) 
                                                <br />
                                                <br />
                                                2. Guidance Office 
                                                <br />
                                                <br />
                                                Certificate of Good Moral Character 
                                                <br />
                                                <br />
                                                3. IT Department 
                                                <br />
                                                <br />
                                                NTC Email Address Request & Activation 
                                                NTC ID 
                                                <br />
                                                <br />
                                                4. Registrars Office 
                                                <br />
                                                <br />
                                                Authentication<br />
                                                Certification - Academic Units Completion<br />
                                                Certification - Complete Academic Requirements<br />
                                                Certification - Approved Curriculum Syllabus<br />
                                                Certification - English Medium of Instruction<br />
                                                Certification of Enrollment<br />
                                                Certification - Graduation<br />
                                                Certification - GWA<br />
                                                Certification - Subject Description<br />
                                                Certification - Units Earned

                                                <br /><br />
                                                CTC - CHED CAV<br />
                                                CTC - Diploma<br />
                                                CTC - Form 137 - A<br />
                                                CTC - Form 138<br />
                                                CTC - GWA<br />
                                                CTC - Registration Form<br />
                                                CTC - TOR<br />
                                                Form 137<br />
                                                Form 138<br />
                                                Duplicate - Diploma<br />
                                                Duplicate - Reg. Form<br />
                                                TOR / Honorable Dismissal<br />
                                                Semestral Report Copy<br />
                                                Transcript of Records (PRC/Employment/Abroad/Study)<br />
                                                Others

                                                
                                            </p>


                                    </details>

                                    <div className="md:w-full">
                                        <details className="mb-2 border-b-2">

                                            <summary className="p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                                                            
                                                <div className="faq_dropdown">
                                                    <div className="flex items-center">
                                                    <img src="/illustrations/support-icon.png" className="question_mark" alt="" />
                                                    <p> Student Support Center </p>
                                                    </div>
                                                    
                                                    <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                    </svg>
                                                    </div>
                        
                                                </div>
                                                
                                            </summary>
                                                <p className="px-3 py-2 text-gray-600">
                                                    ● If the Registrar  note in the tracker that the student is ready for billing, the SSC will check the student portal if the student has a previous balance of the tuition fee;
                                                    <br /><br />
                                                    ● If a student has issues with balance, that needs to be settled first and they will send another request once paid; 
                                                    <br /><br />
                                                    ● If the student has no issues, the request will proceed to billing Once the student sends the proof of payment, then the request will proceed to  production. 
                                                    <br />
                                                    Students will receive an email regarding the release date of their document.

                                                    <br /><br />
                                                    Follow-ups of the request document/inquiries/other concerns.
                                                    <br /><br />
                                                    The student can e-mail or call the Student Support Center thru:

                                                    Support Email Address: support@ntc.edu.ph<br />
                                                    Telephone number: 8734-56-01 local 156/100<br />
                                                    Central Document Email Address: docrequest@ntc.edu.ph<br />
                                                    
                                                    <br /><br />
                                                    Updating the clients regarding his/her request or if theres any clarification for the request. <br />

                                                    SSC reaches out the clients via phone call (mobile) to update the status of their request document.
                                                    
                                                </p>


                                        </details>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}