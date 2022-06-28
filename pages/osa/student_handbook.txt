


export default function student_handbook () {
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
                }
                .fakeimg img{
                    width: 100%;
                }

                .announcement_image{
                    overflow: auto;
                    overflow: hidden;
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
                
                .list_contents{
                    list-style-type: disc;
                }
                li:hover{
                    text-decoration: underline;
                    cursor: pointer;
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




        <div className=" row">

                    <div className="border-2 leftcolumn">

                    <div className="card">
                        <h1 className="text-center font-bold p-6" id="boardOfTrustees">
                                BOARD OF TRUSTEES
                        </h1>
                            <br />
                        <table className="table-auto w-full ">
                            <tbody className="text-center">
                                <tr className="border-2">
                                    <td className="border-2 p-2">Alfredo I. Ayala, MBA</td>
                                    <td className="border-2 p-2">Chairman</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Atty. Solomon M. Hermosura</td>
                                    <td className="border-2 p-2">Corporate Secretary</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2 md:p-0">Rosallie A. Dimaano, MBA</td>
                                    <td className="border-2 p-2">Treasurer</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Paolo Maximo F. Borromeo, MBA</td>
                                    <td className="border-2 p-2">Board Member</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Bernadette M. Nepomuceno, MA</td>
                                    <td className="border-2 p-2">Board Member</td>
                                </tr>

                            </tbody>
                        </table>

                        <h1 className="text-center font-bold p-6">ADMINISTRATION OFFICIALS</h1>
                            <br />
                        <table className="table-auto w-full ">
                            <tbody className="text-center">
                                <tr className="border-2">
                                    <td className="border-2 p-2">Alfredo I. Ayala, MBA</td>
                                    <td className="border-2 p-2">President</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Pamela Q. Wu, ABP</td>
                                    <td className="border-2 p-2">Executive Vice President / Chief Operating Officer</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2 md:p-0">Asher Jodl O. Arguelles</td>
                                    <td className="border-2 p-2">Chief-of-Staff and Associate, Strategy and Planning</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Jennifer T. Buen, CPA, DBA</td>
                                    <td className="border-2 p-2">Vice President for Finance</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Edizon A. Fermin, PhD</td>
                                    <td className="border-2 p-2">Vice President for Academic Affairs</td>
                                </tr>

                                
                                <tr className="border-2">
                                    <td className="border-2 p-2">Noel A. Sergio, DBA</td>
                                    <td className="border-2 p-2">Vice President for Administration</td>
                                </tr>

                                
                                <tr className="border-2">
                                    <td className="border-2 p-2">Joan Alaine Belen, MGC</td>
                                    <td className="border-2 p-2">Assistant Vice President for Student Services</td>
                                </tr>

                                
                                <tr className="border-2">
                                    <td className="border-2 p-2">Niña A. Egloso</td>
                                    <td className="border-2 p-2">Human Resources Director</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Carlo A. Jimeno</td>
                                    <td className="border-2 p-2">Director for Marketing, Corporate Communications and Admissions</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Agnes L. Sunga, DIT</td>
                                    <td className="border-2 p-2">Registrar</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Ferdinand B. Pitagan, PhD</td>
                                    <td className="border-2 p-2">Dean, School of Teacher Education</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Solane S. Duque, MSEE</td>
                                    <td className="border-2 p-2">Dean, School of Arts of Arts, Science and Technology/Program Head-BSIT and BLIS</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Daisy H. Estrada, DBA</td>
                                    <td className="border-2 p-2">Dean, Institute of Business and Accountancy</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Fidel C. Soriano, MAEd</td>
                                    <td className="border-2 p-2">Principal, Basic Education</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Maria Elma B. Cordero, EdD</td>
                                    <td className="border-2 p-2">Head, Office of the Student Affairs</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Grace Ayessa C. Bernabe, MEGC</td>
                                    <td className="border-2 p-2">Head, Guidance Office</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Helen M. Correa, MAEd</td>
                                    <td className="border-2 p-2">Chief Librarian</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Weymard Lance M. Gomez</td>
                                    <td className="border-2 p-2">Information Technology Manager</td>
                                </tr>

                                <tr className="border-2">
                                    <td className="border-2 p-2">Engr. Cecil R. Carrera</td>
                                    <td className="border-2 p-2">OIC Head, Facilities Management</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>

                    <div className="card">
                        
                            <div className="p-5 m-2 border-2" id="pvm">
                                <h1 className="font-bold">Philosophy</h1>
                                    <p>
                                        The NATIONAL TEACHERS COLLEGE believes in democratic education for individual responsibility and social competence.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">VISION</h1>
                                    <p>
                                        NTC envisions itself as a leading academic institution for the development of all levels of education anchored
                                        on the ideals of Excellence, Relevance, Access, and Effectiveness, geared towards national productivity and
                                        world-className competitiveness.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">MISSION</h1>
                                    <p>
                                        The avowed mission of NTC is to provide leaders and innovators in the academe and industries who are
                                        equipped, responsible, and competent individuals to contribute to national and international endeavours.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">OBJECTIVES</h1>
                                    <p>
                                        1. To produce educators and personnel in the industries who are socially efficient and responsive to the needs
                                        of the Republic of the Philippines within the framework of international standards; and
                                        <br />
                                        2. To provide students with working understanding of the nature and meaning of democracy, of the changing
                                        social milieu in which he is expected to work and live, the nature of the Filipino and his culture, and his
                                        responsibilities to the people of the region to which he belongs and the world at large.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">BHAG</h1>
                                    <p>
                                    We aim to be the largest TEI and the most internationally recognized for impact on teaching and learning quality by 2030.
                                    </p>
                            </div>

                    </div>

                        <div className="card">
                            
                            <div className="p-5 m-2 border-2" id="pvm">
                                <h1 className="font-bold">CORE PURPOSE</h1>
                                    <p>
                                        To enable access to success for our students
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">CORE VALUES</h1>
                                    <p>
                                    The National Teachers College lives by the following CORE Values: <br />
                                    1. KAHUSAYAN: Commitment to Excellence
                                    Hindi pwede ang pwede na. Driven to achieve outstanding performance and always strives to attain the goals.<br />
                                    2. KATAPATAN: Dedication to Service
                                    Steps up wholeheartedly towards a greater purpose.<br />
                                    3. MALASAKIT: Effective Concern for Others
                                    Shows sympathetic concern about the well-being of each other and acts on it.<br />
                                    4. PAGKAMALIKHAIN: Creativity and Innovation
                                    Responds to new challenges with imaginative ideas and real solutions.<br />
                                    5. INTEGRIDAD: Integrity
                                    Does the right thing even when no one is looking.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">THE NTC HISTORY</h1>
                                    <p>
                                    <br />
                                    The National Teachers College was founded by Dr. Segundo M. Infantado, Sr. and Dr. Flora Amoranto-Ylagan. It
                                    was officially incorporated on September 29, 1928 in accordance with Republic Act No. 1459 as amended and
                                    was authorized by the Department of Public Instruction to operate as an educational institution on April 17,
                                    1929. Its doors opened to the student public on June 10, 1929 and it was granted government recognition on
                                    February 17, 1930. On its first year of operations, it was permitted by the government to operate a complete
                                    General Course in Education leading to the degree of Bachelor of Science in Education, a complete Preparatory
                                    Course leading to the title of Associate in Arts, and complete courses in General High School, Commercial High
                                    School and High School in Home Economics---the first of its kind in the Philippines.
                                    The College started with seventy-six students and sixteen faculty members. Classes were held in a two-storey
                                    nine-room building on the corner of Mendiola and Legarda Streets in Manila. Dr. Jose P. Laurel, who later

                                    became the president of the Republic of the Philippines, served as the first Chancellor of NTC. He served the
                                    NTC community from 1928 to 1953.
                                    Among the pioneer members of the faculty were distinguished professionals of established reputation, led by
                                    the founders, Dr. Segundo M. Infantado Sr. and Dr. Flora A. Ylagan. The powerhouse roster of faculty helped to

                                    attract more enrollees. Student population rose in its second year of operation despite the disastrous world-
                                    wide economic depression in 1929.
                                    <br />
                                    <br />
                                    In response to the increase in enrollment, NTC occupied its second site in Lepanto corner Paredes Streets in
                                    Manila. At this point, NTC holds the distinction of being the first to be authorized to offer General Secondary
                                    classes for teachers during the long vacation of 1930.
                                    Master of Arts in Education (MAEd) was first offered in 1931 and gained government recognition in 1941.
                                    Further expansion was seen in 1932 when NTC moved to Azcarraga, known today as Claro M. Recto Avenue. The
                                    site was occupied by the institution from 1932 to 1939.

                                    <br />
                                    <br />
                                    SERVING THE NATION THROUGH EDUCATION
                                    The Second World War interrupted the expansion program of the College and destroyed much of the
                                    improvements it took years to build. The occupying Japanese Armed Forces purged the library of all books
                                    which dealt with western culture, especially those which are American in nature, as well as the collection of
                                    specimens which greatly reduced the laboratory facilities.
                                    Liberation in 1945 brought about reorganization and renewed dedication of the College to the cause of
                                    teacher education. The campus was relocated to Tanduay Street, known today as Nepomuceno Street, in
                                    Quiapo Manila. When classes resumed at the opening of the school year in 1945, only a third of the pre-war
                                    students were able to return. Yet the College served more than double the old enrolment because its
                                    facilities were used in the evening without remuneration by the United States Armed Forces for educational
                                    purposes.
                                    <br />
                                    <br />
                                    EXPANSION, GROWTH, AND CONTINUOUS DEVELOPMENT
                                    The College moved several steps forward by including new courses from the Kindergarten to the
                                    Doctoral levels. NTC was the first to offer a three-unit course in Contemporary Philippine Literature in
                                    English. It was a required course for BSE and AB students majoring in English in 1946. Further
                                    improvements were ministrated such as the erection of the college library building in 1947 and
                                    elementary school building in 1948. The College was also the first to offer a Research Course in
                                    Contemporary Philippine Literature in English in the Graduate Division in 1949. The College, too, was
                                    the first to teach Rizals Life and Works in Filipino.
                                    In 1953, Dr. Segundo M. Infantado, Sr. sat as the second president of the institution until 1962.
                                    To meet the demands of the changing times, the College offered the one-year General Clerical Course in
                                    1959.
                                    <br />
                                    <br />

                                    Dr. Flora A. Ylagan succeded Dr. Infantado and became the third president of NTC from 1963 until 1969.
                                    It was during her term that the Administration Building was extended to accommodate its increasing
                                    number of enrollees.

                                    In 1969, Dr. Cresencio G, Peralta served as the fourth president of the institution. During this year, the
                                    Graduate Division was expanded to include the Doctor of Education (EdD) program which was granted
                                    government recognition in 1973.
                                    Being actively involved in community service or non-formal education since 1948, NTC was the first
                                    institution in the Philippine educational system that introduced a Parents-Teachers Association (PTA) in
                                    the tertiary level in 1972. It was also chosen as a Population Education Pilot School in Metro Manila in
                                    1974. In 1977, the one- year General Clerical Course was replaced by the two-year Junior Secretarial
                                    Course. In the same year a Community College for the Food Technician course was likewise opened.
                                    Through the years, the NTC has continually striven to keep abreast of educational developments here and
                                    abroad. It has always endeavoured to make its program of training relevant to the life of the nation, and
                                    the conditions prevailing among the people for whose welfare its students are being trained. Therefore,
                                    the increased emphasis on science and communication has impelled the College authorities to acquire an
                                    additional site where the Science Building was erected.
                                    Dr. Priscilla Y. Arguelles was elevated as the college president in 1987 and served the institution until 2016.
                                    Among private educational institutions in the Philippines, it attained in its own right, through years of
                                    performance, a pre-eminent place in educational leadership, particularly in the field of teacher education.
                                    The College was awarded a Plaque of Recognition on September 12, 1984, by the Department of
                                    Education, Culture, and Sports (DECS) for its invaluable service to the country as a private institution of
                                    learning and for ensuring a strong partnership in education between the government and the private
                                    sector.
                                    <br />
                                    <br />
                                    NTC saw an influx of students, thus further facilities improvements were seen. To enclose the entire building
                                    block for the security of the students, the Board of Trustees decided to put up two additional halls in place of
                                    the old college building. The latter was demolished to make way for the Ylagan Hall and the Infantado Hall.
                                    The Education Program of the College has been accredited and is classified under Level III as of July 10, 1987,
                                    by the Philippine Association of Colleges and Universities- Commission on Accreditation (PACU-COA). Currently,
                                    the program is in the Level III reaccredited status.
                                    To give new meaning and significance to the preparation of kindergarten, elementary, secondary and college
                                    teachers, as well as administrators, supervisors and other specialists in education, a five-year course, Bachelor
                                    of Elementary and Secondary Education (BESED) was opened in 1988. Responding to the challenge of bringing
                                    technology into the classrooms, computer education enriched the General Education curriculum and a new
                                    major in Computer Education was added in the BSED. Computer laboratories for all levels were installed and
                                    faculty training in technology integration was initiated.

                                    <br />
                                    <br />

                                    PREPARING MANPOWER FOR THE INDUSTRY
                                    Gearing toward industrialization and developing professionals for national productivity and global
                                    competitiveness, clerical and secretarial courses have been enriched, revised and ladderized in 1992, leading
                                    to a four-year Bachelor of Science in Secretarial Administration (BSSA) major in Computer Secretarial Education,
                                    which is now known as Bachelor of Science in Office Administration.
                                    In 1993, a ladderized four-year Hotel and Restaurant Management course was opened, which aimed at
                                    providing education and training for manpower that would meet the needs of the hospitality industry.
                                    The I.T. Building was erected in 2003 to house the computer laboratories to support the pursuit of the institution
                                    for its graduates to be attuned to the modern times.
                                    In 2004, the College started offering TESDA Programs. The two-year programs: Food Service Management
                                    (FSM), Computerized Office Management (COM) and Medical Office Assistantship (MOA) have been offered up
                                    to 2011. TESDA Programs, Bread and Pastry Production NC II and Food and Beverage Service NC II, two year
                                    Associate in Hotel and Restaurant Services, and Bartending NC II were offered until 2016.
                                    <br />
                                    <br />
                                    The Bachelor of Library and Information Science (BLIS) replaced the Library Science major of BSE and BEED
                                    in 2007. This has paved the way to making the major a straight program.
                                    In 2009, Bachelor of Science in Tourism (BST), Bachelor of Science in Travel Management (BSTrM) and
                                    Bachelor of Science in Business Administration (BSBA) were opened to meet the needs of the corporate
                                    world. It was also this year that the Rizal Building was inaugurated.
                                    To continue expanding the services of The National Teachers College and to meet the demands of the
                                    times, permit was granted for NTC to offer Bachelor of Science in Information Technology (BSIT) and
                                    Bachelor of Science in Psychology in June 2011 and Bachelor of Science in Accountancy in 2012. In order

                                    to serve more students, a new four-story building was constructed in 2014 which featured 12 fully air-
                                    conditioned classrooms.

                                    In 2015, the Philippine Association of Colleges and Universities - Commission on Accreditation (PACU-
                                    COA), granted level 1 accreditation to EdD, MAEd, and BSOA programs of NTC.

                                    With the introduction of the K-12 program in the Philippines, NTC offered in SY 2016-2017 Senior High
                                    School offering both Academic and Tech-Voc. Tracks.
                                    Veronica Infantado-Fernandez, the Corporate Secretary at that time, sat as Office- in-Charge of the
                                    institution from 2017 until 2018.
                                    <br />
                                    <br />

                                    THE ACQUISITION BY AC EDUCATION AND THE MERGER WITH IPEOPLE, INC. (IPO).
                                    <br />
                                    In 2018, The National Teachers College was acquired by AC Education, Inc. the wholly owned-education
                                    arm of Ayala Corporation. Alfredo I. Ayala was appointed as the President.
                                    Ayala Corporation started investing in the education sector in 2012 through AC Education Inc., with a
                                    vision of empowering Filipino parents and their children by delivering inclusive, quality education geared
                                    at improving employability for its high school and college graduates. With this vision, came the
                                    establishment of APEC Schools (Affordable Private Education Center, Inc.) for secondary education and
                                    the acquisition of University of Nueva Caceres (UNC) located in Naga City, Bicol Region. APEC Schools
                                    offers Junior High School and Senior High School across Metro Manila, Cavite, Rizal, and Batangas, and
                                    has an innovative and progressive approach to both learning and employability. UNC is the oldest and
                                    one of the largest private school in Bicol region, offering programs in Arts and Sciences, Basic Education,
                                    Business and Accountancy, Computer Studies, Criminology, Education, Engineering and Architecture,
                                    Graduate Studies, Law and Nursing. Together with NTC, AC Education aims to transform student lives
                                    through affordable, quality education.
                                    <br />
                                    <br />
                                    In 2019, AC Education, Inc. merged with iPeople, Inc., the holding company for Malayan Educational
                                    System, Inc. (Operating under the name of Mapua University), one of the countrys leading engineering
                                    and technical universities, a world-ranked QS-3 star university and the school with the most CHED
                                    Centers of Excellence in Engineering. The other subsidiaries of Mapua University are Malayan Colleges
                                    Laguna, Malayan Colleges Mindanao and Malayan High School of Science in Manila.
                                    True to its mission and vision, NTC continues to perform its share in educating and training teachers,
                                    administrators, supervisors, and other professionals who will serve in the interest of the Republic of the
                                    Philippines and the world at large.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">ACADEMIC PROGRAMS</h1>
                                    <p>
                                    The Higher Education (HEd) unit consists of three schools School of Arts, Sciences, and Technology, School of
                                        Business, and School of Teacher Education. Graduate Programs belong to the School of Teacher Education.
                                        <br />
                                        <br />

                                        <b> School of Arts, Sciences, and Technology </b> <br />
                                        Bachelor of Library and Information Science <br />
                                        Bachelor of Science in Information Technology <br />
                                        Bachelor of Science in Psychology <br />

                                        <br />

                                        <b> School of Business </b><br />
                                        Bachelor of Science in Accountancy<br />
                                        Bachelor of Science in Business Administration major in:<br />
                                        Financial Management<br />
                                        Human Resource Management<br />
                                        Marketing Management<br />
                                        Operations Management<br />
                                        Bachelor of Science in Hospitality Management<br />
                                        Bachelor of Science in Office Administration<br />
                                        Bachelor of Science in Tourism Management<br />
                                        <br />
                                        <br />
                                        <b> School of Teacher Education </b>
                                        <br />
                                        Graduate Programs<br />
                                        Doctor of Education major in Educational Leadership<br />
                                        Master of Arts in Education major in:<br />
                                        Basic Education<br />
                                        Early Childhood Education<br />
                                        Educational Management<br />
                                        English<br />
                                        Filipino<br />
                                        Library and Information Science Mathematics<br />
                                        Physical Education<br />
                                        Science Education<br />
                                        Social Science Education<br />
                                        Special Education<br />
                                        Technology and Home Management<br />
                                        Master of Arts in Counseling<br />
                                        Undergraduate Programs<br />
                                        Bachelor of Early Childhood Education<br />
                                        Bachelor of Elementary Education
                                        <br />
                                        Bachelor of Physical Education
                                        <br />
                                        <br />
                                        <b> Bachelor of Secondary Education major in: </b><br />
                                        English<br />
                                        Filipino<br />
                                        Mathematics<br />
                                        Science<br />
                                        Social Studies<br />
                                        Bachelor of Special Needs Education<br />
                                        Bachelor of Technology and Livelihood Education major in<br />
                                        Home Economics
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">GENERAL ADMISSION POLICY</h1>
                                    <p>
                                        a. The institution welcomes all students from all walks of life. It does not discriminate based on
                                        gender, ethnicity, religion, socio-economic status, nor school of origin. <br />
                                        b. An open admission policy is maintained in pursuit of inclusivity. However, program-specific
                                        retention guidelines apply. <br />
                                        c. Applicants are expected to subscribe fully to the vision, mission, philosophy, and values of the
                                        school.<br />
                                        <br />
                                    
                                        d. For student applicants in collegiate programs, the following are required upon admission:<br />
                                                i. Form 138 for freshmen<br />
                                                ii. Official Undergraduate College Transcript of Records for transferees<br />
                                                iii. Certificate of Good Moral Character from last school attended<br />
                                                iv. Certificate of Honorable Dismissal for transferees<br />
                                                v. PSA-issued birth certificate<br />
                                                vi. Photocopy of marriage certificate, if school records are in married name<br />
                                        <br />
                                        e. Cross enrollees from other institutions may take a maximum of 18 units on a regular semester
                                        and 9 units during the summer term. Cross-enrolling students shall be required to submit the
                                        following:<br />
                                        i. Permit to cross-enrol issued by the school of origin<br />
                                        ii. Photocopy of PSA-issued birth certificate<br />
                                        iii. Photocopy of marriage certificate, if school records are in married name<br />
                                        <br />
                                        <br />
                                        f. The following guidelines apply to applicants for admission to the Graduate Programs in the
                                        School of Teacher Education.<br />
                                        g. All applicants to the Graduate Programs must be able to submit the following upon admission:<br />
                                        i. Official Undergraduate Transcript of Records for Master s Programs<br />
                                        ii. Official Master s Transcript of Records for the Doctoral Program<br />
                                        iii. PSA-issued birth certificate<br />
                                        h. An applicant to the Doctoral Program must be a holder of a relevant master s degree in
                                        education or allied disciplines from a government-recognized institution;<br />
                                        i. An applicant to the Master of Arts in Education Program must be a holder of bachelor s degree
                                        in education from a government-recognized institution. Non-education degree holders with at
                                        least 18 units in professional education may be admitted upon the approval of the Dean.<br />
                                        j. An applicant to the Master of Arts in Education program who intends to major in a particular
                                        discipline not corresponding to his/her bachelors  degree will be required to take, upon the
                                        assessment of the Program Head, a minimum of nine to a maximum of 18 units of major
                                        subjects in the undergraduate program as pre-requisite courses.<br />
                                        k. An applicant to the Master of Arts in Education program who intends to major in a particular
                                        discipline not corresponding to his/her bachelors  degree will be required to take, upon the
                                        assessment of the Program Head, a minimum of nine to a maximum of 18 units of major
                                        subjects in the undergraduate program as pre-requisite courses.
                                        <br />

                                        l. An applicant to the Master of Arts in Counseling Program must be a graduate of a relevant
                                        undergraduate program such as AB/BS in Psychology, BSE major in Guidance and Counselling or
                                        Values Education, or other allied disciplines. Graduates of other courses who wish to enroll in
                                        the program will be required to take, upon the assessment of the Program Head, a minimum of
                                        nine to a maximum of 18 units of major subjects in the undergraduate program as pre-requisite
                                        courses.
                                        <br />
                                        The Admissions, Registrar and Academic Offices can provide applicants with more detailed documentary
                                        requirements for admissions.
                                        NTC reserves the right to update its admissions requirements and/or policies, as it deems necessary for its
                                        academic objectives.
                                        Students must submit the original admission documents to the Admissions Office within 1 semester after
                                        admission.
                                    </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">ENROLMENT AND REGISTRATION</h1>
                                <p>
                                    

                                </p>
                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">CLASSIFICATION OF STUDENTS</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">ACADEMIC LOAD</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">COURSE EQUIVALENCY, MERGING AND DISSOLVING OF CLASSES</h1>

                            </div>

                            
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">CHANGING, ADDING AND DROPPING OF SUBJECTS</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">ATTENDANCE</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">LEAVE OF ABSENCE</h1>

                            </div>

                            
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">CONSULTATION</h1>

                            </div>
                                                        
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">SYSTEM OF GRADING AND EXAMINATIONS: UNDERGRADUATE PROGRAMS</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">FINAL GRADE REPORTING</h1>

                            </div>
                            
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">COMPLETION OF GRADES</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">HONORS AND AWARDS</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">PROMOTION</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">RETENTION</h1>

                            </div>

                            
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Comprehensive Examinations</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Comprehensive Examinations</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">B. Thesis and Dissertation</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">TRANSFER</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">GRADUATION</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">SCHOLARSHIP AND GRANTS</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">STUDENT CODE OF CONDUCT</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">BOARD OF DISCIPLINE</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Security</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Grievances</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Student Affairs Office</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Guidance Office</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Scholarship</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Career and Placement Services</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Registrars Office</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Library</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Medical & Dental Clinic</h1>

                            </div>


                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Accounting Office</h1>

                            </div>

                           <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">IT Audio Visual Center</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Community Development Center</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Student Organizations</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Guidelines in the Conduct of Student Activities</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Co-Curricular Activities</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Extra-Curricular Activities</h1>

                            </div>

                            
                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">The School Seal</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">NTC Hymn</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Light of Knowledge</h1>

                            </div>

                            <div className="p-5 m-2 border-2">
                                <h1 className="font-bold">Appendix</h1>

                            </div>

                    </div>


                    </div>



                    <div className="sticky top-0 right-0 rightcolumn">
                        <div className="card">
                                <h2>Table of Contents</h2>
                                <br />
                            <div>
                                <ul className="list_contents">
                                    <a href="#boardOfTrustees">
                                        <li>The Board of Trustees</li>
                                    </a>
                                    <a href="#boardOfTrustees">
                                        <li>The Administration Officials</li>
                                    </a>
                                    <a href="#pvm">
                                        <li>Philosophy, Vision and Mission</li>
                                    </a>
                                    <li>The NTC Core Values and History</li>
                                    <li>Academic Programs</li>
                                    <li>General Admission Policy</li>
                                    <li>Enrolment and Registration</li>
                                    <li>Classification of Students</li>
                                    <li>Academic Load</li>
                                    <li>Course Equivalency, Merging and Dissolving of Classes</li>
                                    <li>Changing, Dropping and Adding of Subjects</li>
                                    <li>Attendance</li>
                                    <li>Leave of Absence</li>
                                    <li>Consultation</li>
                                    <li>System of Grading and Examinations</li>
                                    <li>Final Grade Reporting</li>
                                    <li>Completion of Grades</li>
                                    <li>Honors and Awards</li>
                                    <li>Promotion</li>
                                    <li>Retention</li>
                                    <li>Comprehensive Examinations</li>
                                    <li>Thesis and Dissertations</li>
                                    <li>Transfer</li>
                                    <li>Graduation</li>
                                    <li>Scholarships and Grants</li>
                                    <li>Student Code of Conduct</li>
                                    <li>Board of Discipline and Procedure for Disciplinary Cases</li>
                                    <li>Security</li>
                                    <li>Grievances</li>
                                    <li>Student Affairs Office</li>
                                    <li>Guidance Office</li>
                                    <li>Scholarship</li>
                                    <li>Career and Placement Services</li>
                                    <li>Registrars Office</li>
                                    <li>Library</li>
                                    <li>Medical & Dental Clinic</li>
                                    <li>Accounting Office</li>
                                    <li>IT Audio Visual Center</li>
                                    <li>Community Development Center</li>
                                    <li>Student Organizations</li>
                                    <li>Guidelines in the Conduct of Student Activities</li>
                                    <li>Co-Curricular Activities</li>
                                    <li>Extra-Curricular Activities</li>
                                    <li>The School Seal</li>
                                    <li>NTC Hymn</li>
                                    <li>Light of Knowledge</li>
                                    <li>Appendix</li>

                                </ul>
                            </div>
                        </div>            
                    </div>

            </div>
        </div>
    )
}