
import Link from "../node_modules/next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Footer from "../components/Footer"



interface Props{
    posts: [Post];
}

export default function post( {posts}: Props) {


    return (

       <div>
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
                                    <a href="#blog" className="relative group behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100">
                                        <span className="relative group-hover:text-cyan-800">Blogs</span>
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

        <div className="px-12 mt-5 text-left banner lg:mt-10 md:mt-24 lg:px-20 md:px-40 md:text-center lg:text-left">
            <div className="flex justify-around space-x-8">
                <div className="flex items-center flex-2">
                <div className="pr-4 space-y-8 ">
                    <h1 className="text-4xl font-black leading-tight lg:leading-tight md:leading-tight lg:text-5xl md:text-5xl">Student Activities</h1>
                    <p className="text-gray-600 lg:text-md md:text-lg">Payna is helping you to setting up the payroll without
                        required any finance skills or knowledge before
                    </p>
                    <a href="#blog">

                        <button className="px-8 py-3 text-sm text-white bg-blue-600 rounded-3xl">Explore</button>
                    </a>
                </div>
                </div>
                <div className="hidden p-10 flex-2 md:hidden lg:block ">
                <div  className="relative">
                    <div className="">
                        <img src="/images-sas/Homepage_NTC.jpg" className="rounded-3xl" alt="" />
                    </div>
                    <div className=" w-[213px] bg-white rounded-2xl items-center absolute top-10 -right-20 drop-shadow-xl">
                        <div className="flex items-center px-2 py-4 space-x-2 ">
                            <img  className="w-10 h-10" src="/illustrations/pc-blog.png" alt="" />
                            <div>
                            <h4 className="font-semibold text-gray-800">Read and join</h4>
                            <p className="text-sm text-gray-600">read every blog we had created</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[213px] h-fit  bg-white  drop-shadow-xl rounded-3xl items-center absolute inset-y-1/3 -left-20">
                        <div className="flex items-center px-4 py-2 space-x-2 ">
                            <img  className="h-10 w-15" src="/illustrations/hand-with-phone.png" alt="" />
                            <div>
                            <h4 className="font-semibold text-gray-800">Stay Updated</h4>
                            <p className="text-sm text-gray-600">Join our monthly activities</p>
                            </div>
                        </div>
                        {/* <div className="flex justify-center">
                            <img className="pb-4" src="./assets/img/graph.png" alt="" />
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
      </div>


   
      <section  className="justify-between px-12 mt-10 space-y-8 text-left lg:flex md:flex-none lg:mt-10 md:mt-20 lg:px-20 md:px-12 md:text-center">
         <h5 className="font-bold text-gray-900">Served by <span className="md:inline-flex lg:block">Student Affairs Service</span></h5>
         <div className="grid justify-between grid-cols-3 gap-10 md:grid-cols-5">
            {/* <img className="h-7" src="./assets/img/apple-11 1.png" alt="" />
            <img className="h-7" src="./assets/img/google-2015 1.png" alt="" />
            <img className="h-7" src="./assets/img/slack-2 1.png" alt="" />
            <img className="h-7" src="./assets//img/spotify-1 1.png" alt="" />
            <img className="h-7" src="./assets//img/Group 13.png" alt="" /> */}
         </div>
      </section>
  









      <div className="px-20 py-10 space-y-2 text-center">
                    <h5 className="text-sm font-semibold text-red-400 uppercase">Blogs</h5>
                    <h2 className="text-3xl font-bold text-black">Student Activities</h2>
                    <p className="py-4 text-gray-500">Check our latest blogs<span className="block">here we are providing all of them just for you</span></p>
                </div>

            <div className="flex p-12 justify-left" id="blog">
                

        
                <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
                    {posts.map((post) => (
                        <Link key={post._id} href={`/post/${post.slug.current}`}>
                            <div className="overflow-hidden border rounded-lg cursor-pointer group">
                                <img 
                                className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
                                src={urlFor(post.mainImage).url()!} alt="" />

                                <div className="p-5 bg-slate-400">
                                    <div>
                                        <p> <b>{post.title}</b> </p>
                                        <p>{post.description}</p>
                                    </div>
                                </div>


                            </div>
                        </Link>
                    ))}
                </div>
       
            </div>

       
    
        <Footer />
       
    </div>
    )
}





export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
        _id,
        title,
        description,
        mainImage,
        slug
      }`;
    

    const posts = await sanityClient.fetch(query);

    return {
        props:{
            posts,
        },
    };
};