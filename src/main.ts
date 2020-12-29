import verify from "./line/verify";
import spreadsheet from "./spreadsheet";

declare var global: any;

global.doGet = () => {
    return HtmlService.createHtmlOutput('Hello Gas!');
}

global.doPost = (e) => {
    const data = JSON.parse(e.postData.getDataAsString());
    if (!data.idToken) {
        return ContentService.createTextOutput('IDトークンが見つかりません');
    }
    if (!data.date) {
        return ContentService.createTextOutput('dateが見つかりません');
    }
    if (!data.days) {
        return ContentService.createTextOutput('daysが見つかりません');
    }
    if (!data.reason) {
        return ContentService.createTextOutput('reasonが見つかりません');
    }
    const res = verify(data.idToken);
    if (!res) {
        return ContentService.createTextOutput('IDトークンを認証できません');
    }
    spreadsheet(res.sub, res.name, data.date, data.days, data.reason);
    return ContentService.createTextOutput('ok');
}
