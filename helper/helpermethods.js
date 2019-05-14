// helper function
function isUpperCase(char){
    var code = char.charCodeAt(0);
    if (!/[A-Z]/g.test(char)) { // numeric (A-Z)
        return false;
    }
    return true;
}

function isLowerCase(char){
    var code = char.charCodeAt(0);
    if (!/[a-z]/g) { // numeric (a-z)
        return false;
    }
    return true;
}

module.exports = {isUpperCase, isLowerCase};