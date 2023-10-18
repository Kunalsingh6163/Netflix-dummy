import React from 'react';
import MovieCard from "../component/MovieCard";
import styles from "../style/movieCard.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
          "X-RapidAPI-Key": "6f66806ddcmshc4612cf8dda859dp137445jsnf98bbde2ca45",
          "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
        },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;