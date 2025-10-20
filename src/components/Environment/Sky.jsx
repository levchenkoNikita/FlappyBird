import Pipes from "../Pipes/Pipes";
import Bird from "../Birds/Bird";
import { forwardRef } from "react";

const Sky = forwardRef(({}, ref) => {

    return (
        <div className={`
            w-screen h-[80vh] relative overflow-hidden
            bg-[url('/src/assets/Overlays/BackgroundDay.png')] bg-[#4ec0ca] bg-repeat-x bg-bottom 
        `}>
            <Bird ref={ref}/>
            <Pipes />
        </div>
    )
});

export default Sky;