## How to create Excel via Suitescript

1. Add json_conf.json and netsuiteExcelSample.js to filecabinet (I have added them both in the same folder)
2. Download xlsx.full.min.js from: https://github.com/SheetJS/sheetjs
3. Add xlsx.full.min.js to Filecabinet (I have added it to: Libraries/External folder)
4. Create a custom record in Netsuite : Customization > List > Record & Fields > Record Types > New
5. Create new script in Netsuite and link it to the newly created custom record in step 4
6. When you edit the custom record and save it, it will create a Excel file in the folder which you pointed it to in the script (FOLDER ID)
