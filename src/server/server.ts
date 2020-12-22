declare var global: any;

global.doGet = () => {
    return HtmlService.createHtmlOutputFromFile('index');
}
