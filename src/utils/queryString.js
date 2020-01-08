import qs from 'qs';

export function parseQueryString(queryString) {
    return qs.parse(queryString);
}

export function makeQueryString(paramObject) {
    return qs.stringify(paramObject);
}
