let counterEl = document.querySelector('#counter-el');
let decreaseEl = document.querySelector('#decrease-el');
let resetEl = document.querySelector('#reset-el');
let increaseEl = document.querySelector('#increase-el');
let count = 0;

function printCount(){
    increaseEl.addEventListener('click', function(){
        count += 1;
        counterEl.innerHTML = count;
        if (count < 1){
            counterEl.style.color = 'red';
        } else{
            counterEl.style.color = 'green';
        }
    });
    
    decreaseEl.addEventListener('click', function(){
        count -= 1;
        counterEl.innerHTML = count;
        counterEl.style.color = 'red';
    });

    resetEl.addEventListener('click', function(){
        count = 0;
        counterEl.innerHTML = count; 
        counterEl.style.color = 'purple';
    });
}

printCount();