module.exports = function (callback) {
    var message = 'Hello from Node js script at ' +
        new Date().toString() + ' process.versions ' +
        process.version;
    callback(/* error */ null, message);
};
