import Link from "../../node_modules/next/link";

const request = async (url : string) => {
  const req = await fetch(url, {
    next: {
      revalidate: 50,
    },
  });
  const data = await req.json()

  return data
}

async function Home() {
  const data = await request("https://dummyjson.com/products")
  console.log(data);
  
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
      {data.products.map((item) => {
        return (
          <Link href={`/product/${item.id}`}>
            <div className="card w-64 h-[450px] bg-base-100 shadow-xl mb-4">
              <figure>
                <img src={item.thumbnail} alt={item.title} />
              </figure>
              <div className="card-body flex ">
                <h2 className="card-title justify-start">
                  {item.title}
                </h2>
                <p>{item.description.slice(0,50)} ...</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.category}</div> 
                  <div className="badge badge-outline">{item.price}$</div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
