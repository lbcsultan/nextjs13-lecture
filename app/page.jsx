import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Next.js 13 Crash Course</h1>
      <p>File-based routing</p>
      <p>Catch-all routing</p>
      <p>Global CSS</p>
      <p>Course information with search function - backend functions </p>
      <p>Github repositories - using fetch api </p>
      <br />
      <h2>Github API</h2>
      <p className="links">
        <a href="https://docs.github.com/ko/rest/overview/endpoints-available-for-github-apps?apiVersion=2022-11-28">
          Github Docs REST API
        </a>
      </p>
      <p>https://api.github.com/users/ID</p>
      <p>https://api.github.com/users/ID/repos</p>
      <p>https://api.github.com/repos/ID/NAME </p>
      <p>https://api.github.com/repos/ID/NAME/contents/ - not an array</p>
    </>
  )
}
