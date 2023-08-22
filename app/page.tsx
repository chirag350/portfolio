"use client"

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import { useInViewport } from 'react-in-viewport';
import { FaGithub, FaTwitter, FaDiscord, FaCloudflare, FaEnvelope } from "react-icons/fa";
import { SiIcons8 } from 'react-icons/si'
import TextTransition, { presets } from "react-text-transition";

export default function Page() {
    const isVisibleRef = React.useRef<HTMLHeadingElement>(null);
    const { inViewport } = useInViewport(isVisibleRef);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const isInvalid = name === "" || email === "" || message === "" || !email.includes("@");

    return (
        <div className="min-h-screen flex flex-col bg-gray-800">
            <section className={`fixed top-0 left-0 w-full bg-transparent flex justify-between py-3 lg:py-4 2xl:py-6 px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-24 backdrop-blur-sm z-10`}>
                <h1>
                    <TextTransition springConfig={presets.default} direction="down"><a href="#" className="text-2xl md:text-3xl xl:text-4xl font-['Tilt_Neon'] font-black" style={{ color: inViewport ? "#4ade80" : "#0ea5e9" }}>{!inViewport ? "Chirag L." : "Welcome"}</a></TextTransition>
                </h1>
                <div className="flex items-center">
                    <a href="https://github.com/chirag350" aria-label="Github" target="_blank" className="text-2xl md:text-3xl xl:text-4xl font-['Tilt_Neon'] font-black mx-2 transition-colors duration-300" style={{ color: inViewport ? "#4ade80" : "#0ea5e9" }}><FaGithub /></a>
                    <a href="https://twitter.com/chirag_lol" aria-label="Twitter" target="_blank" className="text-2xl md:text-3xl xl:text-4xl font-['Tilt_Neon'] font-black mx-2 transition-colors duration-300" style={{ color: inViewport ? "#4ade80" : "#0ea5e9" }}><FaTwitter /></a>
                    <a href="https://discord.com/users/611165590744203285" aria-label="Discord" target="_blank" className="text-2xl md:text-3xl xl:text-4xl font-['Tilt_Neon'] font-black mx-2 transition-colors duration-300" style={{ color: inViewport ? "#4ade80" : "#0ea5e9" }}><FaDiscord /></a>
                </div>
            </section>
            <section className="items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 hero flex w-full flex-col md:flex-row h-screen">
                <Reveal triggerOnce={true} className="mx-6 md:mx-8 xl:mx-12 md:my-0 my-6">
                    <div className="text-center">
                        <h2 className="text-xl md:text-2xl 2xl:text-3xl text-emerald-400 font-['Space_Grotesk'] text-left">Hello, my name is</h2>
                        <motion.div whileTap={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 180, 360]
                        }}>
                            <h1 className="select-none text-6xl md:text-7xl xl:text-9xl text-emerald-500 font-black font-['Montserrat_Alternates'] drop-shadow-2xl" ref={isVisibleRef}>Chirag L.</h1>
                        </motion.div>
                    </div>
                </Reveal>
                <Reveal triggerOnce={true} className="mx-6 md:mx-8 xl:mx-12 md:my-0 my-6 md:w-1/3">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl xl:text-6xl text-red-500 font-black font-['Montserrat_Alternates'] mr-8 drop-shadow-2xl">About me</h2>
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-red-600 font-['Tilt_Neon'] text-left">I am a fullstack developer from India who absolutely loves Next.js and as you expected, this is made with Next.js</p>
                    </div>
                </Reveal>
            </section>
            <section className="items-center justify-center hero flex w-full flex-col">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl xl:text-6xl text-sky-600 font-['Montserrat_Alternates'] text-center my-8">What I use</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 p-4">
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/javascript.png" className="w-24 h-24 md:h-40 md:w-40" alt="javascript logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">JavaScript</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/nodejs.png" className="w-24 h-24 md:h-40 md:w-40" alt="nodejs logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">Node.JS</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/typescript.png" className="w-24 h-24 md:h-40 md:w-40" alt="typescript logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">TypeScript</h3>
                    </div>
                    <div className="grid-item">
                        <img src="/react.webp" className="w-24 h-24 md:h-40 md:w-40" alt="reactjs logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">React.js</h3>
                    </div>
                    <div className="grid-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 md:h-40 md:w-40 text-white" fill="white" viewBox="0 0 394 80"><path d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033Zm-112.867 0V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628Zm34.268.033h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066Zm18.28 56.649-8.921-11.092-27.224 33.81h17.865l18.28-22.718Z" /><path fillRule="evenodd" d="M80.907 79.339 17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1Z" clipRule="evenodd" /><path d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482Zm23.233-33.41h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24Zm30.851 9.089c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79a4 4 0 0 0 1.319 1.282 8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848Z" /></svg>
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">Next.js</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/tailwindcss.png" className="w-24 h-24 md:h-40 md:w-40" alt="tailwind logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">Tailwind</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/golang.png" className="w-24 h-24 md:h-40 md:w-40" alt="go lang logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon']">Go</h3>
                    </div>
                    <div className="grid-item">
                        <img src="https://img.icons8.com/color/128/000000/bash.png" className="w-24 h-24 md:h-40 md:w-40 -mt-1" alt="bash logo" />
                        <h3 className="text-xl text-sky-400 font-['Tilt_Neon'] mt-1">Bash</h3>
                    </div>
                </div>
            </section>
            <section className="items-center justify-center hero flex w-full flex-col my-24">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl xl:text-6xl text-red-500 font-['Montserrat_Alternates'] text-right my-8">Contact me</h2>
                </div>
                <div className="flex items-center justify-center m-4 p-6 bg-gray-900 text-red-500 text-center flex-col md:flex-row rounded-md mx-2">
                    <div className="md:w-1/2 my-2 md:mx-4">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl text-left font-['Montserrat_Alternates']">Get in touch</h2>
                        <p className="text-lg text-left">Feel free to get in touch on the following platforms or via the form.</p>
                        <div className="flex flex-col ">
                            <div className="flex flex-row items-center text-left ml-2 my-2 text-[#5865F2]">
                                <FaDiscord className="h-16 w-16" />
                                <p className="text-2xl text-left ml-4">@chiraglol</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 my-2 md:mx-4">
                        <div className="flex flex-col">
                            <div className="flex flex-col my-2">
                                <label htmlFor="name" className="text-lg text-left">Name</label>
                                <input type="text" name="name" id="name" className="border-2 border-gray-800 rounded-md bg-gray-700 text-white p-2" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="email" className="text-lg text-left">Email</label>
                                <input type="email" name="email" id="email" className="border-2 border-gray-800 rounded-md bg-gray-700 text-white p-2" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="message" className="text-lg text-left">Message</label>
                                <textarea name="message" id="message" className="border-2 border-gray-800 rounded-md bg-gray-700 text-white p-2" onChange={e => setMessage(e.target.value)} />
                            </div>
                            <button onClick={() => {
                                window.location.href = "mailto:doge@chiragdev.xyz?subject=Contact%20from%20chiragdev.xyz&body=Name:%20" + name + "%0D%0AEmail:%20" + email + "%0D%0AMessage:%20" + message
                            }} disabled={isInvalid} className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-2 rounded-md mt-2 disabled:cursor-not-allowed transition-colors duration-300 disabled:from-red-500 disabled:to-red-600">Send</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full border-t p-2 text-center drop-shadow-md shadow-md bg-gradient-to-b from-gray-800 to-gray-900">
                <p className="text-white my-1">Copyright &copy; Chirag L. All rights and wrongs reserved</p>
                <div className="flex flex-row">
                    <p className="text-orange-500">Powered by <a href="https://pages.cloudflare.com" aria-label="cloudflare pages"><FaCloudflare className="inline-block h-6 w-6" /></a></p> <p className="text-white mx-2">and</p>
                    <p className="text-[#1FB141]">Icons by <a href="https://icons8.com" aria-label="icons8"><SiIcons8 className="inline-block h-6 w-6" /></a></p>
                </div>
            </footer>

        </div>
    );
}