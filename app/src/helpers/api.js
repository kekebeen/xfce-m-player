import Vue from 'vue';
const client_drugi = '983e8eb48daa6e8204e369a99cba62ce';
//const client_id = '983e8eb48daa6e8204e369a99cba62ce';
const url = 'https://api.soundcloud.com/tracks?client_id=' + client_drugi;
//const url = 'https://api.soundcloud.com/playlists/1357868?client_id=' + client_id;

export default {
  fetchRecentTracks(){
    return Vue.http.get(url)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
  }
}