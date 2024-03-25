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

  @Get('keyword-search')
  //TODO: pipes can be added here, for validation
  async getKeywordSearch(@Query() params: KakaoKeywordSearchQuery) {
    this.logger.log(`getKeywordSearch: ${params}`);
    console.log(params, typeof params);
    return await this.kakaoService.getKeywordSearch(params);
  }
}
