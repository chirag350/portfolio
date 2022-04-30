import React from 'react';

class PercentageBar extends React.Component {
    render() {
        const percentage = parseInt(this.props.width);
        return (
            <p>{percentage >= 65 ? "Fluent" : "Still Learning"}</p>
        )
    }
}

export default PercentageBar;
