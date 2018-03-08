
/**
 * Validate a set of async validations mapped as field and rule called rules.
 */
export function validate<T>(data: T, rules: IValidationRules, messages?: IValidationMessages, formatter?: any): Promise<T>;

/**
 * Just like validate but waits for all the validations to occur and returns an array of errors.
 */
export function validateAll<T>(data: T, rules: IValidationRules, messages?: IValidationMessages, formatter?: any): Promise<T>;

/**
 * Sanitizes a given set of data with given set of rules.
 */
export function sanitize<T>(data: T, rules: IValidationRules): T;

export function rule(name: string, args: any): any;
export function configure(options: any): void;

export interface IValidationMethod {
  (data: any, field: string, message: string, args: any[], get: Function): Promise<any>;
}

export interface IMessageMethod {
  (field: string, validation: string, args: any[]): string;
}

export interface Error {
  field?: string;
  validation?: string;
  message?: string;
}

export interface Data {
  [x: string]: any;
}

export interface IValidationRules {
  [x: string]: string;
}

export interface IValidationMessages {
  [x: string]: string | IMessageMethod;
}

export namespace is {
  /**
   * Tells whether input is above comparison input.
   */
  function above(input: number, comparsionInput: number): boolean;

  /**
   * Tells whether input is affirmative or not.
   */
  function affirmative(input: string): boolean;

  /**
   * Makes sure given field contains letters only.
   */
  function alpha(input: string): boolean;

  /**
   * Tells whether input is a valid alpha numeric string or not.
   */
  function alphaNumeric(input: string | number): boolean;

  /**
   * Tells whether input is a valid array or not.
   */
  function array(input: any[]): boolean;

  /**
   * Tells whether a value lies between 2 values or not.
   */
  function between(input: number, min: number, max: number): boolean;

  /**
   * Tells whether input is a valid credit card number or not.
   */
  function boolean(input: any, strict: boolean): boolean;

  /**
   * Tells whether input is a valid credit card number or not.
   */
  function creditCard(input: string): boolean;

  /**
   * Tells whether input is a valid date or not .
   */
  function date(input: string | Date, strict: boolean): boolean;

  /**
   * Tells whether given input is a valid email address or not.
   */
  function email(input: string): boolean;

  /**
   * Tells whether input is empty or not.
   */
  function empty(input: any): boolean;

  /**
   * Tells whether input is a even number or not.
   */
  function even(input: number): boolean;

  /**
   * Tells whether input exists or not. Trims spaces!
   */
  function existy(input: any): boolean;

  /**
   * Tells whether input exists or not.
   */
  function exists(input: any): boolean;

  /**
   * Tells whether input is falsy or not, opposite of truthy.
   */
  function falsy(input: any): boolean;

  /**
   * Tells whether a value lies in an array or not.
   */
  function inArray(input: string, comparsionArray: any[]): boolean;

  /**
   * Makes sure all values of one array are present in another array.
   */
  function intersectAll(input: any[], intersectionArray: any[]): boolean;

  /**
   * Makes sure any one value of one array is present in another array.
   */
  function intersectAny(input: any[], intersectionArray: any[]): boolean;

  /**
   * Tells whether ip address is a valid ipv4 or ipv6 ip address.
   */
  function ip(input: string): boolean;

  /**
   * Tells whether ip address is a valid ipv4 ip address.
   */
  function ipv4(input: string): boolean;

  /**
   * Tells whether ip address is a valid ipv6 ip address.
   */
  function ipv6(input: string): boolean;

  /**
   * Tells whether input is function or not.
   */
  function isFunction(input: any): boolean;

  /**
   * Tells whether input is a valid JSON string or not.
   */
  function json(input: string): boolean;

  /**
   * Tells whether input is a negative number or not.
   */
  function negative(input: number): boolean;

  /**
   * Tells type of input is null.
   */
  function isNull(input: any): boolean;

  /**
   * Tells type of input is a valid number or not.
   */
  function isNumber(input: any): boolean;

  /**
   * Tells whether input is a valid object or not.
   */
  function isObject(input: any): boolean;

  /**
   * Tells whether input is a odd number or not.
   */
  function odd(input: number): boolean;

  /**
   * Tells whether given input is a valid phone number or not.
   */
  function phone(input: string | number): boolean;

  /**
   * Tells whether input is a positive number or not.
   */
  function positive(input: number): boolean;

  /**
   * Executes a given regex on a given input.
   */
  function regex(input: string, regex: string | RegExp): boolean;

  /**
   * Tells whether 2 values are identically same.
   */
  function same(input: any, comparsionInput: any): boolean;

  /**
   * Matches 2 input are of same type or not.
   */
  function sameType(input: any, comparsionInput: any): boolean;

  /**
   * Tells whether an array is sorted or not.
   */
  function sorted(input: any[]): boolean;

  /**
   * Tells whether input is of type string or not.
   */
  function isString(input: any): boolean;

  /**
   * Tells whether input is truthy or not.
   */
  function truthy(input: any): boolean;

  /**
   * Tells whether input is under comparison input.
   */
  function under(input: number, comparsionInput: number): boolean;

  /**
   * Tells whether given input is a valid url or not.
   */
  function url(input: string): boolean;

  /**
   * Tells whether input date is a valid date is today or not.
   */
  function today(input: string | Date): boolean;

  /**
   * Tells whether input date is a valid date from yesterday or not.
   */
  function yesterday(input: any): any;

  /**
   * Tells whether input date is a valid date to tomorrow or not.
   */
  function tomorrow(input: string | Date): boolean;

  /**
   * Tells whether input date is in past or not.
   */
  function past(input: string | Date): boolean;

  /**
   * Tells whether input date is in future or not.
   */
  function future(input: string | Date): boolean;

  /**
   * Tells whether a given date is between 2 dates or not.
   */
  function inDateRange(input: string | Date, minDate: string | Date, maxDate: string | Date): boolean;

  /**
   * Tells whether input is after certain offset from current date.
   */
  function afterOffsetOf(input: string, number: number, key: string): boolean;

  /**
   * Tells whether input is before certain offset from current date.
   */
  function beforeOffsetOf(input: string, number: number, key: string): any;

  /**
   * Tells whether input is a valid date for a given format or not.
   */
  function dateFormat(input: string, formats: any[]): boolean;

}

export namespace sanitizor {
  /**
   * Normalizes an email by removing all unncessary characters from it.
   */
  function normalizeEmail(value: string, args: any[]): string;

  function stripTags(value: string, args: any[]): string;

  /**
   * Converts a value to boolean all values with positive inputs yields to true.
   */
  function toBoolean(value: any): boolean;

  /**
   * Converts empty strings and `undefined` to `null`. It is
   * handy to keep data normalized at database level.
   */
  function toNull(value: any): number;

  /**
   * Converts a value to integer or returns NaN.
   */
  function toInt(value: any, args: any[]): number;

   /**
   * Converts a date to a date object or return null when invalid date
   */
  function toDate(value: any): Date | null;

  function plural(value: string): string;

  function singular(value: string): string;

  function slug(value: string): string;

  function stripLinks(value: string): string;

  /**
   * Escapes an input if it's a string.
   */
  function escape(value: string): string;
}

export namespace validations {
  const above: IValidationMethod;
  const accepted: IValidationMethod;
  const alpha: IValidationMethod;
  const alphaNumeric: IValidationMethod;
  const array: IValidationMethod;
  const boolean: IValidationMethod;
  const confirmed: IValidationMethod;
  const different: IValidationMethod;
  const email: IValidationMethod;
  const endsWith: IValidationMethod;
  const equals: IValidationMethod;
  const inList: IValidationMethod;
  const includes: IValidationMethod;
  const integer: IValidationMethod;
  const ip: IValidationMethod;
  const ipv4: IValidationMethod;
  const ipv6: IValidationMethod;
  const json: IValidationMethod;
  const max: IValidationMethod;
  const min: IValidationMethod;
  const notEquals: IValidationMethod;
  const notInList: IValidationMethod;
  const number: IValidationMethod;
  const object: IValidationMethod;
  const range: IValidationMethod;
  const regex: IValidationMethod;
  const required: IValidationMethod;
  const requiredIf: IValidationMethod;
  const requiredWhen: IValidationMethod;
  const requiredWithAll: IValidationMethod;
  const requiredWithAny: IValidationMethod;
  const requiredWithoutAll: IValidationMethod;
  const requiredWithoutAny: IValidationMethod;
  const same: IValidationMethod;
  const startsWith: IValidationMethod;
  const string: IValidationMethod;
  const under: IValidationMethod;
  const url: IValidationMethod;
  const after: IValidationMethod;
  const before: IValidationMethod;
  const date: IValidationMethod;
  const dateFormat: IValidationMethod;
  const beforeOffsetOf: IValidationMethod;
  const afterOffsetOf: IValidationMethod;
}

export namespace formatters {
  const Vanilla: void;
  const JsonApi: void;
}
