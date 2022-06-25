import { GetStaticProps } from "next";
import  Header from "../../components/HeaderSas";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";



interface Props {
    post: Post;
}

function Activities( { post }: Props) {
   

    return(
        <main>
            <Header />

            <img 
            className="object-cover w-full h-40"
            src="/images-sas/Homepage_NTC.jpg" alt="" 
            />

            <article className="max-w-3xl p-5 mx-auto">
                <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
                <h2 className="mb-2 text-xl font-light text-gray-500">
                    {post.description}
                </h2>

            <div>
            
            </div>

            </article>
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