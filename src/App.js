import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

function App() {

  const searchMovie = async (title) => {
    let response = await fetch(`https://omdbapi.com/?s=${title}&apikey=784a9d41`);
    let data = await response.json();
    // console.log("DATA",data.Search);
    setMovie(data.Search);
  }

  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovie('avatar');
  }, []);

  return (

    <div className='container'>

        <div className="input-group mt-5">
          <input type="text" className="form-control" placeholder="Avatar"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }} />
          <button className='btn btn-info'
            onClick={() => searchMovie(searchTerm)}>
            <i class="fa fa-search"></i></button>
        </div>

      <div className='row mt-5'>
        <div className="d-flex justify-content-around" style={{ flexFlow: "wrap" }}>
          {
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
