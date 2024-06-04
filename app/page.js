import Image from "next/image";

import Card from "./componans/Card";
import Rating from "./componans/rating";
export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'FetchTrending'
  
  let url = `https://yts.mx/api/v2/list_movies.json`;

  // إذا كانت النوع "FetchTopRated"، سيتم إضافة معامل minimum_rating=9 إلى عنوان URL
  // في حالة أخرى، سيتم إضافة معامل minimum_rating=7
  if (genre === 'FetchTopRated') {
    url += `?minimum_rating=9`;
  } else {
    url += `?minimum_rating=${Math.random()}`;
  }
  
  const data = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('There was a problem with your fetch operation:', error);
    });

    const TheFinalMovies = data.data.movies.map((movie)=>{
      return(
      <Card key={movie.id} address={`/${movie.id}`} img={movie.medium_cover_image} title={movie.title} discrption={movie.description_full}
       rating={movie.rating}/>)
    })
  return (
   <>
   <div className="flex flex-wrap w-full justify-center">
    {TheFinalMovies}
    </div>
   </>
  );
}
