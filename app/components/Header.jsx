import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Next.js 13</Link>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/courses">Course</Link>
          <Link href="/code/repos">Github</Link>
        </div>
      </div>
    </header>
  )
}
export default Header
