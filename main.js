const coin = document.querySelector('#coin')
const scoreEl = document.querySelector('#score')
const buyUpgrate = document.querySelector('#buyUpgrate')
const massage = document.querySelector('#massage')
const buyboost = document.querySelector('#buyBoost')

let score = 0
let clickValue = 1
let uprageCost = 100
let boostCost = 50
let boostDuration = 5000


coin.addEventListener('click', () =>{
score += clickValue
scoreEl.innerText = score

} )

buyUpgrate.addEventListener('click', () =>{
    if(score >= uprageCost) {
        score -= uprageCost
        scoreEl.innerText = score
        clickValue++
        uprageCost = Math.floor(uprageCost * 1.5)
        buyUpgrate.innerText = `Купить улучшение (${uprageCost} коинов)`

        massage.innerText = 'Вы успешно купили улучшение🙌🏿'
    }
    else{
        massage.innerText = 'не достаточно средств для улучшения' 
    }
})

buyboost.addEventListener('click', () =>{
    if(score >= boostCost) {
        score -= boostCost
        clickValue *= 2
        massage.innerText = 'вы успешно купили буст'

        setTimeout(() => {
            clickValue = 1
            massage.innerText = 'буст закончился'
        }, boostDuration);
    
    } else{
        massage.innerText = 'не достаточно средств для буста' 
    }
})