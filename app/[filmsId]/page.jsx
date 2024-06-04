
import next from 'next';
import React from 'react'
import Card from '../componans/Card';
export default async function page({params}) {

    const movieId= params.filmsId
    
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}` )
    
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();
    
    console.log(data.data.movie.title);
  

    // const FindMovie = data.data.movies.map((movie)=>{
    //     return(
    //         <Card title={movie.title} />
    //     )
    // })
  return (
    <div>
        <span className='text-4xl block w-full pt-2 text-center'>{data.data.movie.title}</span>
        <div class='flex items-center gap-2'>{(
            <Card  address={"/"} rating={data.data.movie.rating} 
            // 
             img={data.data.movie.large_cover_image}/>
        )}
        <span className='text-xl md:text-4xl'>{data.data.movie.description_full}</span>
        </div>
    </div>
  )
}
