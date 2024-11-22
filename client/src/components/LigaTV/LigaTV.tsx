import { useState, useEffect } from "react";

export default function LigaTV() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null); // Pour suivre la vidéo sélectionnée

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
    <div>
      <h1>Liga TV</h1>

      {/* Section du lecteur intégré */}
      <div style={{ marginBottom: "30px" }}>
        {selectedVideoId ? (
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="Lecteur vidéo YouTube"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>Sélectionnez une vidéo pour la visionner.</p>
        )}
      </div>

      {/* Section des miniatures */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {videos.map((video, index) => {
          const snippet = video.snippet || {};
          const thumbnails = snippet.thumbnails || {};
          const medium = thumbnails.medium || {};
          const videoId = video.contentDetails?.videoId;

          return (
            <div
              key={index}
              style={{ width: "300px", cursor: "pointer" }}
              onClick={() => setSelectedVideoId(videoId)} // Définit l'ID de la vidéo à afficher
            >
              {medium.url ? (
                <img
                  src={medium.url}
                  alt={snippet.title || "Pas de titre"}
                  style={{ width: "100%" }}
                />
              ) : (
                <p>Aucune miniature disponible</p>
              )}
              <h3>{snippet.title || "Titre non disponible"}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
