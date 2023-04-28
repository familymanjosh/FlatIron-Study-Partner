import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
    return (
        <div className="Home">
        <Parallax pages={5}>
            <ParallaxLayer
            offset={1}
            speed={1}
            style={{
                backgroundImage: `url("https://apod.nasa.gov/apod/image/2304/AlphaCamelopardis_s3100.png")`,
                backgroundSize: "cover",
            }}
            />

            <ParallaxLayer
            offset={2}
            speed={.5}
            style={{
                backgroundImage: `url("https://images.nasa.gov/details/PIA08653")`,
                backgroundSize: "cover",
            }}
            />
            
            <ParallaxLayer
            offset={3}
            speed={.5}
            style={{
                backgroundImage: `url("https://images.nasa.gov/details/PIA11796")`,
                backgroundSize: "cover",
            }}
            />
            <ParallaxLayer
            offset={4}
            speed={1}
            style={{
                backgroundImage: `url("https://images-assets.nasa.gov/image/PIA04221/PIA04221~thumb.jpg")`,
                backgroundSize: "cover",
            }}
            />
        </Parallax>
        <div className="Home-Content">
            <h1>Flatiron Study Partner</h1>
            <h3>Find a slecture for your Flatiron School journey</h3>
        </div>
    </div>
);
};

export default Home;
    