export default function Summary (props){
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full text-center">
                <h2 className="text-xs font-medium leading-4 tracking-widest text-indigo-500 title-font">{props.greets}</h2>
                <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font help_title ">{props.title}</h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3 help_description">
                    {props.content}
                </p>
            </div>
        </div>
      </section>
    )
}