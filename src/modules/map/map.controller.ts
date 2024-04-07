import { Controller, Get, Logger, Query } from '@nestjs/common';
import { MapService } from './map.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetAddressRequestDto,
  GetKeywordSearchRequestDto,
} from './dto/map.request.dto';

@Controller('map')
@ApiTags('Main')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  private readonly logger = new Logger(MapController.name);

  @Get('get-address')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({ summary: 'Convert coordinate to address(es)' })
  async getAddress(@Query() params: GetAddressRequestDto) {
    const res = await this.mapService.getAddress(params);
    return res;
  }

  @Get('keyword-search')
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({
    summary:
      'returns list of place informations with input keyword, address, etc.',
  })
  async getKeywordSearch(@Query() params: GetKeywordSearchRequestDto) {
    const res = await this.mapService.getKeywordSearch(params);
    return res;
  }
}
