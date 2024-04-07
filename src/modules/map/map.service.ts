import { Injectable } from '@nestjs/common';
import {
  GetAddressRequestDto,
  GetKeywordSearchRequestDto,
} from './dto/map.request.dto';
import kakaoGetAddress from 'src/apis/kakaoGetAddress';
import kakaoKeywordSearch from 'src/apis/kakaoKeywordSearch';

@Injectable()
export class MapService {
  async getAddress(params: GetAddressRequestDto) {
    const data = await kakaoGetAddress(params);
    return data;
  }

  async getKeywordSearch(params: GetKeywordSearchRequestDto) {
    const data = await kakaoKeywordSearch(params);
    //TODO: add more logics here
    return data;
  }
}
