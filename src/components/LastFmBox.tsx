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
    <a href={song.url} target="_blank">
      <div className="music-widget">
        <img className="song-art" src={song.art} />
        <div className="song-text-box">
          <p className="song-title">{song.name}</p>
          <p className="song-artist">by {song.artist}</p>
        </div>
      </div>
    </a>
  );
}
