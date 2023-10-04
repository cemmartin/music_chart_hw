import React, { useState, useEffect } from "react";
import SongList from "../componenets/SongList";
import './ListContainer.css'

const ListContainer = () => {
  const [mySongs, setSongs] = useState([]); //as long as this is an array, you're set bc later you can 

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = function () {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((songs) => {setSongs(songs.feed.entry); //need to confirm this works- confirmed woohoo!
      });
  };

  return (
    <div class="list-container">
      <SongList songs={mySongs} />
      {/*everything goes to shit when this is activated  */}
    </div>
  );
};

export default ListContainer;
