import { HttpException } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
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
  headers: {
    Authorization: process.env.KAKAO_API_KEY,
    'Content-Type': 'application/json',
  },
});

const errorHandler = (error: AxiosError) => {
  //TODO: add & improve logging details
  //TODO: move error handling functions to exception filters
  if (error.response) {
    // Server response status code was out of 2xx range
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    throw new HttpException(error.response.data, error.response.status);
  } else if (error.request) {
    // Request successfully made but no response received
    console.log(error.request);
    throw new HttpException(error.request, 500);
  } else {
    // Request was not successfully made
    console.log('Error', error.message);
    throw new HttpException(error.message, 500);
  }
};

export { axiosKakaoMap, axiosKakaoNav, errorHandler };
