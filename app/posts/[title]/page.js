export default async function (props) {
    const params = await props.params;
    const title = params.title;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.title}`,
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const post = await response.json();
    console.log(`==========${params.title}`)
    return (
        <div>
            <h1 style={{color:"#fff" , position:"absolute" , top:"60px"}}>hello world and hello next js</h1>
            <h1 
            style={{
                 position:"absolute",
                 top:"93px",
                 left:"10px" , 
                 background:"#fff",
                 color:"#000",
                 padding:"8px 7px" ,
                 width:"50%" ,
                 borderRadius:"10px",
                 border:"solid 2px #000"
            }}>{params.title}</h1>
           <div>
               <h1 
               style={{
                position:"absolute",
                top:"130px",
                background:"#fff" , 
                color:"#000",
                padding:"5px",
                borderRadius:"10px",
                width:"98%",
                border:"solid 2px #000"
               }}>{post.title}</h1>
           </div>
        </div>
    );
} 
// server (yes) , client (no)