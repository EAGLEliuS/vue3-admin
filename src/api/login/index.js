import { service, apiUrl } from "../common";
export function loginApi(params) {
    return service({
        url: apiUrl.backstage,
        data: params,
        method: 'POST'
    })
}