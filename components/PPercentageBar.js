import React from 'react';

class PPercentageBar extends React.Component {
    render() {
        const percentage = this.props.width
        return (
            <div className="percentage-bar w-full bg-[#858c93] rounded-md mx-6">
                <div className="percentage-bar-child bg-[#6c737a] rounded-md" style={{ width: percentage }}>
                    {percentage}
                </div>
            </div>
        )
    }
}

export default PPercentageBar;
