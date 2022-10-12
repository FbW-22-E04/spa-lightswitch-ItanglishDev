import { useState } from "react";

export default function App() {

    const [light, setLight] = useState('.lit')

    return (
        <div>
            <LightSwitch />
        </div>
    );
};

function switchTheLight() {

    <div className="room dark">
        <button onClick={switchTheLight}>The Room is dark</button>
    </div>
}

function LightSwitch() {


    return (
        <div className="room lit">
            <button onClick={switchTheLight}>The Room is lit</button>
        </div>


    );
}
