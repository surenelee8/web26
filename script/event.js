box = document.querySelector('.click')
spinbox = document.querySelector('.spin')
movebox= document.querySelector('.move')


colors = ['magenta', 'teal', 'cyan', 'grey', 'pink']
index = 0;

box.addEventListener('click', () => {
    box.style.background = colors[index]
    index = index+1;
    if (index == colors.length){
        index = 0
    }
    box.style.color = 'white'
})


spinbox.addEventListener('click', () => {
    spinbox.classlist.toggle('start')
})

document.addEventListener('keydown', () => {
    if (event.key == 'ArrowRight') {
        movebox.style.transform = 'translate(10px)'
    }
})


