import SelectVerticesParams from './types';

//TODO: to improve performance, have to handle different cases according to whether the road is EXPRESSWAY or not. (unit distance becomes  different)
const selectVertices = ({
  vertexList,
  totalDistance,
  radius,
}: SelectVerticesParams) => {
  //decide which vertices to use for keyword search
  // radius is set so that selectedVertices.length ~<= 10
  // skipCount = how many indexes to skip
  // unitDistance * skipCount <= radius
  const totalCount: number = vertexList.length;
  const unitDistance: number = totalDistance / (totalCount - 1); //average distance between two vertices
  const selectedVertices: string[] = [];

  const skipCount: number = Math.floor(radius / unitDistance);

  let curIdx = 0;
  while (curIdx < totalCount) {
    selectedVertices.push(vertexList[curIdx]);
    curIdx += skipCount;
  }

  console.log('selected vertices :', selectedVertices);
  console.log('selected vertices Count :', selectedVertices.length);

  return selectedVertices;
};

export default selectVertices;
