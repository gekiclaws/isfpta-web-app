import axios from 'axios';

const baseURL = 'http://localhost:3000';

// const handleError = fn => (...params) =>
//   fn(...params).catch(error => {
//     console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
//   });

export const api = {
  getAllEvents: (async function() {
    try {
      const res = await axios.get(baseURL + '/events');
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  createEvent: (async function(payload) {
    try {
      const res = await axios.post(baseURL + '/events', payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  updateEvent: (async function(id, payload) {
    try {
      const res = await axios.post(baseURL + '/events/' + id, payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
  
  getEvent: (async function(id) {
    try {
      const res = await axios.get(baseURL + '/events/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
 
  deleteEvent: (async function(id) {
    try {
      const res = await axios.delete(baseURL + '/events/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  getAllNews: (async function() {
    try {
      const res = await axios.get(baseURL + '/pta-network-news');
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
  
  createNews: (async function(payload) {
    try {
      const res = await axios.post(baseURL + '/pta-network-news', payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  updateNews: (async function(id, payload) {
    try {
      const res = await axios.post(baseURL + '/pta-network-news/' + id, payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
  
  getNews: (async function(id) {
    try {
      const res = await axios.get(baseURL + '/pta-network-news/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  deleteNews: (async function(id) {
    try {
      const res = await axios.delete(baseURL + '/pta-network-news/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  getAllService: (async function() {
    try {
      const res = await axios.get(baseURL + '/community-service');
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
  
  createService: (async function(payload) {
    try {
      const res = await axios.post(baseURL + '/community-service', payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  updateService: (async function(id, payload) {
    try {
      const res = await axios.post(baseURL + '/community-service/' + id, payload);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
  
  getService: (async function(id) {
    try {
      const res = await axios.get(baseURL + '/community-service/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),

  deleteService: (async function(id) {
    try {
      const res = await axios.delete(baseURL + '/community-service/' + id);
      return res.data;
    }
    catch (error) {
      console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
    }
  }),
};

