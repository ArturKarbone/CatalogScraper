// wrapper for parseScript and decodeEmail
var {parseScript} = require('./parse-script');
var {decodeEmail} = require('./decode-email');

getEmail = (data) => {
    return new Promise((resolve, reject) => {
        parseScript(data).then(
            (codeKeyObj) => {
                decodeEmail(codeKeyObj.code, codeKeyObj.key).then(
                    (cleanEmail) => {
                        resolve(cleanEmail);
                    }
                )
            }
        ).catch((e) => {
            console.log(e);
        });
    });
};

module.exports = {
  getEmail
}
