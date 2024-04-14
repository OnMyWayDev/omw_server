import { HttpException, Injectable } from '@nestjs/common';
import {
  GetAddressRequestDto,
  GetDrivingRouteRequestDto,
  GetKeywordSearchRequestDto,
} from './dto/map.request.dto';
import kakaoGetAddress from 'src/apis/kakaoGetAddress';
import kakaoKeywordSearch from 'src/apis/kakaoKeywordSearch';
import kakaoGetDrivingRoute from 'src/apis/kakaoGetDrivingRoute';
import { GetDrivingRouteQuery } from 'src/apis/types/omwApiTypes';

@Injectable()
export class MapService {
  async getAddress(params: GetAddressRequestDto) {
    const res = await kakaoGetAddress(params);
    if (res) {
      const data = res.documents.map((doc) => ({
        road_address: doc.road_address.address_name,
        address: doc.address.address_name,
      }));
      return data;
    }
    return res;
  }

  async getKeywordSearch(params: GetKeywordSearchRequestDto) {
    const data = await kakaoKeywordSearch(params);
    //FIXME: add more logics here, fine tune parameters (accuracy, priority, etc.)
    return data?.documents;
  }

  async getDrivingRoute(params: GetDrivingRouteRequestDto) {
    //FIXME: fix me -> Request Dto has been chagned!
    const data = await kakaoGetDrivingRoute(params);
    if (data.routes[0].result_code !== 0) {
      throw new HttpException(data.routes[0].result_msg, 400);
    }

    let res = { duration: -1, distance: -1, path: [] };
    const route = data.routes[0];
    const duration = route.summary.duration;
    const distance = route.summary.distance;

    const tmpPath = [];
    route.sections.forEach((section) => {
      const roads = section.roads;
      roads.forEach((road) => {
        tmpPath.push(...road.vertexes);
      });
    });

    const path = tmpPath.reduce((acc, cur, idx) => {
      if (idx % 2 === 0) acc.push([cur]);
      else acc[acc.length - 1].push(cur);
      return acc;
    }, []);

    res = { duration, distance, path };

    return res;
  }
}
