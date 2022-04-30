import React from 'react';
import PPercentageBar from './PPercentageBar'

class PSkillItem extends React.Component {
    render() {
        return (
            <div className="skill-item">
                <div className="skill-item-child">
                    {this.props.icon}
                </div>
                <div className="skill-item-child">
                    <p>{this.props.name}</p>
                </div>
                <div className="skill-item-child">
                    <PPercentageBar width={this.props.percentage} />
                </div>
            </div>
        )
    }
}

export default PSkillItem;
