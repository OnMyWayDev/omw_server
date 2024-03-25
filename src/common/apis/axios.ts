import axios from 'axios';
import { config } from 'dotenv';

config();

const axiosKakaoMap = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local/',
  timeout: 6000,
  headers: { Authorization: process.env.KAKAO_API_KEY },
});

const axiosKakaoNav = axios.create({
  baseURL: 'https://apis-navi.kakaomobility.com/v1/',
  timeout: 8000,
  headers: { Authorization: process.env.KAKAO_API_KEY },
});

export { axiosKakaoMap, axiosKakaoNav };
