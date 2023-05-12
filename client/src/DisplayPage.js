import "./DisplayPage.css";
import React from "react";

class DisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default DisplayPage;