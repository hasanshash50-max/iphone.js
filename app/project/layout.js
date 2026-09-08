import Link from "next/link"
import './project.css'
export default function({children})
{
    return(
        <div>
            <nav>
                <Link href="/project">Home</Link>
                <Link href="/project/post">post</Link>
                <Link href="/project/iphone">iphone</Link>
            </nav>
            {children}
        </div>
    )
}