export const sortObjectsByStringAsc =
  ([...array]) =>
  (property) =>
    array.sort((a, b) => {
      if (a[property] < b[property]) return -1;

      if (a[property] > b[property]) return 1;

      return 0;
    });

export const sortObjectsByStringDesc =
  ([...array]) =>
  (property) =>
    array.sort((a, b) => {
      if (b[property] < a[property]) return -1;

      if (b[property] > a[property]) return 1;

      return 0;
    });
