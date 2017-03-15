// takes this:
// {
//   code: 'Za3oIUF7@JwxBlsHQzcX5rd8e0gNT2VEm4MvpnfWCtOyj9-SuG.hD+LPqiR_6AkYb1K',
//   key: 'SRtLGytFUl+tGD3RA'
// }
// ************************
// returns this:
// granica32@mail.ru

decodeEmail = (a, c) => {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return new Promise((resolve, reject) => {
        var email = "";
        var b = a.split("").sort().join("");
        for (var e = 0; e < c.length; e++) {
            email += b.charAt(a.indexOf(c.charAt(e)))
        };
        console.log(email);
        if (re.test(email)) {
            resolve(email);
        }
        resolve(email + " parsing errors are possible");
    });
};

module.exports={
  decodeEmail
}
