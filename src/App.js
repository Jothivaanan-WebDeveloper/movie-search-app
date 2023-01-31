import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import NotFound from './components/NotFound';
import '@finastra/circular-progress';
function App() {

  const searchMovie = async (title) => {
    let response = await fetch(`https://omdbapi.com/?s=${title}&apikey=784a9d41`);
    let data = await response.json();
    console.log("DATA",data.Search);
    setMovie(data.Search);
  }

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    searchMovie('avatar');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(e.target.movieName.value);
  }

  return (

    <div className='container'>

      <form onSubmit={handleSubmit}>
        <div className="input-group mt-5">
          <input type="text" id='movieName' className="form-control text-capitalize" placeholder="Avatar" />
          <button className='btn btn-info' type='submit'>
            <i class="fa fa-search"></i></button>
        </div>
      </form>

      <div className='row mt-5'>
        <div className="d-flex justify-content-around" style={{ flexFlow: "wrap" }}>
       
          {
            movie === undefined ?
             <NotFound /> :
            !movie.length ?
            <fds-circular-progress indeterminate="true"></fds-circular-progress> :
            movie.map((el) => {
              return <MovieCard movie={el} />
            })

          }
        </div>
      </div>

    </div>

  );
}

export default App;
