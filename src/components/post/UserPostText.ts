import html from "./user-post-text.html?raw";

class UserPostText extends HTMLElement {
  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.innerHTML = html;
  }
}

// Define the new element
customElements.define("user-post-text", UserPostText);
