import Sky from './Environment/Sky';
import Ground from './Environment/Ground';
import { useEffect, useRef } from 'react';

const Game = () => {

    const animate = useRef();
    const animateWings = useRef();
    const delayAnimateWings = useRef(0);
    const currentRef = useRef();
    const birdRef = useRef();
    const jumpRef = useRef();
    const birdRotate = useRef(0);
    const isStopping = useRef(false);
    const isPending = useRef(false);
    const velosity = useRef(40);
    const count = useRef(1);

    function handleClick() {
        count.current -= velosity.current;
        birdRotate.current = -60;
        isStopping.current = true;
        isPending.current = false;
    }

    function handleJump() {
        if(jumpRef.current) {
            clearTimeout(jumpRef.current);
        }

        jumpRef.current = setTimeout(() => {
            isStopping.current = false;
            isPending.current = false;
        }, 300);
    }

    function wingsBirdDown() {
        birdRef.current.style.backgroundImage = "url('/src/assets/Birds/BirdWingsDown.png')";
        return wingsBirdUp;
    }

    function wingsBirdCenter() {
        birdRef.current.style.backgroundImage = "url('/src/assets/Birds/BirdWingsCenter.png')";
        return wingsBirdDown;
    }

    function wingsBirdUp() {
        birdRef.current.style.backgroundImage = "url('/src/assets/Birds/BirdWingsUp.png')";
        return wingsBirdCenter;
    }

    function animation() {
        birdRef.current.style.transform = `translateY(${count.current}px) rotate(${birdRotate.current}deg)`;

        if(delayAnimateWings.current == 10) {
            animateWings.current = animateWings.current();
            delayAnimateWings.current = 0;
        }
        else {
            delayAnimateWings.current += 2;
        }
        
        if(birdRotate.current != 60) {
            birdRotate.current += 3;
        }

        if(!isStopping.current) {
            count.current += 5;
        } else if(!isPending.current){
            isPending.current = true;
            handleJump();
        }

        animate.current = requestAnimationFrame(animation);
    }

    useEffect(() => {
        animateWings.current = wingsBirdCenter;
        birdRef.current.style.backgroundImage = "url('/src/assets/Birds/BirdWingsUp.png')";

        currentRef.current.addEventListener('click', handleClick);
        
        animate.current = requestAnimationFrame(animation); //

        return () => {
            currentRef.current.removeEventListener('click', handleClick);
            cancelAnimationFrame(animate.current);
        };
    }, []);

    return (
        <div ref={currentRef}>
            <Sky ref={birdRef}/>
            <Ground />
        </div>
    )
};

export default Game;