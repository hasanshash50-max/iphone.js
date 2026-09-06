export const metadata = {
    title: "Page Posts"
}

export default function ({children}) {
    return (
        <div>
            <div 
             style={{background:"#fff",
                color:"#000",
                padding:"10px",
                width:"90%",
                position:"absolute",
                top:"100px",
                margin:"15px",
                borderRadius:"10px",
                marginLeft:"30px"
            }}>
               {children}
            </div>
        </div>
    )
}