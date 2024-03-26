import { KakaoDrivingPathQuery } from './kakaoApiTypes';

export interface SearchOnPathQuery extends KakaoDrivingPathQuery {
  query: string;
  category?: string;
  radius: string;
}
