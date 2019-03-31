import { EMAIL_REGEX } from './regex';

export const required = value => !value ? 'Is required' : undefined;
export const isEmail = value => !EMAIL_REGEX.test(value) ? 'Must be email' : undefined;
export const isMaxLength = length =>
  value => (value && value.length > length) ? `Max length ${length} simbols` : undefined;
export const isMinLength = length =>
  value => (value && value.length < length) ? `Min length ${length} simbols` : undefined;
export const hasNumber = value => !/\d/.test(value) ? 'Must incluede number' : undefined;
export const hasUppercaseLetter = value =>
  value && value.toLowerCase() === value ? 'Must include an uppercase letter' : undefined;
export const isPasswordsMatching = ({ oldPassword, newPassword }) =>
  oldPassword !== newPassword ? 'Password should match' : undefined;
