import axios from "axios";


const getMainInfo = () => {
return axios.get('https://api.github.com/users/riikkawho')
}

const getSubInfo = () => {
return axios.get('https://api.github.com/users/riikkawho/repos')
}

const exported = { getMainInfo, getSubInfo}

export default exported