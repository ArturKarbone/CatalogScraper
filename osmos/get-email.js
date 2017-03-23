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
            },
            (noEmail) => {
              //Happens when no e-mail button was on page
              // need to resolve anyway
              resolve('No email happened to be on page');
            }
        ).catch((e) => {
            resolve(e);
            console.log(e);
        });
    });
};

module.exports = {
  getEmail
}
