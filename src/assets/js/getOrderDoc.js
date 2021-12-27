const {sheet_ini} = require('./sheet_ini');

async function getOrderDoc() {
    const doc = await sheet_ini('1Z59yLFvbGaAV53_yYYP0hQpsCr6yPHp17n4Q6WCj1-E');
    
    return doc;
}

module.exports = {
    getOrderDoc,
}