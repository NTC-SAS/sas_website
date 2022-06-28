import Link from "next/link";

export default function HeaderGuidance () {
    return (
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
                                    <span className="relative cursor-pointer group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:bg-cyan-100">     
                                        <Link href='/guidance/guidance'>  
                                            <span className="relative text-white-600">Guidance</span>
                                        </Link>
                                    </span>
                            </li>
                            <li>
                                    <span className="relative cursor-pointer group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:bg-cyan-100">     
                                        <Link href='/guidance/contact'>  
                                            <span className="relative text-white-600">contact</span>
                                        </Link>
                                    </span>
                            </li>

                        </ul>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}