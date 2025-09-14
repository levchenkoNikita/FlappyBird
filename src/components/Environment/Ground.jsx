import { useMemo } from "react";

const Ground = () => {
    const screenWidth = document.documentElement.clientWidth;
    const quantityLines = 21;
    const lineWidth = screenWidth / quantityLines;

    const renderLines = useMemo(() => {
        return [...Array.from({ length: quantityLines }, (_, index) => index)];
    }, []);

    return (
        <div className={`
            w-screen h-[20vh]
            bg-[#ded895] relative
        `} >
            <div className={`
                w-full h-[24%] bg-[#9ce659] flex items-center justify-center  
            `}>
                {
                    renderLines.map((el) => {
                        return (
                            <div
                                key={el}
                                style={{width: `${lineWidth}px`}}
                                className={`
                                    h-full bg-[#73bf2e]
                                `}>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Ground;