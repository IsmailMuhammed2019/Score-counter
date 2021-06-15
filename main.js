let count = 0;

let score = document.querySelector('.scorea');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn => {

    btn.addEventListener('click', (e) => {
        let styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
            
        }else if(styles.contains('increase')){
            count++;
        }else {
            count = 0;
        }
        score.textContent = count;
    }
    )
    
});