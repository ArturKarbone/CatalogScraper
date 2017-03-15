// takes emeail generating-hiding script like this:

//<script type="text/javascript">
    /*<![CDATA[*/
//    eval(
//        "var a=\"Za3oIUF7@JwxBlsHQzcX5rd8e0gNT2VEm4MvpnfWCtOyj9-SuG.hD+LPqiR_6AkYb1K\";var b=a.split(\"\").sort().join(\"\");var c=\"SRtLGytFUl+tGD3RA\";var d=\"\";for(var e=0;e<c.length;e++)d+=b.charAt(a.indexOf(c.charAt(e)));document.getElementById(\"e809006831\").innerHTML=\"<button class=\\\"btn btn-small\\\" onclick=\\\" document.location.href = 'mailto:\"+d+\"'  \\\">E-mail<i class=\\\"myicon-envelope myicon-blue\\\"></i></button>\""
//    ) /*]]>*/
//</script>
// ***********************************************

// returns this:
// {
//   code: 'Za3oIUF7@JwxBlsHQzcX5rd8e0gNT2VEm4MvpnfWCtOyj9-SuG.hD+LPqiR_6AkYb1K',
//   key: 'SRtLGytFUl+tGD3RA'
// }

parseScript = (script) => {
    return new Promise((resolve, reject) => {
        if ((typeof script) !== 'string') {
            reject('Must provide a string form of email hidinng script');
        }
        var arr = script.split('\\');
        var code = arr[1].slice(1);
        var key = arr[7].slice(1);
        if ((code.length > 3) && (key.length > 3)) {
            resolve({
                code: code,
                key: key
            });
        }
    });
}

module.exports = {
  parseScript
}
