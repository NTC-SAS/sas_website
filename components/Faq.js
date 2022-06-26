import Link from "next/link";


export default function Faq () {
    return(
     <div>

<style jsx> {
                        `

                        .sas_title{
                            font-family: Poppins-medium;
                            font-size: 2.4rem;
                        }
                        .sas_description{
                            font-family: Lora-medium;
                            line-height: 1.8;
                            letter-spacing: 1px;
                            color: rgb(10, 10, 10);
                        }
                        .today{
                            color: #e9d313;
                        }
                        .today_space{
                            line-height: 2;
                        }
                        
                        .summary_container{
                            display: flex;
                            align-items: center;
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
                        
                        .question_mark{
                            width: 50px;
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

                        
                        
                        /* Old enrollment */
                        
                        .old_enrollment {
                            display: grid;
                            padding: 10px;
                            grid-template-columns: repeat(6, 1fr);
                            grid-template-rows: repeat(12, 1fr);
                            grid-column-gap: 10px;
                            grid-row-gap: 10px;
                            }
                            
                            .old_enrollment_box_1 { grid-area: 1 / 1 / 4 / 4; }
                            .old_enrollment_box_2 { grid-area: 1 / 4 / 4 / 7; }
                            .old_enrollment_box_3 { grid-area: 4 / 1 / 7 / 4; }
                            .old_enrollment_box_4 { grid-area: 4 / 4 / 7 / 7; }
                            .old_enrollment_box_5 { grid-area: 7 / 1 / 10 / 4; }
                            .old_enrollment_box_6 { grid-area: 7 / 4 / 10 / 7; }
                            .old_enrollment_box_7 { grid-area: 10 / 1 / 13 / 4; }
                            .old_enrollment_box_8 { grid-area: 10 / 4 / 13 / 7; }
                        
                        
                        /* ID */
                              
                        .id_application {
                            display: grid;
                            grid-template-columns: repeat(6, 1fr);
                            grid-template-rows: repeat(6, 1fr);
                            grid-column-gap: 10px;
                            grid-row-gap: 10px;
                            padding: 10px;
                        }
                            
                        .id_application_box-1 { grid-area: 1 / 1 / 4 / 4; }
                        .id_application_box-2 { grid-area: 1 / 4 / 4 / 7; }
                        .id_application_box-3 { grid-area: 4 / 1 / 7 / 4; }
                        .id_application_box-4 { grid-area: 4 / 4 / 7 / 7; }
                        
                        .id_application_content{
                            padding: 10px;
                        }
                        
                        .id_application_content p {
                            line-height: 1.6;
                        }
                        
                        .id_application_content p > a{
                           color: #2d9ad4;
                           text-decoration: underline;
                        }
                        
                        
                        
                        
                        
                        /* Monthly Installment */
                        
                        
                        .monthly_installment {
                            display: grid;
                            padding: 20px;
                            grid-template-columns: repeat(6, 1fr);
                            grid-template-rows: repeat(6, 1fr);
                            grid-column-gap: 20px;
                            grid-row-gap: 20px;
                            }
                            
                            .monthly_installment_box_1 { grid-area: 1 / 1 / 7 / 4; }
                            .monthly_installment_box_1 p {
                                line-height: 2;
                            }
                        
                        
                            .monthly_installment_box_2 { grid-area: 1 / 4 / 7 / 7; }
                        
                        
                            
                        /* portal password */
                        
                        .portal_password {
                            display: grid;
                            padding: 10px;
                            grid-template-columns: repeat(6, 1fr);
                            grid-template-rows: repeat(9, 1fr);
                            grid-column-gap: 10px;
                            grid-row-gap: 10px;
                            }
                            
                            .portal_password_box_1 { grid-area: 1 / 1 / 4 / 4; }
                            .portal_password_box_2 { grid-area: 1 / 4 / 4 / 7; }
                            .portal_password_box_3 { grid-area: 4 / 1 / 7 / 4; }
                            .portal_password_box_4 { grid-area: 4 / 4 / 7 / 7; }
                            .portal_password_box_5 { grid-area: 7 / 1 / 10 / 4; }
                            .portal_password_box_6 { grid-area: 7 / 4 / 10 / 7; }
                        
                        
                            
                            
                        
                        `}
                    </style>
                    
            <div className="container px-5 mx-auto">
                <section className="px-6 py-12 bg-white md:py-20 md:px-0">
                    <div className="m-auto max-w-default">
                        <div className="">
                            <h2 className="text-3xl font-bold text-gray-800 md:text-5xl faq" id="faq"> Frequently Asked Questions</h2>
                            <p>
                                At The National Teachers College, 
                                we boost the continuous development of our students through multiple 
                                student services. Our guidance center and student affairs office are well
                                equipped to help students address any developmental challenge they may have.
                            </p>
                        </div>
                    </div>




                    <div className="mt-10 md:mt-16">
                        
                        <div className="m-auto md:max-w-full">
                            <details className="mb-2 border-b-2">
                                <summary className= "p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                    
                                    <div className="faq_dropdown">
                                        <div className="flex items-center">
                                            <img src="/illustrations/hand-question-mark.png" className="question_mark" alt="" />
                                            <p>Enrollment process for Old Students</p>
                                        </div>
                                    
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>

                                    </div>
                                    
                                </summary>
                                <p className="px-3 py-2 text-gray-600">
                                    You are officially enrolled once your payment has been validated. Kindly allow 1 - 3 days for the validation process to be completed.
                                    To check if your payment has been validated:
                                    Click Online Enrollment
                                    Scroll down to Account Summary
                                    Validated payment will be reflected there
                                    If your payment has not been validated after 3 working days after payment has been made, kindly email accounting.support@ntc.edu.ph and provide proof of payment.
                                    • You may proceed to pay your fees so that you can be officially enrolled. However, Enrollment Advisers will double-check the subjects you enrolled in and will get in touch with you should there be a problem.

                                </p>

                                <br />
                                
                                <div className="enrollment-container">
                                    <div className="old_enrollment">
                                        
                                        <div className="old_enrollment_box_1"> 
                                        <img src="/Old-student-enrollment/step1.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_2"> 
                                        <img src="/Old-student-enrollment/step2.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_3"> 
                                        <img src="/Old-student-enrollment/step3.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_4"> 
                                        <img src="/Old-student-enrollment/step3-fullpayment.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_5"> 
                                        <img src="/Old-student-enrollment/step3.3.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_6"> 
                                        <img src="/Old-student-enrollment/step4.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_7"> 
                                        <img src="/Old-student-enrollment/reminders.v1.jpg" alt="" />
                                        </div>

                                        <div className="old_enrollment_box_8"> 
                                        <img src="/Old-student-enrollment/reminders.v2.jpg" alt="" />
                                        </div>

                                    </div>
                                </div>

                            </details>

                        </div>
                    </div>




                    <div className="">
                        
                        <div className="m-auto md:max-w-full">
                            <details className="mb-2 border-b-2">
                                <summary className= "p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                    
                                    <div className="faq_dropdown">
                                        <div className="flex items-center">
                                            <img src="/illustrations/hand-question-mark.png" className="question_mark" alt="" />
                                            <p>NTC I.D. Application</p>
                                        </div>
                                    
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>

                                    </div>
                                    
                                </summary>
                                <p className="px-3 py-2 text-gray-600">
                                1. Photo must be 2”x2” in size with plain white background. <br />
                                2. Photo must not be more than 6 months old at the date of uploading.<br />
                                3. Student must be in decent dark attire.<br />
                                4. No cap or hat - applicants can only wear head covers for reasons of religion or belief.<br />
                                5. Save picture image in jpg format using your student number as file name
                                ex: 87345601.jpg<br /><br />
                                Signature Requirements:<br />
                                1. Signature should be black with plain white background.<br />
                                2. Save the signature image in bitmap (bmp) format using your student number as the file name.
                                Ex: 87345601.bmp
                                Images that are not within the required format will not be processed.<br /><br />
                                Application links:<br />
                                ID Application for Kinder to JHS Students: https://bit.ly/3vxxUCG<br />
                                ID Application for Senior High School: https://bit.ly/3C7Kg5y<br />
                                ID Application for College Students: https://bit.ly/3K6Ad3E<br />
                                ID Application for Graduate Students: https://bit.ly/3pqqAow<br /><br />
                                To view the list of printed IDs, please sign in to Google using your NTC account then click the link below:<br />
                                <span> <Link href={"https://drive.google.com/.../1x9z886T0DzPmiu51D"}>  https://drive.google.com/.../1x9z886T0DzPmiu51D </Link> </span> <br />
                                If your ID is already available, you may pick it up at the NTC elementary gate. Please inform the guard on duty about your purpose.
                                </p>

                                <br />
                                
                                <div className="enrollment-container">
                                    <div className="id_application">
                                        
                                        <div className="id_application_box-1"> 
                                        <img src="/ID-Application/ID.jpg" alt="" />
                                        </div>

                                        <div className="id_application_box-2"> 
                                        <img src="/ID-Application/step-1.jpg" alt="" />
                                        </div>

                                        <div className="id_application_box-3"> 
                                        <img src="/ID-Application/step-2.jpg" alt="" />
                                        </div>

                                        <div className="id_application_box-4"> 
                                        <img src="/ID-Application/step-3.jpg" alt="" />
                                        </div>



                                    </div>
                                </div>

                            </details>

                        </div>
                    </div>


                    
                    <div className="">
                        
                        <div className="m-auto md:max-w-full">
                            <details className="mb-2 border-b-2">
                                <summary className= "p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                    
                                    <div className="faq_dropdown">
                                        <div className="flex items-center">
                                            <img src="/illustrations/hand-question-mark.png" className="question_mark" alt="" />
                                            <p>Password reset procedure of NTC student portal</p>
                                        </div>
                                    
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>

                                    </div>
                                    
                                </summary>
                                <p className="px-3 py-2 text-gray-600">
                                    Please Follow the procedure.
                                </p>

                                <br />
                                
                                <div className="enrollment-container">
                                    <div className="portal_password">
                                        
                                        <div className="portal_password_box_1"> 
                                        <img src="/Portal-password/step1.jpg" alt="" />
                                        </div>

                                        <div className="portal_password_box_2"> 
                                        <img src="/Portal-password/step2.jpg" alt="" />
                                        </div>

                                        <div className="portal_password_box_3"> 
                                        <img src="/Portal-password/step3.jpg" alt="" />
                                        </div>

                                        <div className="portal_password_box_4"> 
                                        <img src="/Portal-password/step4.jpg" alt="" />
                                        </div>

                                        <div className="portal_password_box_5"> 
                                        <img src="/Portal-password/step5.jpg" alt="" />
                                        </div>

                                        <div className="portal_password_box_6"> 
                                        <img src="/Portal-password/step6.jpg" alt="" />
                                        </div>

                                    </div>
                                </div>

                            </details>

                        </div>
                    </div>
                    




                    <div className="">
                        
                        <div className="m-auto md:max-w-full">
                            <details className="mb-2 border-b-2">
                                <summary className= "p-4 pt-5 mb-1 text-lg font-bold text-gray-800 cursor-pointer focus:text-blue-700 summary_container"> 
                                    
                                    <div className="faq_dropdown">
                                        <div className="flex items-center">
                                            <img src="/illustrations/hand-question-mark.png" className="question_mark" alt="" />
                                            <p>The Application for the Monthly installment plan for the 1st semester</p>
                                        </div>
                                    
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>

                                    </div>
                                    
                                </summary>


                                <br />


                                <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1 p-3 gap-y-5 md:grid-cols-2 md:grid-rows-1 md:gap-x-1">
                                    <div className="col-span-3 md:col-span-1">
                                    <img src="/Monthly-installment/monthly-installment.jpg" className="md:mx-5" alt="" />
                                    </div>


                                    <div className="col-span-5 md:col-span-1 md:mr-20">
                                        <p>
                                                                                                
                                          <b> Announcement from Accounting Office </b>  <br /> <br />
                                                
                                          Following are the payment channel options you may use to settle your fees:<br />
                                          Via Student Portal<br />
                                          ECPay (video tutorial: https://bit.ly/37n9Jue)<br />
                                          Dragonpay (video tutorial: https://bit.ly/37n9Jue)<br /><br />
                                                
                                          Via Over-the-counter Payment in Equicom or RCBC<br />
                                          Use bills payment slip (NOT deposit slip)<br />
                                          Via NTC Cashier<br />
                                          To ensure that we adhere to the health protocols and to ensure safety of our students, parents, and employees, we would like to emphasize the strict implementation of onsite appointment system starting tomorrow, February 3, 2021.
                                          Those who intend to pay onsite must:<br /><br />
                                          1.      Fill in the Google form posted weekly on the NTC Official Community Group at least 2 days before your visit.<br />
                                                                                                2.      Arrive on the scheduled appointment date wearing your face masks and face shields.
                                                                                                Your safety is our top priority. Only visitors who scheduled an appointment through Google form will be accommodated.
                                                                                                Tenders accepted onsite:<br />
                                                                                                Cash
                                                                                                Debit and Credit Cards (VISA, Master Card, JCB, Union Pay) <br />
                                                                                                Please note that for credit cards, only straight payment transactions are currently accepted.
                                </p>
                                    </div>
                                </div>

                            </details>

                        </div>
                    </div>







                </section>
         </div>
     </div>

    )
}