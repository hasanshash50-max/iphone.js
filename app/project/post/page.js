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
                   <div className="abs"
                      key={post.id}>
                      <h2>{post.title}</h2>
                      <hr/>
                      <p>{post.body}</p>
                   </div>
                );
});
    return (
        <div>
            {postJSX}
        </div>
    );
} 