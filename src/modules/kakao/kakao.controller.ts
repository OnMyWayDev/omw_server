import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { KakaoService } from './kakao.service';

//TODO: create types file OR move to Dto
interface KakaoKeywordSearchQuery {
  query: string;
  x?: string;
  y?: string;
  radius?: string;
}

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoService: KakaoService) {}

  private readonly logger = new Logger(KakaoController.name);

  @Get('cd-to-addr')
  //returns list of candidate addresss (string value) with input coordinates (make sure coord system has to be converted)
  //TODO: pipes can be added here, for validation
  async getAddress(@Query() params: { x: string; y: string }) {
    this.logger.log(`getAddress: ${params}`);
    return await this.kakaoService.getAddress(params);
  }

  @Get('keyword-search')
  //returns list of place informations with input query, coordinates?, and raadius?
  //TODO: pipes can be added here, for validation
  async getKeywordSearch(@Query() params: KakaoKeywordSearchQuery) {
    this.logger.log(`getKeywordSearch: ${params}`);
    console.log(params, typeof params);
    return await this.kakaoService.getKeywordSearch(params);
  }

  @Get('driving-route')
  //returns driving route information with input start and end coordinates (temporarily, no stopover)
  async getDrivingRoute(
    @Query()
    params: {
      originX: string;
      originY: string;
      goalX: string;
      goalY: string;
    },
  ) {
    this.logger.log(`getDrivingRoute: ${params}`);
    return await this.kakaoService.getDrivingRoute(params);
  }
}
