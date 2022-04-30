import React from 'react';
import { SiDiscord, SiMaildotru } from 'react-icons/si'
import ReactTooltip from 'react-tooltip';

class Contact extends React.Component {
    render() {
        return (
            <div className="skills flex text-center justify-center items-center mt-16 w-11/12 sm:w-2/6">
                <div className="bg-background-table p-6 rounded-lg w-full text-center items-center">
                    <ReactTooltip place="right" type="dark" effect="solid" />
                    <div className="contact-item">
                        <SiDiscord data-tip="My discord tag: Chirag.#5568" size={64} className="text-[#5865F2] hover:text-[#FFFFFF] hover:transition-all hover:duration-500 hover:cursor-pointer" />
                    </div>
                    <div className="contact-item">
                        <SiMaildotru data-tip="My email: doge@chiragdev.xyz" size={64} className="text-[#FFFFFF] hover:transition-all hover:duration-500 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
