

export default function Home() {
  return (
    <>
      <h1>Welcome to Chirag's portfolio</h1>
      <div className="container">
        <img src="/favicon.png" className="avatar" alt="Avatar" width="100" height="100" />
        <h2>Hello There. I'm Chirag!</h2>
        <p>Hi! I'm Chirag, A full stack developer from India. I'm currently a student and I specialize in Node.js, Bash, React, Next.js. <br /><br /> Connect with me using the following links:</p>
        <div className="social-links">
          <div className="socials">
            <a href="https://github.com/chirag350"><img src="/github.png" width="50" height="50" className="social" /></a>
            <a href="https://discord.gg/BNcbMACprP"><img src="/discord.png" width="50" height="50" className="social" /></a>
            <a href="https://steamcommunity.com/id/chiraglamba5/"><img src="/steam.png" width="50" height="50" className="social" /></a>
          </div>
        </div>
      </div>
    </>
  )
}
