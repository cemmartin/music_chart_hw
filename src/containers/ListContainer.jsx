import React, { useState, useEffect } from "react";
import SongList from "../componenets/SongList";

const ListContainer = () => {
  const [mySongs, setSongs] = useState([]); //as long as this is an array, you're set bc later you can 

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = function () {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs.feed.entry);
      });
  };

  return (
    <>
      <h2> some text from ListContainer!</h2>

      <SongList songs={mySongs} />
      {/*everything goes to shit when this is activated  */}
    </>
  );
};

export default ListContainer;
