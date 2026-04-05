theme = document.querySelector('.theme')
body = document.querySelector('.body')

colors = ['teal', 'coral', 'darkseagreen', 'lemonchiffon', 'Aquamarine', 'maroon', 'lavenderblush']
index = 0;

theme.addEventListener('click', () => {
    document.body.style.background = colors[index]
    index = index + 1;
    if (index == 7) {
        index = 0
    }
})
