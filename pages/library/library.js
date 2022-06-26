
import Footer from "../../components/Footer"

export default function library () {
    return (
    <div>
            <style jsx>
        {`
          
          .leftcolumn {   
            float: left;
            width: 75%;
          }
          
          .rightcolumn {
            float: left;
            width: 25%;
            padding-left: 20px;
          }
          
          .fakeimg {
            background-color: #aaa;
            width: 100%;
            overflow: auto;
          }
          .fakeimg img{
            width: 100%;
          }
        
          .announcement_image{
            overflow: auto;
            overflow: hidden;
            height: 80vh;
          }
          
          .card {
             background-color: white;
             padding: 20px;
             margin-top: 20px;
          }
        
        .External_links{
          display: flex;
          flex-direction: column;
        }
        .External_links a{
          text-decoration: underline blue;
        }
        
        
        .row{
          padding: 20px;
        }
        
          
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
          
          .footer {
            padding: 20px;
            text-align: center;
            background: #ddd;
            margin-top: 20px;
          }
          
          @media screen and (max-width: 800px) {
            .leftcolumn, .rightcolumn {   
              width: 100%;
              padding: 0;
            }
          }
        
        
        `}
        </style> 

        <div>              

            <div className="w-full bg-center bg-cover bg-slate-900 background_pages "  style={{ backgroundImage: "url(/images-sas/background_pages.png)" }}>
                <div className="container flex items-center py-12 mx-auto sm:py-24">
                <div className="flex-col items-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
                    <h1 className="flex mx-4 text-2xl font-black leading-7 text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
                    Library Page
                    </h1>
                </div>
                <div className="flex items-center justify-center">

                </div>
                </div>
            </div>


            <div className="row">

                <div className="leftcolumn">
                
                <div className="card">
                    <h2>E-LIBRARY RESOURCE GUIDELINES FOR FACULTY
                    AND STUDENTS OF NATIONAL TEACHERS COLLEGE</h2>
                    <br />
                    <h5>
                    The NTC library staff continuously research and compiles numerous open-access
                    and open educational resources for academic use. Thus, it is advised for students or
                    faculty to follow the official Facebook Page of the NTC Library, as the page
                    continuously shares and updates links of numerous open access and open educational
                    </h5>
                    <br />
                        <div className="fakeimg announcement_image">
                            <img src="/images-sas/library-announcement.webp" alt="" />
                        </div>
                    <br />
                        <p>Guidelines for Faculty on How to Access Library Resources
                    <br />
                    <br />
                    4.1. Access to Physical Resources
                    Due to the current health restrictions placed upon the institution, browsing the
                    shelves of the libraries (Main, Graduate and Basic Education Library) is strictly
                    limited to library staff only. Thus, Faculty members who want to borrow physical
                    books from the library must send an email from the NTC Library Support email
                    (library.support@ntc.edu.ph). The email must indicate the title of the topic or book
                    and the date and time of the pick-up. (See Appendix A for other information in
                    borrowing physical books)
                    <br />
                    <br />
                    4.2. Access to Electronic Resources
                    Faculty members can have access to the e-resource subscription such as EBSCO.
                    To receive log-in credentials, faculty members must send an email to NTC Library
                    support (library.support@ntc.edu.ph).The email must indicate the employee no. of
                    the faculty who will access the e-resources and the reason for the requisition of the
                    log-in credentials.</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className="card">
                    <h2>Announcement</h2>
                    <h5>description, Sep 2, 2022</h5>
                    <div className="fakeimg" style={{height: "200px"}}>Image</div>

                    <br />
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                </div>
                
                
                
                <div className="rightcolumn">
                <div className="card">
                    <h2>E-Library Resource Guidelines</h2>
                    <div className="fakeimg">
                    <a href="https://bit.ly/3lGMxOz?fbclid=IwAR33ypHz8EPaBcBzMOOP2uRghlz41sNhhS_mn1g6yDRVhSwGhHQOuMR8J0o">
                        <img src="/images-sas/library-image.jpg" alt="Library Guidelines" />
                    </a>
                    </div>
                </div>




                <div className="card">
                    <h3> Library Request Form</h3>
                    <br />

                    
                    <div className="fakeimg">
                    <a href="https://forms.gle/SVGwFntJNjHHMYHh9">
                        <img src="/images-sas/library-JHS.webp" alt="" />
                    </a>

                    </div>
                    <br />

                    
                    <div className="fakeimg">
                    <a href="https://forms.gle/RhoXEyJUgrxNKXU5A">
                        <img src="/images-sas/library-college.jpg" alt="" />
                    </a>

                    </div>
                    <br />
                </div>



                
                <div className="card">
                    <h3>Follow and Contact us</h3>
                    <br />
                    <div className="External_links">
                        <a href="https://www.facebook.com/NTCLibraryOfficial">Official Facebook Page of Library</a>
                        <a href="library.support@ntc.edu.ph">Official Library Support Email</a>
                        <a href="">Telephone No. 8734-5601 loc. 231</a>
                    </div>
                </div>

                
                <div className="card">
                    <h3>External links</h3>
                    <br />

                    
                    <div className="fakeimg">
                    <a href="https://slz02.scholasticlearningzone.com/resources/dp-int/dist/#/login3/student/PHLf9x7">
                        <img src="/images-sas/slz_logo.png" alt="" />
                    </a>
                    </div>
                    <br />
                    
                    
                    <div className="fakeimg">
                    <a href="https://search.ebscohost.com/Login.aspx">
                        <img src="/images-sas/ebscoHost.png" alt="" />
                    </a>
                    </div>
                    <br />
                    
                </div>
                </div>
            </div>




            <Footer />
        </div>
    </div>
    
    )
}