
const path = require("path");
const fs = require('fs');
const excel = require('exceljs');
/**
 * Excel转Json数据
 * @param {*} src           读取的excel文件目录
 * @param {*} dst           导出的json文件目录
 * @param {*} name          excel文件名
 * @param {*} isClient      是否为客户端数据
 */
async function convert(src, dst, name, isClient) {
    let r = [];
    let names = []; // 文名字段名
    let keys = []; // 字段名
    const workbook = new excel.Workbook();
    // 读取excel
    await workbook.xlsx.readFile(src);
    const worksheet = workbook.getWorksheet(1); // 获取第一个worksheet 
    worksheet.eachRow((row, rowNumber) => {
        let data = {};
        row.eachCell((cell, colNumber) => {
            const value = cell.text;
            if (rowNumber === 1) { // 字段中文名
                names.push(value);
            }
            else if (rowNumber === 2) { // 字段英文名
                keys.push(value);
            }
            else if (rowNumber > 2) {
                let index = colNumber - 1;
                let key = keys[index];
                if (typeof cell.value == 'object' && Object.keys(cell.value).indexOf('richText') != -1) {
                    data[key] = cell.value.richText.map(item => item.text).join("");
                } else {
                    data[key] = cell.value;
                }
            }
        });
        if (rowNumber > 2) {
            r.push(data);
        }
    });
    await fs.writeFileSync(dst, JSON.stringify(r));
}

var inputExcelPath = path.join(__dirname,"/");
var outJsonPathClient = path.join(__dirname, "./json/");
if(!fs.existsSync(outJsonPathClient)){
    fs.mkdirSync(outJsonPathClient);
}
var stat = fs.statSync(outJsonPathClient);
if(!stat.isDirectory()){
    fs.mkdirSync(outJsonPathClient);
}
const files = fs.readdirSync(inputExcelPath);
files.forEach((f) => {
    let name = f.substring(0, f.indexOf("."));
    let ext = f.toString().substring(f.lastIndexOf(".") + 1);
    if (ext == "xlsx") {
        convert(inputExcelPath + f, outJsonPathClient + name + ".json", name, true);
    }
});

