import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1>About Next.js 13</h1>
      <h3>The React Framework for the Web</h3>
      <p>
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack Web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </p>
      <br />
      <Link href="https://nextjs.org/" className="card">
        Next.js 13.4.3
      </Link>
    </div>
  )
}
export default AboutPage
