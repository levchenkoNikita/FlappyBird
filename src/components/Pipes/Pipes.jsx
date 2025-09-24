import PipesWrapper from "./PipesWrapper";
import { useMemo } from "react";

const Pipes = () => {

    const renderPipes = useMemo(() => {
        return [...Array.from({ length: 6 }, (_, index) => (index))];
    }, [])

    return (
        <div className="w-full h-full flex items-center gap-x-100">
            {
                renderPipes.map((element, index) => {
                    return <PipesWrapper key={element} index={index}/>
                })
            }
        </div>
    );
}

export default Pipes;