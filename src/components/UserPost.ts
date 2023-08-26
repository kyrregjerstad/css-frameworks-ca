import html from "./user-post.html?raw";

class UserPost extends HTMLElement {
  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.innerHTML = html;
  }
}

// Define the new element
customElements.define("user-post", UserPost);
