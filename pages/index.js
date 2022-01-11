import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1>Welcome to Chirag's portfolio</h1>
    <div className="container">
      <Image src="/avatar.png" className="avatar" alt="Avatar" width="100" height="100"/>
      <h2>Hello There. I'm Chirag!</h2>
      <p>Hi! I'm Chirag, A full stack developer from India. I'm currently a student and I specialize in Node.js, Bash, React, Next.js. <br /><br /> Connect with me using the following links:</p>
      <div className="social-links">
        <ul className="socials">
          <a href="https://github.com/chirag350"><li><Image src="/github.png" width="80" height="80" className="social" /></li></a>
          <a href="https://discord.gg/BNcbMACprP"><li><Image src="/discord.png" width="80" height="80" className="social" /></li></a>
        </ul>
      </div>
    </div>
    </>
  )
}
