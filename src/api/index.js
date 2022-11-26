import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function signUpUser(userData) {
  // const url = '/api/signUp';
  // return axios.post(url, userData);
  return instance.post('/api/signUp', userData);
}

// 로인 API
function loginUser(userData) {
  return instance.post('/api/login', userData);
}

// 통 차트 API
function fetchChart() {
  return instance.get('/api/chart');
}

// resourceType API
function fetchResourceType(type) {
  return instance.get('/api/resourceType?resourceType=cpu', type);
}

export { fetchChart, signUpUser, loginUser, fetchResourceType };
