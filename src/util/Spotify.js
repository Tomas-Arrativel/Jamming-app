let accessToken = '';
const clientID = '1851842a47fe4c0cae01ce30807ee263';
const redirectURI = 'http://localhost:5173/';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = Number(urlExpiresIn[1]);
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

      window.location = redirect;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    return await fetch(
      `https://api.spotify.com/v1/search?type=TRACK&q=${term}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map((tracks) => ({
          id: tracks.id,
          name: tracks.name,
          artist: tracks.artists[0].name,
          album: tracks.album.name,
          uri: tracks.uri,
        }));
      });
  },
};

export { Spotify };
