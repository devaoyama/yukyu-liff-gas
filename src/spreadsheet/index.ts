const spreadsheet = (lineID: string, name: string, date: string, days: "1日" | "半日", reason: string) => {
    // スプレッドシートを取得
    const spreadsheetID = PropertiesService.getScriptProperties().getProperty('spreadsheet_id');
    const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
    let sheet = spreadsheet.getSheetByName(lineID);

    if (!sheet) {
        // シートが存在しなかったら作成
        sheet = spreadsheet.insertSheet(lineID);
        sheet.getRange('A1:B2').setValues([['名前', '実際の名前'], [name, '']]);
        sheet.getRange('A4:C4').setValues([['日時', 'タイプ', '理由']]);
        sheet.getRange('A5:A').setNumberFormat('YYYY-MM-DD');
        const rule = SpreadsheetApp.newDataValidation().requireValueInList(['1日', '半日']).build();
        sheet.getRange('B5:B').setDataValidation(rule);
    }

    // シートに情報を保存
    sheet.appendRow([date, days, reason]);
}

export default spreadsheet;
