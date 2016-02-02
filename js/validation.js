var Validator = (function () {

    function requiredField(variable) {
        return variable.val().length != 0
    }

    function validateLength(variable, length) {
        length = typeof length == 'undefined' ? 0 : length;
        return variable.val().length >= length;
    }

    function validateAlphaNum(variable) {
        return !variable.val().match(/[^a-z0-9]/gi);
    }

    function validateNumber(variable) {
        return variable.val() == parseInt(variable.val());
    }

    return {
        requiredField: requiredField,
        validateLength: validateLength,
        validateAlphaNum: validateAlphaNum,
        validateNumber : validateNumber
    };

})();

