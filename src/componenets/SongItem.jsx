import React from "react";
import SongList from "./SongList";

const SongItem = ({ song }) => {
  return (
    <>
      <li>
        <p>{song["im:name"]["label"]} by {song["im:artist"]["label"]}</p>
      </li>
      
    </>
  );
};

export default SongItem;
