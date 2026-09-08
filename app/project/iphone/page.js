export default async function Api() {

  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );

  const data = await response.json();

  console.log(data);

  return (
        <div className="iphons">
           {data.products.map((product) => (
           <div key={product.id}>
             <h2 id="title">{product.title}</h2>
             <img className="sum" src={product.thumbnail} alt={product.title} width="200" />
           </div>
        ))}
        </div>
  );
}