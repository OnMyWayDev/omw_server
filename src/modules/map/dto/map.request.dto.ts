import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetAddressRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '127.021344106907',
    description: 'x coordinate',
    required: true,
  })
  x: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '37.5858189680129',
    description: 'y coordinate',
    required: true,
  })
  y: string;
}

export class GetKeywordSearchRequestDto {
  //FIXME: to improve over all
  @IsNotEmpty()
  @ApiProperty({
    example: '안암역, 안암동5가 21, etc...',
    description: 'search keyword, address, etc...',
    required: true,
  })
  query: string;

  @ApiProperty({
    example: 'MT1',
    description: 'category',
    required: false,
  })
  category?: string; //FIXME: enum , literal type : https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword

  @ApiProperty({
    example: '127.021344106907',
    description: 'x coordinate',
    required: false,
  })
  x?: string;

  @ApiProperty({
    example: '37.5858189680129',
    description: 'y coordinate',
    required: false,
  })
  y?: string;

  @ApiProperty({
    example: '20000',
    description: 'radius',
    required: false,
  })
  radius?: string;
}

export class GetDrivingRouteRequestDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '127.111202,37.394912',
    description: 'origin coordinates in format of "{X좌표},{Y좌표}"',
    required: true,
  })
  origin: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '127.111202,37.394912',
    description: 'destination coordinates in format of "{X좌표},{Y좌표}"',
    required: true,
  })
  destination: string;

  @ApiProperty({
    example: '127.111202,37.394912 | 127.112275,37.392815',
    description: '경유지 수만큼 "{X좌표},{Y좌표}"를 | 또는 %7C로 연결하여 입력',
    required: false,
  })
  waypoints?: string;
  // summary?: boolean;
  // alternatives?: boolean; //alternative has to be true to get multiple routes
  @ApiProperty({
    example: 'toll',
    description: 'toll: 유료 도로 회피, motorway: 자동차 전용 도로 회피',
    required: false,
  })
  avoid?: 'toll' | 'motorway'; //toll: 유료 도로, motorway: 자동차 전용 도로
  // priority?: 'RECOMMEND' | 'TIME' | 'DISTANCE'; //추천경로, 최단시간, 최단거리 -> FIXME: Api 상에서 세 개 다 보내기 and 결과 리스트로 반환해주기
}

export class GetStopByDurationRequestDto extends GetDrivingRouteRequestDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '127.111202,37.394912',
    description: 'Stopby Place coordinates in format of "{X좌표},{Y좌표}"',
    required: true,
  })
  stopby: string;
}
