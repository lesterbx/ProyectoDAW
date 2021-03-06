import firebaseApp from '~/firebaseapp'
export default {
    addConcert: (state, concert) => state.concerts[concert.id] = concert ,
    setUserProfile: (state, profile) => state.userProfile = profile,
    setUserData: (state, data) => state.userData = data ,
    setAuthenticated: (state, authenticated) => state.isAuthenticated = authenticated ,
    setAllConcertsRef: (state) => state.allConcertsRef = firebaseApp.database().ref('/concertsList'),
    setCountryConcertsRef: (state, country) => state.countryConcertsRef = firebaseApp.database().ref('/concertsList').orderByChild('country').equalTo(country),
    setConcertsFullRef: (state) => state.concertsFullRef = firebaseApp.database().ref('/concertsFull'),
    setUsersRef: (state) => state.usersRef = firebaseApp.database().ref('/users'),
    setLoading: (state, loading) => state.loading = loading,
    setUserLocation: (state, location) => state.location = location,
    setUserCountry: (state, country) => state.userCountry = country
}
