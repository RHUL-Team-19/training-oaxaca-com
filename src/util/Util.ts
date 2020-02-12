import history from '../history';

export const capitalise = (word: string) =>
  word.replace(/./, firstLetter => firstLetter.toUpperCase());

export const redirect = (path: string) =>
  history.push(`${process.env.PUBLIC_URL}/${path}`);
