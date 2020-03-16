type SheetName = "config";

function main() {
    const config = importConfigFromSheet('config');
    Logger.log(config);
}

function importConfigFromSheet(sheetName: SheetName) {
    const config: {[key: string]: string} = {};
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
        const range = sheet.getRange("A:B").getValues();
        range
            .filter(([key, value]) => key && value)
            .forEach(([key, value]) => {
                config[key.toString()] =value.toString();
            });
    }
    return config;
}