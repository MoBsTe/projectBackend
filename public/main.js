
const btn = document.querySelectorAll('.btn');
const text = document.querySelector('p');


btn.forEach((e) => {
    e.addEventListener('click', () => {
        let res = e.value;
        console.log(res);

        axios.get('/url')
            .then((response) => {
                let random = response.data;

                console.log(random);
                if (res == random) {
                    text.textContent = 'Вы выиграли!';
                } else {
                    text.textContent = 'Попробуйте еще раз!';
                }
            })
    })
})








