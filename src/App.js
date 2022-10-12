import { useState } from "react";

export default function App() {

    const [light, setLight] = useState(false)

    const onOrOff = light ? 'lit' : 'dark'

    return (
        <div className={`room ${onOrOff}`}>
            <button onClick={() => setLight(!light)} >The Room is {onOrOff}</ button>
        </div>
    );
};



