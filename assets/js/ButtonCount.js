class ButtonCount extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        let counter = 0;
        let countBtn = document.createElement('button');
        countBtn.textContent = 'Click to increase button-click count:';

        let counterWrapper = document.createElement('div');
        counterWrapper.textContent = counter;
        countBtn.appendChild(counterWrapper);

        //styling for button-count
        countBtn.style.padding = '1rem';
        countBtn.style.margin = '1rem';
        countBtn.querySelector('*').style.padding = '0.5rem';

        countBtn.addEventListener('click', () => {
            counterWrapper.textContent = ++counter;
        });


        this.shadowRoot.append(countBtn);
    }
}
customElements.define('button-count', ButtonCount);
