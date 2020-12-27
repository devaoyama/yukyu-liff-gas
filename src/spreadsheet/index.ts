const spreadsheet = (lineID: string) => {
    // スプレッドシートを取得
    const spreadsheetID = PropertiesService.getScriptProperties().getProperty('spreadsheet_id');
    const spreadsheet = SpreadsheetApp.openById(spreadsheetID);
    const sheet = spreadsheet.getSheetByName(lineID);

    // LINEのUSER IDをもとにシートを取得
    if (!sheet) {
        // シートが存在しなかったら作成
    }

    // シートに情報を保存
}

export default spreadsheet;
