//  alert("hewy")
 (function(){
   let screen = document.querySelector('.screen');
   let button = document.querySelectorAll('.btn');
   let clear = document.querySelector('.btn-clear');
   let equal = document.querySelector('.btn-equal');
   let erase = document.querySelector('.btn-erase');

   button.forEach(function(button)
   {
    button.addEventListener('click', function(e)
    {
        let value = e.target.dataset.num;
        screen.value += value;
    })
   });
   equal.addEventListener('click', function(e){
    if(screen.value == ''){
        screen.value = "";
    }
    else{
        let ans = eval(screen.value);
        screen.value = ans;
    }
   })
   clear.addEventListener('click',function(e)
   {
    if(screen.value == screen.value)
    {
        screen.value = "";
    }
   })
   erase.addEventListener('click',function(e){
    if(screen.value == screen.value)
    {
        screen.value = null;
    }
   })

})();