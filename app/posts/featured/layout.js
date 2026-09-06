export default function({children})
{
    return(
        <div>
            <h1 style={{color:"#fff"}}>layout in featured</h1>
            <div  style={{
                position:"absolute",
                top:"100px",
                background:"blue",
                width:"95%",
                padding:"20px",
                margin:"10px",
                borderRadius:"10px"
            }}>
                {children}
            </div>
        </div>
    )
}