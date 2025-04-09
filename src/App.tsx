import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilmsCarousel from './components/FilmsCarousel';
import { RootState, AppDispatch } from './redux/store';
import { fetchFilms } from './redux/films/filmsSlice';
import './App.css';


function App() {
  const {data, loading} = useSelector((state: RootState) => state.films);
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  if (loading) return 'Loading..';

  return (
    <>
      <FilmsCarousel items={data} />
    </>
  )
}

export default App;
