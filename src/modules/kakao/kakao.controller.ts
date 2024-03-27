import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { KakaoService } from './kakao.service';
import {
  KakaoKeywordSearchQuery,
  KakaoDrivingPathQuery,
  KakaoGetAddressQuery,
} from 'src/apis/types/kakaoApiTypes';
import { SearchOnPathQuery } from 'src/apis/types/omwApiTypes';

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoService: KakaoService) {}

  private readonly logger = new Logger(KakaoController.name);

  @Get('to-addr')
  //returns list of candidate addresss (string value) with input coordinates (make sure coord system has to be converted)
  //TODO: pipes can be added here, for validation
  async getAddress(@Query() params: KakaoGetAddressQuery) {
    this.logger.log(`getAddress: ${params}`);
    return await this.kakaoService.getAddress(params);
  }

  @Get('keyword-search')
  //returns list of place informations with input query, coordinates?, and raadius?
  //TODO: pipes can be added here, for validation
  async getKeywordSearch(@Query() params: KakaoKeywordSearchQuery) {
    this.logger.log(`getKeywordSearch: ${params}`);
    return await this.kakaoService.getKeywordSearch(params);
  }

  @Get('driving-route')
  //returns driving route information with input start and end coordinates (temporarily, no stopover)
  async getDrivingRoute(
    @Query()
    params: KakaoDrivingPathQuery,
  ) {
    this.logger.log(`getDrivingRoute: ${params}`);
    return await this.kakaoService.getDrivingRoute(params);
  }

  @Get('search-on-path')
  //Search query on the path
  async getSearchOnPath(@Query() params: SearchOnPathQuery) {
    return await this.kakaoService.searchOnPath(params);
  }
}
