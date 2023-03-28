
// variables
const btn = document.querySelectorAll('.btn');
const text = document.querySelector('p');


btn.forEach((e) => {
    e.addEventListener('click', () => {
        let res = e.value;
        console.log(res);

        // call the backend to get the variable random 
        axios.get('/url')
            .then((response) => {
                let jsonResponse = (response.data);
                let random = jsonResponse.result;


                console.log(random);
                if (res == random) {
                    text.textContent = 'Вы выиграли!';
                    // res.style.background = 'green';
                } else {
                    text.textContent = 'Попробуйте еще раз!';
                    // res.style.background = 'red';
                }
            })
    })
})








