import "./DisplayPage.css";
import React from "react";

class DisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    acrostify() {
        const list = []
        const topArtists = [...this.props.topArtists]

        let name = this.props.name;
        for (let i = 0; i < name.length; i++) {
            let c = name.charAt(i).toLowerCase();

            let found = topArtists.find(artist => artist.toLowerCase().startsWith(c));

            if (found === undefined)
                found = topArtists.find(artist => artist.toLowerCase().includes(c));

            if (found !== undefined) {
                list.push(found);
                topArtists.splice(topArtists.indexOf(found), 1);
                continue;
            }

            list.push(c);
        }

        return list;
    }

    render() {
        let acrostic = this.acrostify();

        console.log(acrostic);

        return (
            <div>
                {this.props.name}
                {acrostic.map((line, i) => <div key={i}>{line}</div>)}
            </div>
        )
    }
}

export default DisplayPage;