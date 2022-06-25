

export default function Footer () {
    return (

        <div>
            <style jsx>
            {

            `
            .footer_logo{
                text-align: center;
              }
              
              .footer_container{
                display: flex;
                align-items: center;
              }
              
              .header { grid-area: header; }
              .main { grid-area: main; }
              .footer { grid-area: footer; }
              
              .connect_with_us{
                display: flex;
                align-items: center;
                gap: 1.4em;
              }
              
                            
            `
            }
              
            </style>









                
            <footer className="p-20 text-center text-white bg-blue-700 body-font">

                <div className="container flex flex-col flex-wrap items-center justify-center mx-auto footer_container sm:px-1 sm:py-1 md:items-center md:flex-row md:flex-nowrap">

                    <div className="flex flex-col items-center flex-shrink-0 w-64 mx-auto text-center footer_logo md:mx-0 md:text-left">
                        <img className="ntc_circle_logo" src="/images-sas/ntc_logo.png" alt="National Teachers College Logo" />
                        <br />
                        <div className="social_media_links md:flex">
                            <a href="https://www.facebook.com/osa.ntc.520"><img src="/icons/facebook.png" alt="Official Facebook Page of Office of The Student Affairs" /></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMnMCmBBZXLNsmShqffMzkcXKvwnFhmXKJJRlTvrkmDptsJvCphWdBQqVVhTpJNzRPJPC"><img src="/icons/gmail.png" alt="" /></a>
                            <a href=""><img src="/icons/twitter.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center text-white md:pl-20 md:mt-0 md:text-left md:items-center">
                        
                        <div className="w-full px-4 text-center lg:w-1/2 md:w-1/2 md:items-center">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">Connect With us</h2>
                            <nav className="mb-10 list-none">
                                <li>
                                <a className="text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/contact-white.png" alt="Phone Book icon" /> <span>629 J. Nepomuceno Street,
                                    Quiapo, Manila, Philippines </span> 
                                </a>
                                </li>
                                <li>
                                <a className="text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/phone-white.png" alt="Phone Book icon " />
                                    732-5601
                                </a>
                                </li>
                                <li>
                                <a className="text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/mail-white.png" alt="Phone Book icon " />
                                    webmaster@ntc.edu.ph
                                </a>
                                </li>
                            </nav>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-center text-white title-font">Quick links</h2>
                            <nav className="mb-10 list-none">


                                <li>
                                    <a href="./sas.html" className="text-white hover:cursor-pointer">Home</a>
                                </li>
                                <li>
                                    <a href="./osa/osa.html" className="text-white hover:cursor-pointer">Office of The Student Affairs</a>
                                </li>
                                <li>
                                    <a href="./Library/library.html" className="text-white hover:cursor-pointer">Library</a>
                                </li>
                                <li>
                                    <a  href="./Guidance/guidance.html" className="text-white hover:cursor-pointer">Guidance</a>
                                </li>
                                <li>
                                    <a href="./Scholarship/scholarship.html" className="text-white hover:cursor-pointer">Scholarship</a>
                                </li>
                                <li>
                                    <a className="text-white hover:cursor-pointer">Support</a>
                                </li>

                            
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    )
}