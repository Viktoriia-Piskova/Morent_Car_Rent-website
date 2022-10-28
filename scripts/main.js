'use strict'
import {carsData} from './carsData.js'



//liked item
let icon = document.querySelector('.like-btn');
icon.onclick = function(){
  icon.classList.toggle('active');
}

console.log(carsData);