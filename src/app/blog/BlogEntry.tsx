



export default function BlogEntry({date, title, filename}: {date: string, title: string, filename: string}){
    return(
        <div className="flex m-5 items-center justify-left">
            <h1 className="text-lg md:text-xl mr-20 text-emerald-500">{date}</h1>
            <a href={"/portfolio_v2/blog/" + filename}><h1 className="text-pink-400 text-lg md:text-xl underline underline-offset-4">{title}</h1></a>
        </div>
    )
}