import { service, apiUrl } from "../common";
export function getQuickScreeningReagents() {
    return service({
        url: apiUrl.healthBuureau,
        method: 'GET',
    })
}