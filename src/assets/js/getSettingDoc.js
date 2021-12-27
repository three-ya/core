const {sheet_ini} = require('./sheet_ini');

async function getSettingDoc() {
    const doc = await sheet_ini('105DU2R-OCpmozw_CoA3dXFMdJHwl8-982jBzmKyBKSg');
    
    return doc
}

module.exports = {
    getSettingDoc,
}