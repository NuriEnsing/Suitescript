/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NAmdConfig /SuiteScripts/Your Folder//json_conf.json
 *
 * @author Nuri Ensing
 * @module N/file
 * @module xlsx
 *
 *
 * @description Generate excel files
 * @references libraries used: SheetJS https://docs.sheetjs.com/docs/example
 * @references extra samples: https://nserpsolutions.com/suitescript/scheduled-script/read-create-modify-excel-files-in-suitescript-using-sheetjs/
 */

define(["N/file", "xlsx"], function (file, xlsx) {
    /**
     * @function createExcelFileWithJsonData
     * @description Create a Excel file with a named sheet and  populate json data inside the excel file
     */
    function createExcelFileWithJsonData() {
        try {
            //data which will be populated in the Excel
            let rows = [
                { name: "George Washington", birthday: "1732-02-22" },
                { name: "John Adams", birthday: "1735-10-19" }
            ];
            //your folder id where you want the Excel file to be saved
            const FOLDER_ID = 6799;

            const workbook = xlsx.utils.book_new();
            const worksheet = xlsx.utils.json_to_sheet(rows);

            //create Excel sheet
            workbook.SheetNames.push("sheetName");
            workbook.Sheets["sheetName"] = worksheet;

            let workbookOutput = xlsx.write(workbook, {
                booktype: "xlsx",
                type: "base64"
            });

            let excelFile = file.create({
                name: "testnuri2.xlsx",
                fileType: file.Type.EXCEL,
                contents: workbookOutput,
                folder: FOLDER_ID
            });

            return excelFile.save();
        } catch (e) {
            log.error({
                title: e.name,
                details: e.message
            });
        }
    }

    return {
        afterSubmit: createExcelFileWithJsonData
    };
});
