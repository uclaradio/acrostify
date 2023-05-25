import "./HomePage.css";
import { useEffect } from "react";
import { loginUrl } from "./spotify.js";
import "./App.css";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import radio_icon from "./images/radio_icon.gif"

function HomePage() {
    useEffect(() => window.localStorage.removeItem("token"), []);

    return (

        <div>
            <Grid container spacing={2} >
                <Grid item xs={6}style={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center"}}>
                     <Typography variant="h1" component="h1" style={{ fontFamily: "MENTRA", color: "#000000", textAlign: "center" }}>
                          <Box >NAMEIFY</Box>
                     </Typography>
                     <Typography variant="h2">
                        <Box component="div" p={1} border={4} borderColor="black" borderRadius={20} textAlign="center" width="100%" style ={{paddingTop:".1rem", paddingBottom: "1.5rem"}}>

                                     <a href={loginUrl} style={{fontWeight: "bold", fontSize: "1.5rem", color: "black"}}>Login with Spotify</a>

                         </Box>
                     </Typography>
                </Grid>
            <Grid item xs={6}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                     <img src={radio_icon} alt="Music note" style={{ width: "100%" }} />
                </div>
             </Grid>
             <Grid item xs={6}>
                <div style={{ position: "absolute", bottom: "0", left: "0", width: "200px" }}>
                    <img src="https://i.imgur.com/qsFvV0W.png" alt="UCLA RADIO" style={{ width: "100%" }} />
                 </div>
            </Grid>

         </Grid>
    </div>
    );
}

export default HomePage;
