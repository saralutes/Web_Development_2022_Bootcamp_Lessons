function fibonacciGenerator (n) {
    var output = [];

    if (n === 1){
        output.push(0);
       return output
    }
    else if (n === 2) {
        output.push(0,1);
       return output
    }
    else if (n > 2) {
        output = [0, 1];

        for ( var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length -1]);
        }
//        (my original solution)
//               output.push(0,1);
//               var i = output.length;
        
//               while (i < n) { 
//                 var lastItem = output[output.length -1];
//                 var secLastItem = output[output.length -2];
//                 output.push(lastItem + secLastItem)
//                 var i = output.length;
        }
        return output
    }
