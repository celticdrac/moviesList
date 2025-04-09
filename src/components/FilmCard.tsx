import { useEffect, useRef } from 'react';

const FilmCard = ({ tabIndex, poster, title, height, isFocused, handleFocus }: 
    { tabIndex: number; poster: string; title: string; height: number, isFocused: boolean, handleFocus: any }) => {
    
    const itemRef = useRef<HTMLButtonElement>(null);


    useEffect(() => {
        if(isFocused && itemRef.current) {
            itemRef.current.focus();
            itemRef.current.scrollIntoView({ inline: "start", behavior: 'smooth' });
        }
    }, [isFocused]);

    const proportionHeight = 4;
    const proportionWidth = 3;
    const width = (proportionWidth * height) / proportionHeight;

    return(
        <button ref={itemRef} autoFocus={tabIndex == 0} tabIndex={tabIndex} onFocus={() => handleFocus(tabIndex)}>
            <li className='card-container'>
                <img src={poster} height={height} width={width} loading="lazy"/>
                <div className='title'>{title}</div>
            </li>
        </button>
    );
};

export default FilmCard;