import { forwardRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Bird = forwardRef(({}, ref) => {

    const birdWidth = `w-[${useSelector((state) => state.bird.width)}px]`
    // const birdHeight = `aspect-[1]`;
    const birdHeight = `h-[${useSelector((state) => state.bird.height)}px]`

    // bg-[url('../../assets/Birds/BirdWingsCenter.png')] ${birdWidth} ${birdHeight}
    // ${birdWidth} ${birdHeight}
// bg-[url('/src/assets/Birds/BirdWingsCenter.png')]
    return(
        <div ref={ref}
            className={`
                w-[32px] h-[24px] absolute top-[50%] left-[49%] translate-x-[-50%]
                bg-[url('/src/assets/Birds/BirdWingsCenter.png')] bg-center bg-cover bg-no-repeat duration-50
            `}>
            
        </div>
    );
});

export default Bird;