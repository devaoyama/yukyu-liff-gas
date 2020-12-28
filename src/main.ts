import verify from "./line/verify";

declare var global: any;

global.doGet = () => {
    return HtmlService.createHtmlOutput('Hello Gas!');
}

global.doPost = (e) => {
    const data = JSON.parse(e.postData.getDataAsString());
    if (!data.idToken) {
        return ContentService.createTextOutput('IDトークンが見つかりません');
    }
    const res = verify(data.idToken);
    if (!res) {
        return ContentService.createTextOutput('IDトークンを認証できません');
    }
    return ContentService.createTextOutput(res);
}
