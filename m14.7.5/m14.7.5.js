const resultCard = document.querySelector('.json-res');
const btnRequest = document.querySelector('.btn-request');

window.onload = function(){
    if(localStorage.getItem('cardsStr') !== null){
        resultCard.innerHTML = localStorage.getItem('cardsStr');

    }
}
function useRequest(value, value2) {
    fetch(`https://picsum.photos/v2/list?page=${value}&limit=${value2}`)
    .then(function(response){
        response.json().then(function(data){
            let cards = '';
            data.forEach(item => {
                const cardBlock =
                `
            <div class="card">
                <img
                    src="${item.download_url}"
                    class="card-image"
                    alt="alt"/>
                    <p>${item.author}</p>
            </div>
                `
                cards = cards + cardBlock;
           
             })
             resultCard.innerHTML = cards;
             localStorage.setItem('cardsStr', cards);
        })
    })
}
btnRequest.addEventListener('click', function(){
    const pageNum = +document.getElementById('pageNum').value;
    const limit = +document.getElementById('limit').value;
    if (typeof pageNum === "number" && typeof limit === "number" && !isNaN(pageNum) && !isNaN(limit)){
        if(pageNum >=1 && pageNum <= 10 && limit >= 1 && limit <= 10){
            useRequest(pageNum, limit);
        }else if((pageNum < 1 || pageNum > 10) && (limit < 1 || limit > 10)){
            resultCard.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        }else if (pageNum < 1 || pageNum > 10){
            resultCard.innerHTML = 'Номер страницы вне диапазона';
        }else if (limit < 1 || limit > 10){
            resultCard.innerHTML = 'Лимит вне диапазона';
        } 
            
        }else {
            resultCard.innerHTML = 'Введите число'
    }
})