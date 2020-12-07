/*
 * External types
 * -------------------------------------------------------------------------------------------------
 */

export const doesNotThrow: (fn: Function) => void;

export const equal: <T>(a: any, b: T) => asserts a is T;

export const notEqual: (a: any, b: any) => void;

export const throws: (fn: Function) => void;
