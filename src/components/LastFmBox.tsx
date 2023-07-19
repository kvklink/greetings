import React from "react";
import "./lastFmBox.css";

interface LastFmBoxProps {
  song: {
    album: string;
    art: string;
    artist: string;
    name: string;
    url: string;
  };
}

export default function LastFmBox({ song }: LastFmBoxProps) {
  return (
    <a href={song.url} className="music-widget" target="_blank">
      <div>
        <img className="song-art" src={song.art} />
        <div className="song-text-box">
          <p>{song.name}</p>
          <p>by {song.artist}</p>
        </div>
      </div>
    </a>
  );
}
