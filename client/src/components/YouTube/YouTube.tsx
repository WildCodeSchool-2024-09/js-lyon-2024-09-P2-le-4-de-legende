/*` 
API KEY :      
https://youtube.googleapis.com/youtube/v3/playlists?part=${playListId}&channelId=UCTv-XvfzLX3i4IGWAm4sbmA&maxResults=25&pageToken=https%3A%2F%2Fwww.youtube.com%2F%40LaLiga%2Fvideos&key=${apiKeyYouTube}`

     
https://youtube.googleapis.com/youtube/v3/playlists?part=PLKj1QUtwqLN8d0fzfK6xpM2NyL7cIG0D1&channelId=UCTv-XvfzLX3i4IGWAm4sbmA&maxResults=25&pageToken=https%3A%2F%2Fwww.youtube.com%2F%40LaLiga%2Fvideos&key=AIzaSyASjqCmR9Oie4yxMtVucy352px62Z4LMjY

fetch(
  `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&channelId=UCTv-XvfzLX3i4IGWAm4sbmA&maxResults=25&key=AIzaSyASjqCmR9Oie4yxMtVucy352px62Z4LMjY`
)
  .then(data => data.json())
  .then(list => console.log(list));
*/
