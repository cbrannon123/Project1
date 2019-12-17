var total = [];

var inpt1 = document.getElementById('input1');
var output = document.getElementById('output');
var sum = document.getElementById('sum');
var subtract = document.getElementById('subtract');

sum.addEventListener('click', getTotal);
subtract.addEventListener('click', getNeg)


function getTotal() {
        total.push(parseInt(inpt1.value));  
        output.innerHTML = total.reduce(function(sum1, sum2) {
           return sum1 += sum2;
        });
        if (output.innerHTML >= 0) {
          
       }
       
    }

    function getNeg() {
        total.push(parseInt(inpt1.value));
        output.innerHTML -= input1.value;
        
        if( output.innerHTML < 0){
         output.style.color = "red"
        };


