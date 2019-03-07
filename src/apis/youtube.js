import axios from 'axios'

const API_KEY = "AIzaSyBQkuzrN61TnpZyilUgfsQyFL3GiJjl1Hk"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:25,
        key:API_KEY
    }
})
