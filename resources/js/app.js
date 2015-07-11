$(document).ready(function(){
    var add = function(a, b){
        thisReg = (+thisReg)+(+nextReg);
        nextReg = undefined;
    };
    var sub = function(){
        thisReg = (+thisReg)-(+nextReg);
        nextReg = undefined;
    };
    var mul = function(){
        thisReg = (+thisReg)*(+nextReg);
        nextReg = undefined;
    };
    var div = function(){
        thisReg = (+thisReg)/(+nextReg);
        nextReg = undefined;
    };
    var mod = function(){
        thisReg = (+thisReg)%(+nextReg);
        nextReg = undefined;
    };
    var addDigit = function(n) {
        if (nextReg === undefined) {
            nextReg = n;
        } else {
            nextReg = nextReg.toString() + n;
        }
    };
    var displayNextReg = function(){
        display.text(nextReg === undefined? 0:nextReg);
    };
    var displayThisReg = function(){
        display.text(thisReg === undefined? 0:thisReg);
    };
    var buttonFunction = function(operatorFunction){
        console.log('hey');
        if (thisReg === undefined && nextReg !== undefined) {
            operator = operatorFunction;
            thisReg = nextReg;
            nextReg = undefined;
            displayNextReg();
        } else if (thisReg !== undefined && nextReg !== undefined && operator){
            operator();
            operator = operatorFunction;
            displayThisReg();
        } else if (thisReg !== undefined && nextReg === undefined) {
            operator = operatorFunction;
            displayNextReg();
        }
    };
    var display = $('#display');
    var operator = undefined;
    var thisReg = undefined;
    var nextReg = undefined;

    $('#one').on('click',function(){
        addDigit(1);
        displayNextReg();
    });
    $('#two').on('click',function(){
        addDigit(2);
        displayNextReg();
    });
    $('#three').on('click',function(){
        addDigit(3);
        displayNextReg();
    });
    $('#four').on('click',function(){
        addDigit(4);
        displayNextReg();
    });
    $('#five').on('click',function(){
        addDigit(5);
        displayNextReg();
    });
    $('#six').on('click',function(){
        addDigit(6);
        displayNextReg();
    });
    $('#seven').on('click',function(){
        addDigit(7);
        displayNextReg();
    });
    $('#eight').on('click',function(){
        addDigit(8);
        displayNextReg();
    });
    $('#nine').on('click',function(){
        addDigit(9);
        displayNextReg();
    });
    $('#zero').on('click',function(){
        addDigit(0);
        displayNextReg();
    });
    $('#decimal').on('click',function(){
        addDigit('.');
        displayNextReg();
    });
    $('#add').on('click', function(){buttonFunction(add)});
    $('#sub').on('click', function(){buttonFunction(sub)});
    $('#mult').on('click', function(){buttonFunction(mul)});
    $('#div').on('click', function(){buttonFunction(div)});
    $('#mod').on('click', function(){buttonFunction(mod)});
    $('#equal').on('click', function(){
        if (thisReg !== undefined && nextReg !== undefined && operator) {
            operator();
            displayThisReg();
        }
    });
    $('#ac').on('click', function(){
        operator = undefined;
        thisReg = undefined;
        nextReg = undefined;
        displayNextReg();
    });
    $('#ce').on('click', function(){
        nextReg = undefined;
        displayNextReg();
    });
});