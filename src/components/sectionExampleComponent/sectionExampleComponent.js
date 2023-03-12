class SectionExampleComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // This methos is called once the component is created
  connectedCallback() {
    this.render();
  }

  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['title', 'description', 'background'];
  }

  // this is called when any of the observedAttributes changes
  attributeChangedCallback(propName, oldValue, newValue) {
    console.log('attr ' + propName + ' changed')
    this[propName] = newValue;
    this.render();
  }

  // this is our main html for the component, and is reRendered when attr changes
  render() {
    this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/SectionExampleComponent/styles.css">
          <section style="background-color: ${this.background}">
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <slot></slot>
          </section>
          `;
  }
}

customElements.define('section-example-component', SectionExampleComponent);
export default SectionExampleComponent;
