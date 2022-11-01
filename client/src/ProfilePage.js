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
            displayName: "",
            topArtists: [],
        };
    }

    componentDidMount() {
        const token = getToken();
        this.state.spotify.setAccessToken(token);

        // There are multiple ways to fetch data from a user's Spotify profile
        // This is one such way, see below for more documentation
        // https://github.com/thelinmichael/spotify-web-api-node

        this.state.spotify.getMe().then(
            (me) => this.setState({ displayName: me.display_name }),
            (error) => console.log("Error loading profile data: ", error)
        );

        this.state.spotify
            .getMyTopArtists({
                limit: 10,
            })
            .then(
                (artistsData) => {
                    let artists = [];
                    artistsData.items.forEach((artist) =>
                        artists.push(artist.name)
                    );

                    this.setState({
                        topArtists: artists,
                        authenticated: true,
                    });
                },
                (error) => console.log("Error loading top artists: ", error)
            );
    }

    render() {
        // If the user isn't fully authenticated, don't render anything yet
        // This shouldn't be the case for longer than a fraction of a second
        if (!this.state.authenticated) return null;

        // Log out by navigating back to the home page
        const logout = () => this.props.navigate("/");

        return (
            <div className="profile">
                <h3>Logged in as {this.state.displayName}</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.topArtists.map((artist, idx) => {
                            return (
                                <tr key={artist}>
                                    <td>{idx + 1}</td>
                                    <td>{artist}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <br />

                <button onClick={logout}>Logout</button>
            </div>
        );
    }
}

export default ProfilePage;
