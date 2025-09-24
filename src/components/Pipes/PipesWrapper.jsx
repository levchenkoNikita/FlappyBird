import React, { useRef, useEffect } from "react";
import PipeUp from "./PipeUp";
import PipeDown from "./PipeDown";
import SpaceBetweenPipes from "./SpaceBetweenPipes";
import { useSelector } from "react-redux";

const PipesWrapper = React.memo(({ index }) => {

    let animation;
    const currentOffset = useRef();
    const rightCorner = useRef();
    const rightPosition = useRef();
    const elementRef = useRef();
    const offset = useRef();
    const speed = useSelector((state) => state.game.speed);
    const screenWidth = useSelector((state) => (state.game.screenWidth));

    function animate() {
        elementRef.current.style.transform = `translateX(${currentOffset.current}px)`;

        if (rightPosition.current <= 0) {
            rightPosition.current = rightCorner.current + offset.current;
            currentOffset.current = offset.current;
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
        offset.current = screenWidth - rightCorner.current + elementRef.current.clientWidth + index * 400;
        rightPosition.current = rightCorner.current + offset.current;
        currentOffset.current = offset.current;

        // animation = requestAnimationFrame(animate);

        return cancelAnimationFrame(animate);
    }, []);

    return (
        <div ref={elementRef} className={`w-full h-full flex justify-center`}>
            <div className="h-full w-[52px]">
                <PipeUp />
                <SpaceBetweenPipes />
                <PipeDown />
            </div>
        </div>
    );
});

export default PipesWrapper;