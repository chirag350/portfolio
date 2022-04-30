import React from 'react';
import { SiJavascript, SiGnubash, SiReact, SiGo } from 'react-icons/si'
import SkillItem from './SkillItem'
// Will be used later.
//import PSkillItem from './PSkillItem';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills flex text-center justify-center items-center mt-16 w-11/12 sm:w-2/3">
                <div className="grid grid-rows-4 bg-background-table p-6 rounded-lg w-full text-center items-center">
                    <SkillItem name="JavaScript" icon={<SiJavascript size={32} className="text-yellow-500" />} percentage="85%" />
                    <SkillItem name="Bash" icon={<SiGnubash size={32} className="text-green-500" />} percentage="91%" />
                    <SkillItem name="React" icon={<SiReact size={32} className="text-[#61DBFB]" />} percentage="75%" />
                    <SkillItem name="Go" icon={<SiGo size={48} className="text-[#00A5D2]" />} percentage="35%" />
                </div>
            </div>
        )
    }
}

export default Skills;
