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
