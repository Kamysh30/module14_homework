function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url , true);
    xhr.onload = function(){
        if(xhr.status != 200) {
            console.log('Статус: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }
    xhr.onerror = function() {
        console.log('Ошибка! Статус: ', xhr.status);
    }
    xhr.send();
}
const resultCard = document.querySelector('.json-res');
const btnRequest = document.querySelector('.btn-request')

function resultDisplay(apiData){
    let cards = '';
    apiData.forEach(item =>{
        const cardBlock = `
        <div class="card">
        <img src = "$(item.downolad_url}"
        class = "card-image">
        <p>${item.author}</p>
        </div>
        `
        cards = cardBlock;
    });
    resultCard.innerHTML = cards;
}

btnRequest.addEventListener('click',()=> {
    let number = document.querySelector('input').value
    if (1 <= number && number <= 10 ){
        let myUrl = `https://picsum.photos/v2/list?limit=${number}`
        useRequest(myUrl, resultDisplay);
  

    } else {
        resultCard.innerHTML = 'Число должно быть от 1 до 10';
    }
})