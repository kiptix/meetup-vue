import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [{
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/NYC_Montage_2014_4_-_Jleon.jpg',
      id: '123',
      title: 'Meetup in New York',
      date: new Date(),
      location: 'New York'
    }, {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/New_LA_Infobox_Pic_Montage_5.jpg',
      id: '456',
      title: 'Meetup in Los Angeles',
      date: new Date(),
      location: 'LA'
    }, {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kirche_in_Petersfehn_I.JPG/800px-Kirche_in_Petersfehn_I.JPG',
      id: '457',
      title: 'Meetup in Petersfehn',
      date: new Date(),
      location: 'Petersfehn',
      description: 'Meetup in cool P-Town'
    }],
    user: {
      id: '1564564', registeredMeetups: ['1564564']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'dasdf'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
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
