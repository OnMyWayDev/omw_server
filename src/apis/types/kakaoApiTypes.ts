export interface KakaoKeywordSearchQuery {
  query: string;
  x?: string;
  y?: string;
  radius?: string;
}

export interface KakaoDrivingPathQuery {
  startX: string;
  startY: string;
  endX: string;
  endY: string;
  waypoints?: string[][];
  //waypoints: 경유지 수만큼 "{X좌표},{Y좌표},,name={경유지명}" 또는 "{X좌표},{Y좌표},"를 | 또는 %7C로 연결하여 입력(예:127.111202,37.394912,name=판교역 | 127.112275,37.392815)
}

export interface KakaoGetAddressQuery {
  x: string;
  y: string;
}
