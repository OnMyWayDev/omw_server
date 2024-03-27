import { axiosKakaoMap, errorHandler } from './axios';
import { KakaoKeywordSearchQuery } from './types/kakaoApiTypes';
import { KAKAO_KEYWORD_SEARCH_URL } from '../config/consts';

const kakaoKeywordSearch = async (params: KakaoKeywordSearchQuery) => {
  try {
    const res = await axiosKakaoMap.get(KAKAO_KEYWORD_SEARCH_URL, {
      params,
    });
    return res.data;
  } catch (err) {
    console.log('Error occured in kakaoKeywordSearch :', err);
    errorHandler(err);
  }
};

export default kakaoKeywordSearch;
