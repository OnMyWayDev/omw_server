import { Controller, Get } from '@nestjs/common';
import { KakaoService } from './kakao.service';

@Controller('kakao')
export class KakaoController {
  constructor(private readonly kakaoService: KakaoService) {}
  @Get('drive-path')
  getDrivePath() {
    return this.kakaoService.findDrivePath();
  }
}
