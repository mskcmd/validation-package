export declare class ValidationError extends Error {
    constructor(message: string);
}
export declare function isString(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isPassword(value: any, minLength?: number): boolean;
export declare function isLocation(value: any, maxLength?: number): boolean;
export declare function isPostalCode(value: any, country?: string): boolean;
export declare function isDate(value: any, format?: string): boolean;
export declare function isURL(value: any): boolean;
export declare function isPositiveNumber(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isEmail(value: any): boolean;
export declare function isPhoneNumber(value: any): boolean;
