function understandBasicClosures(){
    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(
        function value(){
            console.log(i);    
        });
    }
    return arr;
}


var arr = understandBasicClosures();
/**
prints the current value of i. This binding of variable i that's not exactly
in the context of the executing function is called -- closure.
**/
arr[0]();
arr[1]();
arr[2]();


function understandingInlineClosures(){
   var arr=[];
   for(var i=0;i<3;i++){
        arr.push(
            function value(j){
                return function(){
                        console.log(j);
                        }
        }(i)
        );
        
    }
    return arr;  
}


arr = understandingInlineClosures();
/**
prints value of i at the time of execution.
**/
arr[0]();
arr[1]();
arr[2]();