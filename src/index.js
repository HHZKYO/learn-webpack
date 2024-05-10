import './style.css'
import axios from 'axios';
import * as vue from 'vue'
import React from 'react'
import ReactDom from 'react-dom'

console.log('axios', axios)
console.log('vue', vue)
console.log('React', React)
console.log('ReactDom', ReactDom)

const h1 = document.createElement('h1')
h1.innerText = 'hello world'
h1.className = 'title'
document.body.appendChild(h1)