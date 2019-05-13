// helper function
function isUpperCase(char){
    let code = char.charCodeAt(0);
    if (!(code >64 && code < 91)) { // numeric (A-Z)
        return false;
    }
    return true;
}

function isLowerCase(char){
    let code = char.charCodeAt(0);
    if (!(code > 96 && code < 123)) { // numeric (a-z)
        return false;
    }
    return true;
}

module.exports = {isUpperCase, isLowerCase};