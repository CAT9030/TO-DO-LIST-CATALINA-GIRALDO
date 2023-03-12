/// Import here all of your customComponents
import "./components/sectionExampleComponent/sectionExampleComponent.js";
import "./components/sectionComponent/sectionComponent.js"
import "./components/toDoItem/toDoItem.js"


// general code from the app that doesn't belong to any compoenent
const bgButton = document.getElementById('background-button');
bgButton.addEventListener('click', ()=> changeBg())

const toDoListBtn = document.getElementById('to-do-btn')
toDoListBtn.addEventListener('click', ()=> addItem())

const toDoList= document.getElementById('to-do-list')

function addItem(){

    const inputValue = document.getElementById('create-to-do').value
    

    const toDoItem= document.createElement('to-do-item')
    toDoItem.setAttribute('task', inputValue)

    toDoList.append(toDoItem)

    inputValue = ''
}

function changeBg(){
    console.log('change bg')
    const section = document.querySelector('section-example-component')
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    section.setAttribute('background', randomColor)
}