box = document.querySelector('.click')

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


spinbox = document.querySelector('.spin')

spinbox.addEventListener('click', () => {
    spinbox.classlist.toggle('start')
})

document.addEventListener('keydown', () => {
    console.log(event.key)
})


