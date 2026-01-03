import {LitElement, css, html} from 'lit'
import {shredditStyles} from "../shreddit-styles.js";

export class FaceplateMenu extends LitElement {
    static get properties() {
        return {
        }
    }

    constructor() {
        super();
    }



    render() {
        return html`
            <ul role="menu"> <slot></slot> </ul>
        `
    }

    static get styles() {
        return [shredditStyles,
            css`
                :host {
    background-color: var(--color-neutral-background-strong);
}
                ul {
    padding: var(--spacing-sm) 0;
    margin: 0;
}
            `]
    }
}

window.customElements.define('faceplate-menu', FaceplateMenu)