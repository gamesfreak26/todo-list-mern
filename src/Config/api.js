import axios from 'axios'

// creating a proxy request to change the base url using Axios.
export default axios.create({
    baseURL: 'http://localhost:3009',
    timeout: 5000
})