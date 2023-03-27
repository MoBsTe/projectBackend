
const btn = document.querySelectorAll('.btn');
const text = document.querySelector('p');
let res;

btn.forEach((e) => {
    e.addEventListener('click', () => {
        res = e.value;
        console.log(res);
        if (res === random) {
            text.textContent = 'Вы выиграли!';
        } else {
            text.textContent = 'Попробуйте еще раз!';
        }
    })
})


const numbers = [1, 2, 3, 4, 5];
let random = '';


for (let i = 0; i < 1; ++i) {
    let index = Math.floor(Math.random() * numbers.length);
    random += numbers[index];
    console.log(random);
}
