/*
  Written and shared by Robert Spier
  https://github.com/roberrrt-s
*/

export const isString = (a) => typeof a === 'string'
export const isEmptyString = (a) => isString(a) && a === ''
export const isNonEmptyString = (a) => isString(a) && !isEmptyString(a)
export const isNull = (a) => a === null
export const isUndefined = (a) => a === undefined
export const isNotUndefined = (a) => !isUndefined(a)
export const isNil = (a) => isNull(a) || isUndefined(a)
export const isNotNil = (a) => !isNil(a)
export const isRecord = (a) => isNotNil(a) && typeof a === 'object'
export const isEmptyRecord = (a) => isRecord(a) && Object.entries(a).length == 0
export const isNonEmptyRecord = (a) => !isEmptyRecord(a)
export const isArray = (a) => isNotNil(a) && typeof a === 'object' && a instanceof Array
export const isNonEmptyArray = (as) => isArray(as) && as.length > 0
export const isEmptyArray = (as) => !isNonEmptyArray(as)
export const isFunction = (a) => isNotNil(a) && typeof a === 'function'
