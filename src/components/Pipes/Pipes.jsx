import { useSelector } from "react-redux";
import PipesWrapper from "./PipesWrapper";
import { useMemo } from "react";

const Pipes = () => {

    const screenWidth = useSelector((state) => state.game.screenWidth);
    const pipeQuantity = useSelector((state) => state.pipe.pipeQuantity);
    const pipeWidth = useSelector((state) => state.pipe.pipeWidth);

    const renderPipes = useMemo(() => {
        return [...Array.from({ length: pipeQuantity }, (_, index) => (index))];
    }, []);

    return (
        <div className="w-full h-full flex items-center">
            {
                renderPipes.map((element) => {
                    return <PipesWrapper key={element} index={element} pipeWidth={pipeWidth} pipeQuantity={pipeQuantity}/>
                })
            }
        </div>
    );
}

export default Pipes;