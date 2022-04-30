import { animated, Spring } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles =>
          <animated.div style={styles}>
            <Parallax pages={3} className="text-white bg-background backdrop-blur-xl min-h-screen">
              <ParallaxLayer offset={0} speed={0.8}>
                <div className="p-layer">
                  <h1 className="text-5xl mb-6">Hi! I&apos;m Chirag! </h1>
                  <p>A full stack developer from India. I&apos;m currently a student.</p>
                  <h4 className="text-xl mt-4">Scroll down to read more</h4>
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.8}>
                <div className="p-layer">
                  <h1 className="text-5xl">My Skills</h1>
                  <Skills />
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.8}>
                <div className="p-layer">
                  <h1 className="text-5xl">Contact me!</h1>
                  <Contact />
                  <footer className="absolute bottom-0 mb-6">
                    <p className="text-center text-lg text-gray-300">
                      Made with <span className="text-red-500">❤️</span> by Chirag
                    </p>
                  </footer>
                </div>
              </ParallaxLayer>
            </Parallax>
          </animated.div>
        }
      </Spring>
    </>
  )
}
