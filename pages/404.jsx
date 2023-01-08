import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }, [])
    

  return (
    <div className='not-found'>
        <h1>404</h1>
        <h2>The page was not found
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </h2>
    </div>
  )
}

export default NotFound