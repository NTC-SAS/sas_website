import Link from "next/link";

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









                
            <footer className="p-10 text-center text-white bg-blue-700 body-font">

                <div className="container flex flex-col flex-wrap items-center justify-center mx-auto footer_container sm:px-1 sm:py-1 md:items-center md:flex-row md:flex-nowrap">

                    <div className="flex flex-col items-center flex-shrink-0 w-64 mx-auto text-center footer_logo md:mx-0 md:text-left">
                        <img className="w-20 ntc_circle_logo" src="/images-sas/ntc_logo.png" alt="National Teachers College Logo" />
                        <br />
                        <div className="flex social_media_links">
                            <a href="https://www.facebook.com/osa.ntc.520"><img src="/icons/facebook.png" alt="Official Facebook Page of Office of The Student Affairs" /></a>


                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMnMCmBBZXLNsmShqffMzkcXKvwnFhmXKJJRlTvrkmDptsJvCphWdBQqVVhTpJNzRPJPC"><img src="/icons/gmail.png" alt="" /></a>
                            <a href=""><img src="/icons/twitter.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center text-white md:pl-20 md:mt-0 md:text-left md:items-center">
                        
                        <div className="w-full px-4 text-center lg:w-1/2 md:w-1/2 md:items-center">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">Connect With us</h2>
                            <nav className="mt-10 mb-10 list-none">
                                <li>
                                <a className="text-left text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/contact-white.png" alt="Phone Book icon" className="w-10" /> <span>629 J. Nepomuceno Street,
                                    Quiapo, Manila, Philippines </span> 
                                </a>
                                </li>
                                <li>
                                <a className="text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/phone-white.png" alt="Phone Book icon " className="w-10"  />
                                    732-5601
                                </a>
                                </li>
                                <li>
                                <a className="text-white hover:cursor-pointer connect_with_us">
                                    <img src="/icons/mail-white.png" alt="Phone Book icon " className="w-10"  />
                                    webmaster@ntc.edu.ph
                                </a>
                                </li>
                            </nav>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-center text-white title-font">Quick links</h2>
                            <nav className="mb-10 list-none">


                                <li>
                                   <span> <Link href='/'> Home </Link> </span> 
                                </li>
                                <li>
                                    <span> <Link href='/osa/osa'> Office of The Student Affairs </Link> </span>
                                </li>
                                <li>
                                    <span> <Link href='/library/library'> Library </Link> </span>
                                </li>
                                <li>
                                    <span> <Link href='/guidance/guidance'> Guidance </Link> </span>
                                </li>
                                <li>
                                    <span> <Link href='/scholarship/scholarship'> Scholarship </Link> </span>
                                </li>
                                <li>
                                    <span> <Link href='/support/support'> Support </Link> </span>
                                </li>

                            
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    )
}