
import Link from "../node_modules/next/link";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";




interface Props{
    posts: [Post];
}

export default function post( {posts}: Props) {


    return (

       <div>
      
            <div>
                <Link href='/'>Back</Link>
            </div>

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