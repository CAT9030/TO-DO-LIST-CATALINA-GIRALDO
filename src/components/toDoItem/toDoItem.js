class ToDoItem extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.task = this.getAttribute('task');
        //this.done = this.getAttribute('done');
        this.render();
       
    }
    


     // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['task'];
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

    deleteSelf(){
        this.remove()
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/toDoItem/styles.css">
        <li class ="item">
        <input type="checkbox" name ="task1" id="task1">
        <label for="task1">${this.task}</label>
        <button>delete</button>
    </li>`

    const button =this.shadowRoot.querySelector('button');
    button.addEventListener('click', ()=>this.deleteSelf())  
    }
    
    }
    
    customElements.define('to-do-item', ToDoItem)
    export default ToDoItem;