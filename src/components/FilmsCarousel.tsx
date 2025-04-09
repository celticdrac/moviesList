import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilmCard from './FilmCard';
import { Film } from '../data/interfaces';
import { incrementIndex, decrementIndex, setFocus, setMax } from '../redux/focus/focusSlice';
import { RootState, AppDispatch } from '../redux/store';


const FilmsCarousel = ({ items = [], height = 200 }: {items: Array<Film>, height?: number}) => {
    const focus = useSelector((state: RootState) => state.focus.value);
    const dispatch: AppDispatch = useDispatch();

    useEffect(()=> {
        dispatch(setMax(items.length))
    }, [])

    const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
        if (e.code == "ArrowRight") dispatch(incrementIndex());
        else if (e.code == "ArrowLeft") dispatch(decrementIndex());
    }

    const handleFocus = (i: number) => {
        dispatch(setFocus(i));
    }

    return(
        <ul className='carousel-container' onKeyDown={handleKeyDown}>
            { items.map((item: Film, index) => {
                const focused = index == focus;
                const poster = item.images.artwork_portrait;
                return (
                    <FilmCard tabIndex={index} isFocused={focused} poster={poster} 
                        title={item.title} height={height} key={item.id} handleFocus={handleFocus}/>
                )
            }) }
        </ul>
    );
};

export default FilmsCarousel;