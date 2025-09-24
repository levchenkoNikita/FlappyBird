import React, { useMemo } from "react";
import LineWrapper from "../Lines/LineWrapper";
import { useSelector } from "react-redux";

const Ground = React.memo(() => {

    const screenWidth = useSelector((state) => state.game.screenWidth);

    const QUANTITY_LINES = 14;
    const LINE_WIDTH = 8;
    
    const renderLines = useMemo(() => {
        return [...Array.from({ length: QUANTITY_LINES }, (_, index) => index)];
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
                    renderLines.map((el) => {
                        return <LineWrapper key={el} lineWidth={LINE_WIDTH} screenWidth={screenWidth}></LineWrapper>
                    })
                }
            </div>
        </div>
    )
});

export default Ground;