import Pipes from "../Pipes/Pipes";
import Bird from "../Birds/Bird";

const Sky = () => {
    return (
        <div className={`
            w-screen h-[80vh] relative overflow-hidden
            bg-[url('/src/assets/Overlays/BackgroundDay.png')] bg-[#4ec0ca] bg-repeat-x bg-bottom 
        `} >
            <Bird />
            <Pipes />
        </div>
    )
};

export default Sky;