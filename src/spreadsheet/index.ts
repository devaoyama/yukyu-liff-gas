const spreadsheet = (lineID: string, name: string, date: string, days: "1日" | "半日", reason: string) => {
    // スプレッドシートを取得
    const spreadsheetID = PropertiesService.getScriptProperties().getProperty('spreadsheet_id');
    const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
    let sheet = spreadsheet.getSheetByName(lineID);
    let homeSheet = spreadsheet.getSheetByName('ホーム');

    if (!homeSheet) {
        homeSheet = spreadsheet.insertSheet('ホーム');
        homeSheet.getRange('A1:C1').setValues([['LINEの名前', '実際の名前', 'シートのURL']]);
    }

    if (!sheet) {
        // シートが存在しなかったら作成
        sheet = spreadsheet.insertSheet(lineID);
        sheet.getRange('A1:B2').setValues([['LIENの名前', '実際の名前'], [name, '']]);
        sheet.getRange('A4:C4').setValues([['日時', 'タイプ', '理由']]);
        sheet.getRange('A5:A').setNumberFormat('YYYY-MM-DD');
        const rule = SpreadsheetApp.newDataValidation().requireValueInList(['1日', '半日']).build();
        sheet.getRange('B5:B').setDataValidation(rule);

        // ホームシートにシートの情報をセット
        let sheetId = sheet.getSheetId().toString();
        homeSheet.appendRow([
            `=${lineID}!A2`,
            `=${lineID}!B2`,
            `https://docs.google.com/spreadsheets/d/${spreadsheetID}/edit#gid=${sheetId}`,
        ]);
    }

    // LINEの名前を更新
    sheet.getRange('A2').setValue(name);
    // シートに情報を保存
    sheet.appendRow([date, days, reason]);
}

export default spreadsheet;
