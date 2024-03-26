import { Injectable, HttpException } from '@nestjs/common';
import { axiosKakaoMap, axiosKakaoNav, errorHandler } from 'src/apis/axios';

//TODO: remove duplicate in controller.ts
//FIXME: move addresses to consts.ts
interface KakaoKeywordSearchQuery {
  query: string;
  x?: string;
  y?: string;
  radius?: string;
}

@Injectable()
export class KakaoService {
  async getAddress(params: { x: string; y: string }) {
    const { x, y } = params;
    try {
      const res = await axiosKakaoMap.get(
        `geo/coord2address.json?x=${x}&y=${y}`,
      );
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }

  async getKeywordSearch(params: KakaoKeywordSearchQuery) {
    const { query, x, y, radius } = params;
    //FIXME: validate query, x, y, radius (must exist, string)
    //TODO: to update into try...catch block
    //TODO: move api functions to api directory
    try {
      const res = await axiosKakaoMap.get('search/keyword.JSON', {
        // NOTE: params that are null or undefined are not rendered in the URL.
        params: {
          query: query,
          x: x,
          y: y,
          radius: radius,
        },
      });
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }

  async getDrivingRoute(params: {
    originX: string;
    originY: string;
    goalX: string;
    goalY: string;
  }) {
    //Suppose no stopover for now, temporarily
    const { originX, originY, goalX, goalY } = params;
    try {
      //FIXME: update axios code to use params option instead of single string
      const res = await axiosKakaoNav.get('directions', {
        params: {
          origin: `${originX},${originY}`,
          destination: `${goalX},${goalY}`,
        },
      });
      // this.logger.log(res.data.) -> 총 vertex수 세기
      return res.data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
