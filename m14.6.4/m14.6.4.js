const resultCard = document.querySelector('.json-res')
const btnRequest = document.querySelector('.btn-request')

function useRequest(firstNum, secondNum) {
    fetch(`https://picsum.photos/${firstNum}/${secondNum}`)
        .then(function (response) {
            resultCard.innerHTML = `
              <img src="${response.url}"
              alt="alt"/>
          `
        })
}

btnRequest.addEventListener('click', function () {
    const firstNum = +document.querySelector('input[id="firstNum"]').value
    const secondNum = +document.querySelector('input[id="secondNum"]').value
    if (typeof firstNum && typeof secondNum === "number" && !isNaN(firstNum) && !isNaN(secondNum)) {
        if (firstNum >= 100 && firstNum <= 300 && secondNum >= 100 && secondNum <= 300) {
            useRequest(firstNum, secondNum)
        } else {
            resultCard.innerHTML = 'числа вне диапазона от 100 до 300'
        }
    }
})