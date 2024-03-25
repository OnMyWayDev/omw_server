import { Injectable } from '@nestjs/common';
import { axiosKakaoMap } from 'src/common/apis/axios';

@Injectable()
export class KakaoService {
  async getKeywordSearch(query: string) {
    //TODO: to update into try..catch block
    const res = await axiosKakaoMap.get(`search/keyword.JSON?query=${query}`);
    return res.data;
  }
}
