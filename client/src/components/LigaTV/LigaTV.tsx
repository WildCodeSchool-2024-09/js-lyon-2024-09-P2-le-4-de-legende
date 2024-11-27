import { useState, useEffect } from "react";
import "./LigaTV.css"; // Import du fichier CSS

export default function LigaTV() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const apiKeyYouTube = import.meta.env.VITE_CLIENT_API_KEY_YOUTUBE;
  const playListId = "PLXFgV2VAD0ElQmaD8KIpZAMMObnfCdneB";

  useEffect(() => {
    const getLigaPlayList = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playListId}&maxResults=40&key=${apiKeyYouTube}`
        );
        const data = await response.json();
        if (data.items) {
          setVideos(data.items);
        } else {
          console.error("Aucune vidéo trouvée dans la playlist.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la playlist :", error);
      }
    };
    getLigaPlayList();
  }, [playListId, apiKeyYouTube]);

  return (
    <div className="liga-container">
      <h1 className="liga-title">Liga TV</h1>
      {/* Section du lecteur intégré */}
      <div className="video-player-container">
        {selectedVideoId && typeof selectedVideoId === "string" ? (
          <div className="iframe-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="Lecteur vidéo YouTube"
              className="iframe-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="select-message">
            Sélectionnez une vidéo pour la visionner.
          </p>
        )}
      </div>
      {/* Section des miniatures */}
      <div className="thumbnails-container">
        {videos.map((video, index) => {
          const snippet = video.snippet || {};
          const thumbnails = snippet.thumbnails || {};
          const medium = thumbnails.medium || {};
          const videoId = video.contentDetails?.videoId;
          return (
            <div
              key={index}
              className="thumbnail-item"
              onClick={() => setSelectedVideoId(videoId)}
            >
              {medium.url ? (
                <img
                  src={medium.url}
                  alt={snippet.title || "Pas de titre"}
                  className="thumbnail-image"
                />
              ) : (
                <p className="no-thumbnail-message">
                  Aucune miniature disponible
                </p>
              )}
              <h3 className="thumbnail-title">
                {snippet.title || "Titre non disponible"}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
