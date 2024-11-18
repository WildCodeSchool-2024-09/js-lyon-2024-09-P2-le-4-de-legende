import { useEffect, useState } from "react";
import "./YouTube.css";

interface YouTubeProps {
  match_id: number;
  video_title_full: string;
  video_title: string;
  video_url: string;
}

const playListId = "PLKj1QUtwqLN8d0fzfK6xpM2NyL7cIG0D1";

const apiKeyYouTube = import.meta.env.VITE_CLIENT_API_KEY_YOUTUBE;

export default function YouTube() {
  const [youVideo, setYouVideo] = useState<YouTubeProps[]>([]);

  useEffect(() => {
    const getVideo = () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=${playListId}&channelId=UCTv-XvfzLX3i4IGWAm4sbmA&maxResults=25&pageToken=https%3A%2F%2Fwww.youtube.com%2F%40LaLiga%2Fvideos&key=${apiKeyYouTube}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setYouVideo(data);
        });
    };
    getVideo();
  }, []);
  return (
    <div className="youtubevideo">
      {youVideo.map((play) => (
        <div key={play.match_id}>
          <span>{play.video_title_full}</span>
          <span>{play.video_title}</span>
          <video width="750" height="500" controls>
            <source src={play.video_url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
