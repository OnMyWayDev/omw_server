const removeDuplicate = (arr: any[]) => {
  return arr.filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
  );
};

export default removeDuplicate;
