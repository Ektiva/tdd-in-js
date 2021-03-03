function add (input) {
       return operation(input, function (result, input) {
            return result + input;
        })
}

function substract (input) {
    try{
        return operation(input, function (result, input) {
            return result - input;
        })
    } catch {
        return "Cannot substract two strings"
    }   
}

function multiple (input) {
    return operation(input, function (result, input) {
        if(!Number.isFinite(result * input))
        {
            return "Error"
        }
        return result * input;
    }) 
}

function modulo (input) {
    return operation(input, function (result, input) {
        if(input  === 0 || !Number.isFinite(result % input) )
        {
            return "Error"
        }
        return result % input;
    }) 
}

function exponential (input) {
    return operation(input, function (result, input) {
        if(!Number.isFinite(result ** input) )
        {
            return "Error"
        }
        return result ** input;
    }) 
}

function divide (input) {
    try{
        return operation(input, function (result, input) {
            if(input  === 0 || result  === "Can not divide by zero"){
                return "Can not divide by zero"
            }
            else if (!Number.isFinite(result / input)) {
                return "Error";
            }
            return result / input;
        })
        
    } catch {
        return "Cannot divide those things"
    }
    
}

function operation(input, operator) {
    try{
        var result = input.shift();
        for (i = 0; i < input.length; i++) {
            result = operator(result, input[i]);
        }
    
        return result;
    }  catch {
        return "Cannot perform this operation"
    }

}


module.exports = { add, substract, divide, multiple, modulo, exponential, operation}