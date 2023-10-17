import { Link } from "react-router-dom";

export default function Home({id, image, title, desc}: {id:string, image: string, title: string, desc: string}) {
  return (
    <section key={id} className="md:flex md:max-w-4xl md:gap-2">
      <div className="bg-slate-300 md:min-w-[500px] md:min-h-[200px] md:aspect-[2/1]">
        <img src={image} className="md:w-full md:h-full md:object-cover" />
      </div>
      <div>
        <div>
          <Link to={`/detail/${id}`} className="text-zinc-900 font-bold md:text-xl md:mb-2">{title}</Link>
          <p className="text-zinc-900 text-xs md:text-sm">{desc}</p>
        </div>
        <Link to={`/detail/${id}`} className="bg-zinc-200 text-sm p-1">
          Read more
        </Link>
      </div>
    </section>
  )
}
