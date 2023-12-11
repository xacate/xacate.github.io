if (process.env.NODE_ENV==='development'){
    module.exports = require('./lib/xplugins')
} else {
    module.exports = require('./lib/xplugins.min')
}
