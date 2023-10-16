import { Link } from "react-router-dom";

export default function Home({id, image, title, desc}: {id:string, image: string, title: string, desc: string}) {
  return (
    <section key={id} className="flex flex-col min-w-min max-w-md">
      <div className="">
        <img src={image} className="w-full" />
      </div>
      <div>
        <div>
          <h2 className="text-[1rem] text-zinc-900 font-bold">{title}</h2>
          <p className="text-xs text-zinc-900">{desc}</p>
        </div>
        <Link to={`/${id}`} className="bg-zinc-200 text-xs underline p-1">
          Read more
        </Link>
      </div>
    </section>
  )
}
