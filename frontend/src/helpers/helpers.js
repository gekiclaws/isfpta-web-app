import axios from 'axios';

const baseURL = 'http://localhost:3000';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getAllEvents: handleError(async () => {
    const res = await axios.get(baseURL+'/events');
    return res.data;
  }),
  createEvent: handleError(async payload => {
    const res = await axios.post(baseURL+'/events', payload);
    return res.data;
  }),
  getEvent: handleError(async id => {
    const res = await axios.get(baseURL + '/events/' + id);
    return res.data;
  }),
  deleteEvent: handleError(async id => {
    const res = await axios.delete(baseURL + '/events/' + id);
    return res.data;
  }),
};

