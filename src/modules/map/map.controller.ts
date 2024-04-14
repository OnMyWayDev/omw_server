import { Controller, Get, Logger, Query } from '@nestjs/common';
import { MapService } from './map.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetAddressRequestDto,
  GetDrivingRouteRequestDto,
  GetKeywordSearchRequestDto,
} from './dto/map.request.dto';
import {
  GetAddressResponseDto,
  GetDrivingRouteResponseDto,
  GetKeywordSearchResponseDto,
} from './dto/map.response.dto';

@Controller('map')
@ApiTags('Main')
export class MapController {
  constructor(private readonly mapService: MapService) {}
  // private readonly logger = new Logger(MapController.name);

  @Get('get-address')
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetAddressResponseDto,
  })
  @ApiOperation({ summary: 'Convert coordinate to address(es)' })
  async getAddress(@Query() params: GetAddressRequestDto) {
    return await this.mapService.getAddress(params);
  }

  @Get('keyword-search')
  @ApiOperation({
    summary:
      'Returns list of place informations with input keyword, address, etc.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetKeywordSearchResponseDto,
  })
  async getKeywordSearch(@Query() params: GetKeywordSearchRequestDto) {
    return await this.mapService.getKeywordSearch(params);
  }

  @Get('driving-route')
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: GetDrivingRouteResponseDto,
  })
  @ApiOperation({
    summary: 'Returns driving route information',
  })
  async getDrivingRoute(
    @Query()
    params: GetDrivingRouteRequestDto,
  ) {
    return await this.mapService.getDrivingRoute(params);
  }
}
