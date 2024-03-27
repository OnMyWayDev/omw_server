import { config } from 'dotenv';

config();

//constant values here
export const KAKAO_MAP_BASE_URL = 'https://dapi.kakao.com/v2/local/';
export const KAKAO_NAV_BASE_URL = 'https://apis-navi.kakaomobility.com/v1/';
export const KAKAO_API_KEY = process.env.KAKAO_API_KEY;
