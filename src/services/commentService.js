import axios from 'axios'
const baseUrl = 'https://enigmatic-reef-89083.herokuapp.com/comments'

const postComment = newObject => {
   return axios.post(baseUrl, newObject)
}

const getComments =() => {
    return axios.get(baseUrl)
}

const exported = { 
    getComments, 
    postComment 
}

export default exported