import './style.css'
import png from './images/1.png'

const h1 = document.createElement('h1')
const img = document.createElement('img')

img.src = png
h1.innerText = 'hello world'
h1.className = 'title'
document.body.appendChild(h1)
document.body.appendChild(img)

const button = document.createElement('button')
button.innerText = '懒加载'
button.addEventListener('click', () => {
    import('./a.js').then(({a}) => {
        console.log(a)
    }, () => {})
})
document.body.appendChild(button)