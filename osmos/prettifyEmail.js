var extractEmail = require('./extract-email');


makeEmailPretty = (object) => {
    extractEmail.extractEmail(object).then((email) => {
        console.log(email);
        object.email = email;
        return;
    }).catch((error) => {
        console.log('Error while prettifieng email: ', error);
    });
};

module.exports = {
    makeEmailPretty
}
