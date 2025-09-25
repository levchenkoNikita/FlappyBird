import React, { useRef, useEffect } from "react";
import PipeUp from "./PipeUp";
import PipeDown from "./PipeDown";
import SpaceBetweenPipes from "./SpaceBetweenPipes";
import { useSelector } from "react-redux";

const PipesWrapper = React.memo(({ index, pipeWidth, pipeQuantity }) => {

    let animation;
    let heightPipeUp = Math.floor(Math.random() * (75 - 10 + 1)) + 10; // от 10 до 75
    const currentOffset = useRef();
    const rightCorner = useRef();
    const rightPosition = useRef();
    const elementRef = useRef();
    const initialOffset = useRef();
    const offset = useRef();
    const speed = useSelector((state) => state.game.speed);
    const screenWidth = useSelector((state) => (state.game.screenWidth));

    function animate() {
        elementRef.current.style.transform = `translateX(${currentOffset.current}px)`;

        if (rightPosition.current <= 0) {
            rightPosition.current = rightCorner.current + offset.current;
            currentOffset.current = offset.current;
            heightPipeUp = Math.floor(Math.random() * (75 - 10 + 1)) + 10;
        }
        else {

            if (rightPosition.current <= speed) {
                currentOffset.current -= rightPosition.current;
                rightPosition.current -= rightPosition.current;
            }
            else {
                rightPosition.current -= speed;
                currentOffset.current -= speed;
            }

        }

        animation = requestAnimationFrame(animate);
    }

    useEffect(() => {
        rightCorner.current = elementRef.current.getBoundingClientRect().right;
        initialOffset.current = elementRef.current.clientWidth * 6;
        offset.current = elementRef.current.clientWidth * (pipeQuantity - index - 1);
        rightPosition.current = rightCorner.current + initialOffset.current;
        currentOffset.current = initialOffset.current;
        
        animation = requestAnimationFrame(animate);

        return cancelAnimationFrame(animate);
    }, []);

    return (
        <div ref={elementRef} style={{minWidth: `${pipeWidth}%`}} className={`h-full flex justify-center`}>
            <div className="h-full w-[52px]">
                <PipeUp height={heightPipeUp}/>
                <SpaceBetweenPipes />
                <PipeDown />
            </div>
        </div>
    );
});

export default PipesWrapper;