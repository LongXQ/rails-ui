import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ShRedditApp extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
        <slot></slot>
    `
  }

  static get styles() {
      return css`
          :host {
              display: block;
          }
      `
  }
}

window.customElements.define('shreddit-app', ShRedditApp)
