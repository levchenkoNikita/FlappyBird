const PipeUp = () => { // Менять только значение параметра height!
    return (
        <div className={`h-[40%]`}> 
            <img
                src="/src/assets/PipesImg/PipeUp/PipeLong.png"
                alt="pipe ground"
                className={`
                    h-full
                `}
                width="52"
                height="204"
                loading="lazy"
            />
            <img
                src="/src/assets/PipesImg/PipeUp/PipeSmall.png"
                alt="pipe ground"
                className={`
                    
                `}
                width="52"
                height="24"
                loading="lazy"
            />
        </div>
    );
};

export default PipeUp;