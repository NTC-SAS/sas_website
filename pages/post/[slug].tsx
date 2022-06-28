
import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text";
import Link from "next/Link";


import {FacebookShareButton} from 'next-share';
  

interface Props {
    post: Post;
}

function Activities( { post }: Props) {
   

    return(
        <main className="select-none">




            <img 
            className="object-cover w-full h-40"
            src="/images-sas/Homepage_NTC.jpg" alt="" 
            />

            

            <article className="relative max-w-5xl p-10 mx-auto overflow-hidden">
                
                <Link href='/post'>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rounded-2xl hover:bg-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <h6>Back</h6>
                    </div>
                </Link>    

                <h1 className="mt-10 md:text-left text-center mb-3 text-3xl">{post.title}</h1>
                <h6 className="mb-2  text-sm font-light text-gray-500">
                    {post.description}
                </h6>
                <p className="text-sm">Posted at: {post._createdAt}</p> 

            <div className="mt-10">

                <PortableText 
                
                dataset = {process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}         
    

                content = {post.body}
                

                serializers = {{
                    h1: (props: any) => (
                        <h1 className="my-5 text-2xl font-bold" {...props} />
                    ),
                    h2: (props: any) => (
                        <h2 className="my-5 text-xl font-bold" {...props} />
                    ),
                    li: ({ children }: any) => (
                        <li className="list-disc"> {children} </li>
                    ),
                    link: ({ href, children }: any) =>(
                        <a href={href} className="text-blue-500 hover:underline">
                            {children}
                        </a>
                    ),
                }}
                />

                
            </div>

            </article>

            <footer className="relative mt-10 lg:hidden ">
                <div className="fixed bottom-0 flex w-full p-5 bg-white justify-evenly">

                    <div className="flex flex-col items-center gap-1.5">
                        <Link href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </Link>
                            <h6 className="text-xs font-medium"> Home </h6>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                        <Link href='/post'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </Link>
                            <h6 className="text-xs font-medium"> Blogs  </h6>

                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                        <FacebookShareButton url={`https://sas-website-rho.vercel.app/post/${post.slug.current}`}  >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>

                            <h6 className="text-xs font-medium"> Share </h6>
                            </FacebookShareButton>
                    </div>

                </div>
            </footer>

        </main>

    )
}



export default Activities;


export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
      }`;

    const posts = await sanityClient.fetch(query); 
      
    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return{
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        mainImage,
        slug,
        body
        
    }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return{
        props: {
            post,
        },
        revalidate: 60,
    };
}