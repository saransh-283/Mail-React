import Link from 'next/link'
import { Fragment } from 'react'

const IndexPage = () => (
  <Fragment>
    <h1 className='text-red-500 text-center'>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Fragment>
)

export default IndexPage
