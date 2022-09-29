export const API_URL: string = 'https://akabab.github.io/superhero-api/api';

export const getStatClass = (stat: number): string => {
  if (stat <= 33) {
    return 'danger';
  } else if (stat > 34 && stat <= 66) {
    return 'warning';
  } else {
    return 'success';
  }
};
