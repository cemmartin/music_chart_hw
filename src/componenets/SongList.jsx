import React from "react";
import ListContainer from "../containers/ListContainer";
import SongItem from "./SongItem";

const SongList = ({ songs }) => {
  const songItems = songs.map((song, index) => {
    return <SongItem song={song} key={index} />;
  });
  return (
    <>
      <ol>{songItems}</ol>
    </>
  );
};

export default SongList;
