import React from 'react';
import { useState, useEffect } from 'react';

function App() {

  const searchMovie = async (title) => {
    let response = await fetch(`https://omdbapi.com/?s=${title}&apikey=784a9d41`);
    let data = await response.json();
    console.log(data);
    setMovie(data);
  }

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    searchMovie('spiderman');
  }, []);

  return (
    <div className='container'>
      <form>
        <div className="input-group mt-5">
          <input type="text" className="form-control" placeholder="Avatar" />
          <button className='btn btn-info' type='submit'><i class="fa fa-search"></i></button>
        </div>
      </form>
    </div>
  );
}

export default App;
