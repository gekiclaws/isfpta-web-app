import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 3000,
// });
const baseURL = 'http://localhost:3000';

// const getAllEvents = async function() {
//     await instance.get('/events')
//         .then(function (res){
//             console.log(res.data);
//             return res.data;
//         })
//         .catch(function (res){
//             console.log(res.status + res.statusText);
//         });   
// }

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getAllEvents: handleError(async () => {
    const res = await axios.get(baseURL+'/events');
    return res.data;
  }),
};