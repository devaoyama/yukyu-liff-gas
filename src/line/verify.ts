import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import * as qs from "querystring";

const verify = (idToken: string) => {
    const payload = {
        id_token: idToken,
        client_id: process.env.LINE_CHANNEL_ID,
    };
    const options: URLFetchRequestOptions = {
        method: "post",
        payload: qs.stringify(payload),
        muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch('https://api.line.me/oauth2/v2.1/verify', options);
    if (response.getResponseCode() !== 200) {
        console.log(response.getContentText());
        return null;
    }
    return JSON.parse(response.getContentText());
};

export default verify;
