container = document.getElementById('container')
text = document.getElementById('text')

totalTime = 7500
breatheTime = (totalTime / 5) * 2
holdTime = (totalTime / 5)

breatheAnimation()

function breatheAnimation() {
    text.innerText= 'Breath In!'
    container.classList.remove('small')
    container.classList.add('grow')

    setTimeout( ()=> {
        text.innerText = 'Hold';

        setTimeout( ()=> {
            text.innerText = 'Breathe Out!';
            container.classList.remove('grow')
            container.classList.add('small')
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
