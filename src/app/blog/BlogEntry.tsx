



export default function BlogEntry({date, title, filename}: {date: string, title: string, filename: string}){
    return(
        <div className="lg:flex m-5 items-center justify-left">
            <h1 className="text-lg lg:text-xl mb-2 lg:mb-0 md:mr-20 text-emerald-500">{date}</h1>
            <a href={"/blog/" + filename}><h1 className="text-pink-400 text-lg lg:text-xl underline underline-offset-4">{title}</h1></a>
        </div>
    )
}