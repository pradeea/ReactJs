import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID 2icSeAlZdn_ucgnzHHsEI5NXLfyRoYHMbTavgflLy6g'}
})