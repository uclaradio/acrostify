import "./ProfilePage.css";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./spotify.js";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spotify: new SpotifyWebApi(),
            authenticated: false,
            spotifyName: "",
            topArtists: [],
            topGenres: new Set(),
            topTracks: [],
            name: ""
        };
    }

    componentDidMount() {
        const token = getToken();
        this.state.spotify.setAccessToken(token);

        // There are multiple ways to fetch data from a user's Spotify profile
        // This is one such way, see below for more documentation
        // https://github.com/thelinmichael/spotify-web-api-node

        this.state.spotify.getMe().then(
            (me) => this.setState({ spotifyName: me.display_name }),
            (error) => console.log("Error loading profile data: ", error)
        );

        this.state.spotify
            .getMyTopArtists({
                limit: 50,
            })
            .then(
                (artistsData) => {
                    let artists = [];
                    let genres = new Set();
                    artistsData.items.forEach((artist) => {
                        artists.push(artist.name);

                        let artistGenres = artist.genres;
                        artistGenres.forEach(genre => genres.add(genre))
                    });

                    console.log(artists);
                    console.log(genres);

                    this.setState({
                        topArtists: artists,
                        topGenres: genres,
                    });
                },
                (error) => console.log("Error loading top artists: ", error)
            );

        this.state.spotify
            .getMyTopTracks()
            .then(
                (tracksData) => {
                    let tracks = [];
                    tracksData.items.forEach((track) => {
                        tracks.push(track.name);
                    });

                    console.log(tracks);

                    this.setState({
                        topTracks: tracks,
                        authenticated: true
                    });
                },
                (error) => console.log("Error loading top tracks: ", error)
            );
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        // If the user isn't fully authenticated, don't render anything yet
        // This shouldn't be the case for longer than a fraction of a second
        if (!this.state.authenticated) return null;

        // Log out by navigating back to the home page
        const logout = () => this.props.navigate("/");

        console.log(this.state.topGenres)

        return (
            <div className="name">
                <h3>Logged in as {this.state.spotifyName}</h3>

                {/*<table>*/}
                {/*    <thead>*/}
                {/*        <tr>*/}
                {/*            <th>Position</th>*/}
                {/*            <th>Artist</th>*/}
                {/*        </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*        {this.state.topArtists.map((artist, idx) => {*/}
                {/*            return (*/}
                {/*                <tr key={artist}>*/}
                {/*                    <td>{idx + 1}</td>*/}
                {/*                    <td>{artist}</td>*/}
                {/*                </tr>*/}
                {/*            );*/}
                {/*        })}*/}
                {/*    </tbody>*/}
                {/*</table>*/}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={event => event.preventDefault()} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <br/>

                <button onClick={logout}>Logout</button>
            </div>
        );
    }
}

export default ProfilePage;
