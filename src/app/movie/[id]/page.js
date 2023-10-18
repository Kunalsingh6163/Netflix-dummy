import React from "react";
import MovieCard from "@/app/component/MovieCard";
import Link from "next/link";
import Image from "next/image";
import Styles from "../../style/movieCard.module.css";

async function Movie({ params }) {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6f66806ddcmshc4612cf8dda859dp137445jsnf98bbde2ca45",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  

  return (
    <>
      <div className={Styles.main_container}>
        <h2>
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div className={Styles.card} >
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={500}
            height={300}
          />
          <h2>{main_data.title}</h2>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </>
  );
}

export default Movie;
