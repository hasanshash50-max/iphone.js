import Link from "next/link"
export default async function () {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const posts = await response.json();
    const postJSX = posts.slice(0,5).map((post) => {
        return (
              <Link href={`posts/${post.id}`} style={{background:"transparent"}}>
                   <div
                      key={post.id}
                      style={{
                          marginBottom: "30px",
                          padding: "5px",
                          border: "1px solid #000",
                          borderRadius: "10px",
                      }}>
                      <h2>{post.title}</h2>
                      <hr/>
                      <p>{post.body}</p>
                   </div>
            </Link>
        );
    });
    return (
        <div>
            <h1
                style={{
                    position: "absolute",
                    top: "-40px",
                    color:"white"
                }}>
                Welcome to Learn Next.js
            </h1>
            {postJSX}
        </div>
    );
} 