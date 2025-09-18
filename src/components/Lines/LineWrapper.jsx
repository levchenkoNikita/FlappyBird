import React, { useEffect, useRef } from 'react';
import Line from './Line';

const LineWrapper = React.memo(({ lineWidth, screenWidth, isFirst }) => {

    const currentRef = useRef(null);
    let animation;
    const rightCorner = useRef(0);
    const leftCorner = useRef(0);
    const positionRight = useRef(0);
    const positionLeft = useRef(0);
    const offset = useRef(0);
    const currentOffset = useRef(0);
    const speed = 10;

    function animate() {
        currentRef.current.style.transform = `translateX(${currentOffset.current}px)`;

        if (positionRight.current <= 0) {
            positionRight.current = rightCorner.current + offset.current;
            positionLeft.current = leftCorner.current + offset.current;
            currentOffset.current = offset.current;
        }
        else {
            if (positionRight.current <= 10) {
                positionRight.current -= positionRight.current;
                currentOffset.current -= positionRight.current;
            }
            else {
                positionRight.current -= speed;
                currentOffset.current -= speed;
            }
        }

        animation = requestAnimationFrame(animate);

    }

    useEffect(() => {
        rightCorner.current = currentRef.current.getBoundingClientRect().right;
        leftCorner.current = currentRef.current.getBoundingClientRect().left;
        positionRight.current = rightCorner.current;
        positionLeft.current = leftCorner.current;
        offset.current = screenWidth - rightCorner.current + currentRef.current.clientWidth * 1.5;

        animation = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animation);
        }
    }, [])

    return (
        <div ref={currentRef}
            style={{ minWidth: `${lineWidth}%` }}
            className={`
                h-full bg-transparent
            `}>
            <Line></Line>
        </div>
    );
});

export default LineWrapper;