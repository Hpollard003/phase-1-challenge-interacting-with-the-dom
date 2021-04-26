//I should see the timer increment every second once the page has loaded.
//Timer 
// timerTicker() => {
//   let num = document.getElementById('counter')
//   let seconds = 0
//   g = ++num
//   return g
// }

document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {

    count.innerText++
  }, 1000
  )
  plus.addEventListener('click', function () {
    count.innerText++
  })
  minus.addEventListener('click', function () {
    count.innerText--
  })
  heart.addEventListener('click', () => {
    list.innerText = (`${count.innerText} has been liked .`)
  })
  pause.addEventListener('click', () => {
    clearInterval(function (event) {
      clearInterval(count.innerText)

    }, 2000)
  })
  comment.addEventListener('click', (e) => {
    e.preventDefault;
    const lister = document.getElementById('list')
    const list = document.querySelector('.comments')
    list.innerText = (`${saveNum.innerText} has been liked .`)

  newComment.addEventListener('sumbit', event => {
    form.innerText = 'hello world'
    event.preventDefault;
    })
  })
});
const newComment = document.getElementById('submit')
const form = document.getElementById('comment-form')
//Plus
const plus = document.getElementById('plus')
//Minus
const minus = document.getElementById('minus')
//Heart (needs work)
const heart = document.getElementById('heart')
//Need help i can only stop the timer at 1
const pause = document.getElementById('pause')
const count = document.getElementById('counter')
const comment = document.getElementById('submit')
const saveNum = document.getElementById('counter')
const list = document.querySelector('.likes')