import React, { useEffect, useRef } from 'react';
import Line from './Line';
import { useSelector } from 'react-redux';

const LineWrapper = React.memo(({ lineWidth, screenWidth }) => {

    let animation;
    const elementRef = useRef(null);
    const rightCorner = useRef(0);
    const positionRight = useRef(0);
    const offset = useRef(0);
    const currentOffset = useRef(0);
    const speed = useSelector((state) => state.game.speed);

    function animate() {
        elementRef.current.style.transform = `translateX(${currentOffset.current}px)`;

        if (positionRight.current <= 0) {
            positionRight.current = rightCorner.current + offset.current;
            currentOffset.current = offset.current;
        }
        else {
            if (positionRight.current <= speed) {
                currentOffset.current -= positionRight.current;
                positionRight.current -= positionRight.current;
            }
            else {
                positionRight.current -= speed;
                currentOffset.current -= speed;
            }
        }

        animation = requestAnimationFrame(animate);

    }

    useEffect(() => {
        rightCorner.current = elementRef.current.getBoundingClientRect().right;
        positionRight.current = rightCorner.current;
        offset.current = screenWidth - rightCorner.current + elementRef.current.clientWidth * 1.5;

        // animation = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animation);
        }
    }, [])

    return (
        <div ref={elementRef}
            style={{ minWidth: `${lineWidth}%` }}
            className={`
                h-full bg-transparent
            `}>
            <Line></Line>
        </div>
    );
});

export default LineWrapper;