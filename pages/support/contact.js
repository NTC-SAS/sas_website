
import Footer from "../../components/Footer"
import HeaderSupport from "../../components/HeaderSupport"


export default function contact () {
    return (

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
            <HeaderSupport />
            <section className="flex justify-center px-20 text-gray-600 body-font">

                <div className="container py-24 team">
                <div className="flex flex-col w-full mb-20 text-center">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Our Team</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-1/1">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>


                <div className="flex flex-wrap justify-center m-2">
                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">

                    <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg team_list">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80" />
                        <div className="flex-grow">
                        <h2 className="font-medium text-gray-900 title-font">Maria Elma Betonio Cordero</h2>
                        <p className="text-gray-500">Head of OSA</p>



                        </div>
                    </div>
                    </div>


                    <div className="w-full p-2 lg:w-1/3 md:w-1/3">
                    <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
                        <img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/84x84" />
                        <div className="flex-grow">
                        <h2 className="font-medium text-gray-900 title-font">Barbara Jade C. Tiongson</h2>
                        <p className="text-gray-500">Assistant of OSA</p>





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