box = document.querySelector('.click')
spinbox = document.querySelector('.spin')
movebox = document.querySelector('.move')
hoverbox = document.querySelector('.hover')
dblbox = document.querySelector('.dblclick')



colors = ['magenta', 'teal', 'cyan', 'grey', 'pink']
index = 0;

box.addEventListener('click', () => {
    box.style.background = colors[index]
    index = index + 1;
    if (index == colors.length) {
        index = 0
    }
    box.style.color = 'white'
})


spinbox.addEventListener('click', () => {
    spinbox.classList.toggle('start')
})

x=0
y=0

document.addEventListener('keydown', () => {
            if (event.key == 'ArrowRight') {
                x = x + 10;
                movebox.style.transform = `translate(${x}px, ${y}px)`
            }
            if (event.key == 'ArrowUp') {
                y = y - 10;
                movebox.style.transform = `translate(${x}px, ${y}px)`
            }
            if (event.key == 'ArrowLeft') {
                x = x - 10;
                movebox.style.transform = `translate(${x}px, ${y}px)`
            }
            if (event.key == 'ArrowDown') {
                y = y + 10;
                movebox.style.transform = `translate(${x}px, ${y}px)`
            }
})


hoverbox.addEventListener('mouseenter', ()=> {
    box.style.width = "100px"
    box.style.height = "50px"
})


hoverbox.addEventListener('mouseleave', ()=> {

})
