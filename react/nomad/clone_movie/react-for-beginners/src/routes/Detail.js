import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css"

const Detail = (props)=>{
  const {id} = useParams();
  const [detail, setDetail] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
      setDetail(json.data.movie);
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div className={styles.detail}>
      <h1>{detail.title}</h1>
      <div className={styles.flex}>
        <div className="l_wr">
          <img src={detail.large_cover_image} alt={detail.title} />
        </div>
        <div className="r_wr">
          <dl>
            <dt>장르</dt>
            {detail.genres && detail.genres.map((genre) => (
              <dd key={genre}>{genre}</dd>
            ))}
          </dl>
          <dl>
            <dt>Rating</dt>
            <dd>{detail.rating}</dd>
          </dl>
          <dl>
            <dt>Year</dt>
            <dd>{detail.year}</dd>
          </dl>
          <dl>
            <dt>Description Intro</dt>
            <dd>{detail.description_intro}</dd>
          </dl>
          <dl>
            <dt>Language</dt>
            <dd>{detail.language}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Detail;