import Vue from 'vue';
import Vuex from 'vuex';
import api from '../helpers/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tracks: [
      {
        "title": '',
        "author": '',
        "url": '',
        "pic": '',
        "lrc": ''
      }
    ]
  },
  actions: {
    LOAD_RECENT_TRACKS: function({commit}) {
     return api.fetchRecentTracks()
            .then((response) => {
              let trake = []
              response.map((track) => {
                var obj = {
                  "title": '',
                  "author": '',
                  "url": '',
                  "pic": '',
                  "lrc": ''
                }
                obj.author = track.user.username;
                obj.title = track.title;
                obj.url = track.stream_url+'?client_id=983e8eb48daa6e8204e369a99cba62ce';
                obj.pic = track.artwork_url != null ? track.artwork_url : "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=100&h=100";
                obj.lrc = '[00:00.00]lrc here\n[00:01.00]aplayer';
                trake.push(obj);
              })
              commit('SET_RECENT_TRACKS', {tracks: trake})
            }, (err) => {
              console.log("Error while fetching recent tracks", err);
            })
    }
  },
  mutations: {
    SET_RECENT_TRACKS: (state, { tracks }) => {
      state.tracks = tracks
    }
  },
  getters: {
    AllTracks: state => {
      return state.tracks
    }
  }
})

export default store;