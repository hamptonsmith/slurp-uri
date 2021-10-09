'use strict';

const getUri = require('get-uri');
const streamToArray = require('stream-to-array');

module.exports = async (uri, { getUriOptions = {}, encoding } = {}) => {
    const stream = await new Promise((resolve, reject) => {
        getUri(uri, getUriOptions, (err, stream) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(stream);
            }
        });
    });

    const buffer = Buffer.concat(await streamToArray(stream));

    let result;
    if (encoding) {
        result = buffer.toString(encoding);
    }
    else {
        result = buffer;
    }

    return result;
};
