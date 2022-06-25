import styles from '../styles/Faq.module.css'

export default function Faq() {
    return (
        <div className="container px-5 mx-auto">
        <section className="px-6 py-12 bg-white md:py-20 md:px-0">
            <div className="m-auto max-w-default">
              <div className="px-6">
                <h2 className="text-3xl font-bold text-gray-800 md:text-5xl faq" id="offices"> Other Ways to get help</h2>
                <p>
                    At The National Teachers College, 
                    we boost the continuous development of our students through multiple 
                    student services. Our guidance center and student affairs office are well
                     equipped to help students address any developmental challenge they may have.
                </p>
              </div>

              
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">

                    

                    <div className="p-4 md:w-1/3">
                      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images-pexels/osa-pexels.jpg" alt="blog" />
                        <div className={styles.office_content}>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Office of the Student Affairs Office</h1>
                          <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                          <div className="flex flex-wrap items-center ">
                            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" href="./osa/osa.html">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>



                    

                    <div className="p-4 md:w-1/3">
                      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images-pexels/guidance-pexels.jpg" alt="blog" />
                        <div className={styles.office_content}>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Guidance Office</h1>
                          <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                          <div className="flex flex-wrap items-center ">
                            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" href="./Guidance/guidance.html">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="p-4 md:w-1/3">
                      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images-pexels/guidance-pexels.jpg" alt="blog" />
                        <div className={styles.office_content}>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Library Office</h1>
                          <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                          <div className="flex flex-wrap items-center ">
                            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" href="./Library/library.html">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    

                    <div className="p-4 md:w-1/3">
                      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images-pexels/scholarship-pexels.jpg" alt="blog" />
                        <div className={styles.office_content}>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Scholarship Office</h1>
                          <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                          <div className="flex flex-wrap items-center ">
                            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" href="./Scholarship/scholarship.html">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                        <img className="object-cover object-center w-full lg:h-48 md:h-36" src="/images-pexels/student-support.jpg" alt="blog" />
                        <div className={styles.office_content}>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Student support center</h1>
                          <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                          <div className="flex flex-wrap items-center ">
                            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0" href="./support/student-support.html">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </section>

          
    </div>
    )
}