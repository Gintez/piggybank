import { SPECIAL_CHARACTERS_REGEX } from './regex';
export const oneWord = value => value && value.replace(SPECIAL_CHARACTERS_REGEX, '');
