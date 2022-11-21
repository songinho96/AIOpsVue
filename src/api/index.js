import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// function getChart() {
//   const url = '/api/chart';
//   axios.get(url).then(res => {
//     console.log(res.data);
//   });
// }

function signUpUser(userData) {
  // const url = '/api/signUp';
  // return axios.post(url, userData);
  return instance.post('/api/signUp', userData);
}

function loginUser(userData) {
  return instance.post('/api/login', userData);
}

function fetchChart(chartData) {
  return instance.get('/api/chart', chartData);
}

export { fetchChart, signUpUser, loginUser };
