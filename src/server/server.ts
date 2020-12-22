declare var global: any;

global.doGet = () => {
    return HtmlService.createHtmlOutput('<div>Hello GAS</div>');
}
