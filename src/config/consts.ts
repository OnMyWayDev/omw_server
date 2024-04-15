import { config } from 'dotenv';

config();

export const KAKAO_API_KEY = process.env.KAKAO_API_KEY;

export const KAKAO_MAP_BASE_URL = 'https://dapi.kakao.com/v2/local/';
export const KAKAO_NAV_BASE_URL = 'https://apis-navi.kakaomobility.com/v1/';

export const KAKAO_GET_ADDRESS_URL = 'geo/coord2address.JSON';
export const KAKAO_GET_DRIVING_ROUTE_URL = 'directions';
export const KAKAO_KEYWORD_SEARCH_URL = 'search/keyword.JSON';

export const ROUTE_PRIORITY_LIST = ['RECOMMEND', 'TIME', 'DISTANCE'];
