import { Controller, Get, Logger, Param } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoService: KakaoService) {}
  private readonly logger = new Logger(KakaoController.name);
  @Get('keyword-search/:query')
  async getKeywordSearch(@Param('query') query: string) {
    return await this.kakaoService.getKeywordSearch(query);
  }
}
