import { Injectable, HttpException } from '@nestjs/common';
import { axiosKakaoMap, errorHandler } from 'src/common/apis/axios';

//TODO: remove duplicate in controller.ts
interface KakaoKeywordSearchQuery {
  query: string;
  x?: string;
  y?: string;
  radius?: string;
}

@Injectable()
export class KakaoService {
  async getKeywordSearch(params: KakaoKeywordSearchQuery) {
    const { query, x, y, radius } = params;
    //TODO: to update into try...catch block
    //TODO: move api functions to api directory
    try {
      const res = await axiosKakaoMap.get(
        `search/keyword.JSON?query=${query}${x ? `&x=${x}` : ''}${y ? `&y=${y}` : ''}${radius ? `&radius=${radius}` : ''}`,
      );
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
