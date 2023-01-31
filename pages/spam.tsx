import Link from 'next/link'
import { Fragment } from 'react'

const AboutPage = () => (
  <Fragment>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Fragment>
)

export default AboutPage
