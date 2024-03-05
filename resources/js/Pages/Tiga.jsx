import { useEffect, useState } from "react";

const Tiga = () => {
    const [click, setClick] = useState(0);
    const [color, setColor] = useState("red");

    useEffect(() => {
        if (click % 2 === 0) {
            setColor("red");
        } else {
            setColor("blue");
        }
    }, [click]);

    return (
        <div>
            <h1>Halaman Tiga</h1>
            <p>Total Click: {click} </p>
            <button
                type="button"
                onClick={() => setClick(click + 1)}
                style={{ backgroundColor: color }}
            >
                Click me
            </button>
        </div>
    );
};

export default Tiga;
