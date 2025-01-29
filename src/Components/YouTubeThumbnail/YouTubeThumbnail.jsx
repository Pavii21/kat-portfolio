import React from "react";
import "./YouTubeThumbnail.css";

export const YouTubeThumbnail = () => {
  const videos = [
    {
      url: "https://youtu.be/wwG4JCCNG2E?si=qi59Be17kb6YFr-k",
      title: "Vari Ariya Kavidhai - Tamil Shortfilm",
    },
    {
      url: "https://youtu.be/4ssjBzqzCCk?si=1DUbPR72wwmXFsti",
      title: "Uch - Tamil Shortfilm",
    },
    {
      url: "https://youtu.be/3opGN52WsQY?si=RT7Oi1zDWnV87_qh",
      title: "Gang Bang - Tamil Music Video",
    },
    {
      url: "https://youtu.be/OzR8KiBwq2I?si=cIFxYXIshS2AIZ35",
      title: "ME, SEASHORE AND THE DYING FISH - Tamil Shortfilm",
    },
  ];

  const playlist = {
    url: "https://youtube.com/playlist?list=PLey2CBlILWWKgdJEp7ieSBJnuQv7_gc0L&si=SQhyIQZuGA9fcBtL",
    title: "Homelane",
    thumbnail: "https://img.youtube.com/vi/zoD6PkZlQRE/hqdefault.jpg", // Derived from the video ID
  };

  return (
    <div id="works">
      <h1 className="work">Works</h1>
      <div className="gallery">
        {videos.map((video, index) => {
          // Extract the video ID
          const videoId = video.url.includes("youtu.be/")
            ? video.url.split("youtu.be/")[1].split("?")[0] // For youtu.be links
            : video.url.split("v=")[1]?.split("&")[0]; // For youtube.com links

          // Thumbnail URL
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div className="video-card" key={index}>
              <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                <img className="thumbnail" src={thumbnailUrl} alt={video.title} />
              </a>
              <p className="title">{video.title}</p>
            </div>
          );
        })}

        {/* Playlist Section */}
        <div className="video-card">
          <a href={playlist.url} target="_blank" rel="noopener noreferrer">
            <img
              className="thumbnail"
              src={playlist.thumbnail}
              alt={playlist.title}
            />
          </a>
          <p className="title">{playlist.title}</p>
        </div>
      </div>
    </div>
  );
};
