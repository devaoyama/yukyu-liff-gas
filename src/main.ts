declare var global: any;

global.doGet = () => {
    return HtmlService.createHtmlOutput('Hello Gas!');
}
