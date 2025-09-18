import React, { useMemo } from "react";
import LineWrapper from "../Lines/LineWrapper";

const Ground = React.memo(() => {
    
    const screenWidth = useMemo(() => {
        return window.innerWidth;
    }, []);
    const quantityLines = useMemo(() => {
        return 14;
    }, []);
    const lineWidth = useMemo(() => {
        return 8;
    }, []);
    const renderLines = useMemo(() => {
        return [...Array.from({ length: quantityLines }, (_, index) => index)];
    }, []);

    return (
        <div className={`
            w-screen h-[20vh] overflow-hidden
            bg-[#ded895] relative
        `} >
            <div className={`
                w-full h-[20%] bg-[#9ce659] flex items-center
            `}>
                {
                    renderLines.map((el, index) => {
                        if(index === 0) {
                            return <LineWrapper key={el} lineWidth={lineWidth} isFirst={true} screenWidth={screenWidth}></LineWrapper>
                        }
                        return <LineWrapper key={el} lineWidth={lineWidth} isFirst={false} screenWidth={screenWidth}></LineWrapper>
                    })
                }
            </div>
        </div>
    )
});

export default Ground;