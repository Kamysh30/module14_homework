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
        // Опечатка при выводе: подставляемые в шаблонную строку значения должны быть в фигурных скобках. В имени свойства также есть опечатка, из-за этого изображения не отображаются на странице
        const cardBlock = `
        <div class="card">
        <img src = "${item.download_url}"
        class = "card-image">
        <p>${item.author}</p>
        </div>
        `
        cards += cardBlock; // Здесь вы каждый раз переписываете переменную cards, вместо того, чтобы добавлять сгенерированное значение к уже полученным ранее. Из-за этого выводится только одно, последнее изображение
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