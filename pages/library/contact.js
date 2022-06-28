import Footer from "../../components/Footer";
import HeaderLibrary from "../../components/HeaderLibrary";
import HeaderOsa from "../../components/HeaderOsa";

export default function contact (){
    return(
        <div>
            <style jsx>
            {`
                @media (max-width: 640px){
                    .team{
                      display: flex;
                      align-items: center;
                      flex-direction: column;
                  
                      padding: 10em;
                    
                    }
                    .team_list{
                      width: 350px;
                    }
                  }
                  
                  .job_btn{
                    background-color: #ffed05;
                  }
            
            `}

            </style>
            <HeaderLibrary />
            <div className="w-full bg-center bg-cover bg-slate-900 background_pages " style={{ backgroundImage: "url(/images-sas/background_pages.png)" }}>
                <div className="container flex items-center py-12 mx-auto sm:py-24">
                <div className="flex-col items-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
                    <h1 className="flex text-2xl font-black leading-7 text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                    Connect With us
                    </h1>
                </div>
                <div className="flex items-center justify-center">

                </div>
                </div>
             </div>






                <section className="flex justify-center px-20 text-gray-600 body-font">

                <div className="container py-24 team">
                    <div className="flex flex-col w-full mb-20 text-center">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Our Team</h1>
                    </div>


                    <div className="flex flex-wrap justify-center m-2">
                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">

                        <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg team_list">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80" />
                        <div className="flex-grow">
                            <h2 className="font-medium text-gray-900 title-font">Mrs. Helen M. Correa </h2>
                            <p className="text-gray-500">Chief Librarian</p>


                        
                        </div>
                        </div>
                    </div>


                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">
                        <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84" />
                        <div className="flex-grow">
                            <h2 className="font-medium text-gray-900 title-font">Mrs. Adriana Josephine Enriquez</h2>
                            <p className="text-gray-500">Basic Education Librarian</p>
                        </div>
                        </div>
                    </div>


                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">
                        <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84" />
                        <div className="flex-grow">
                            <h2 className="font-medium text-gray-900 title-font">Arlene A. Gonzales</h2>
                            <p className="text-gray-500">College Librarian</p>

                        </div>
                        </div>
                    </div>

                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">
                        <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84" />
                        <div className="flex-grow">
                            <h2 className="font-medium text-gray-900 title-font">Mrs. Rea D. Fajanil</h2>
                            <p className="text-gray-500">College Libririan</p>

                        </div>
                        </div>
                    </div>


                    
                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">
                        <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84" />
                        <div className="flex-grow">
                            <h2 className="font-medium text-gray-900 title-font">Ms. Kris C. Astronomo</h2>
                            <p className="text-gray-500">Assistant of Library Office</p>

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
