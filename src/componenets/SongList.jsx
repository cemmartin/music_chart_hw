import React from "react";
import ListContainer from "../containers/ListContainer";
import SongItem from "./SongItem";

const SongList = ({ songs }) => {
  const songItems = songs.map((song, index) => {
    return <SongItem song={song} key={index} />;
  });
  return (
    <>
      <p>song list text!</p>
      <ol>{songItems}</ol>
    </>
  );
};

export default SongList;
