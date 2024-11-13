import { useEffect, useState } from "react";
import "./Video.css";

interface VideoProps {
  match_id: number;
  video_title_full: string;
  video_title: string;
  video_url: string;
}

const apiKey = import.meta.env.VITE_CLIENT_API_KEY;

export default function Video() {
  const [video, setVideo] = useState<VideoProps[]>([]);

  useEffect(() => {
    const getVideo = () => {
      fetch(
        `https://apiv3.apifootball.com/?action=get_videos&match_id=206&APIkey=${apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setVideo(data);
        });
    };
    getVideo();
  }, [video]);
  return (
    <div className="videoshow">
      {video.map((start) => (
        <div key={start.match_id}>
          <span>{start.video_title_full}</span>
          <span>{start.video_title}</span>
          <video width="750" height="500" controls>
            <source src={start.video_url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
