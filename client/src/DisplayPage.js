import "./DisplayPage.css";
import React from "react";

class DisplayPage extends React.Component {
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

        let artist = (acrostic, i, letter, prefix) => {
            const line = acrostic[i];
            const letterIndex = line.toLowerCase().indexOf(letter.toLowerCase());
            const part = prefix ? line.substring(0, letterIndex) : line.substring(letterIndex + 1);
            return part.length <= 0 ? <></> : <span className="artist" style={{ "--i": i }}>{part}</span>;
        }

        return (
            <div style={{ maxWidth: "80vw" }}>
                {this.props.name.split("").map((letter, i) =>
                    <div className="nameLine" key={i}>
                        {artist(acrostic, i, letter, true)}
                        <span className="letter" style={{ "--i": i }}>{letter}</span>
                        {artist(acrostic, i, letter, false)}
                    </div>
                )}
            </div>
        )
    }


}

export default DisplayPage;