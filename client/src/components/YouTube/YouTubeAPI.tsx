export async function getYtVideos(): Promise<any[]> {
  const playListId = "PLKj1QUtwqLN8d0fzfK6xpM2NyL7cIG0D1";

  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=${playListId}&channelId=UCTv-XvfzLX3i4IGWAm4sbmA&maxResults=25&pageToken=https%3A%2F%2Fwww.youtube.com%2F%40LaLiga%2Fvideos&key=${apiKeyYouTube}`
  )
    .then((data) => data.json())
    .then((list) => list.items());
}
