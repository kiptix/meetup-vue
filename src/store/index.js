import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [{
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/NYC_Montage_2014_4_-_Jleon.jpg',
      id: '123',
      title: 'Meetup in New York',
      date: '2017-07-17'
    }, {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/New_LA_Infobox_Pic_Montage_5.jpg',
      id: '456',
      title: 'Meetup in Los Angeles',
      date: '2017-07-15'
    }, {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kirche_in_Petersfehn_I.JPG/800px-Kirche_in_Petersfehn_I.JPG',
      id: '457',
      title: 'Meetup in Petersfehn',
      date: '2017-07-18'
    }],
    user: {
      id: '1564564', registeredMeetups: ['1564564']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
