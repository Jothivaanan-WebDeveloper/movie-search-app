import React from "react";

export default function MovieCard({ movie }) {
    return (
        <div className="flip-card cardDiv">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={movie.Poster} 
                        alt={movie.Title} style={{width:"200px",height:"300px"}}/>
                </div>
                <div className="flip-card-back">
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year}</p>
                    <p className="text-capitalize">{movie.Type}</p>
                </div>
            </div>
        </div>
        
    )
}