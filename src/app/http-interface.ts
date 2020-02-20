export interface HttpInterface {
    get(url);
    post(url, data?);
    put(url, data?);
    path(url, data?);
}
