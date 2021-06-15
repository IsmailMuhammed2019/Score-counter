let count = 0;
let countb = 0

let score = document.querySelector('.scorea');
let scoreb = document.querySelector('.scoreb');
let btns = document.querySelectorAll('.btn');
let warning = document.querySelector('#warning');
let warning1 = document.querySelector('#warning1');

btns.forEach(btn => {

    btn.addEventListener('click', (e) => {
        let styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            
        }else if(styles.contains('increase')){
            count++;
        }else if (styles.contains('decreaseb')){
            countb--;
        }else if (styles.contains('increaseb')){
            countb++;
        }else {
            count = 0;
            countb = 0;
            warning.textContent = " ";
            warning1.textContent = " ";
        }
        score.textContent = count;
        scoreb.textContent = countb;

        if((count < 0)){
            score.style.color = "red";
            warning.textContent = "You are losing the Game"
        }else if((count > 0)){
            score.style.color = "green";
            warning.textContent = "You are winning the Game"
        }else if(countb < 0){
            scoreb.style.color= "red";
            warning1.textContent = "You are losing the Game"
        }else if (countb > 0){
            scoreb.style.color = "green"
            warning1.textContent = "You are winning the Game"
        }
        else{
            score.style.color = "grey";
            scoreb.style.color= "grey";
        }
    }
    )
    
});