var extractEmail = function(data){
    // console.log(data);
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return new Promise ((resolve,reject)=>{
      if (!data.hasOwnProperty('email')){
        reject ("no email provided");
      }
      var startIndex = data.email.search(':');
      var endIndex = data.email.lastIndexOf('\'');
      var email = data.email.slice(startIndex+1,endIndex);
      if(re.test(email)){
          resolve(email);
      }
      resolve(email+" mistakes may be here");
    });
};

module.exports = {
  extractEmail
}
