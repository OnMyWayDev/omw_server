import { KakaoDrivingPathQuery } from './kakaoApiTypes';

// export interface SearchOnPathQuery extends KakaoDrivingPathQuery {
//   query: string;
//   category?: string;
//   radius: string;
// }

export interface SearchOnPathQuery {
  query: string;
  category?: string;
  radius: string;
  vertexList: string[][];
}

export interface SearchOnPathResult {
  //TBU
}

export interface GetDrivingRouteQuery extends KakaoDrivingPathQuery {}

type DrivingRouteDetail = {
  duration: number;
  distance: number;
  path: string[][]; // [ [x1, y1], [x2, y2], ... ]
};

export interface GetDrivingRouteResult {
  result: DrivingRouteDetail;
}
