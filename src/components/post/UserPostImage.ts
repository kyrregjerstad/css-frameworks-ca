import html from "./user-post-image.html?raw";

class UserPostImage extends HTMLElement {
  static get observedAttributes() {
    return ["img-url"];
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(name: string): void {
    if (name === "img-url") {
      this.render();
    }
  }

  get imgUrl(): string {
    return this.getAttribute("img-url") || "default_image_path.jpg";
  }

  render(): void {
    this.innerHTML = html.replace("undefinedImgUrl", this.imgUrl);
  }
}

// Define the new element
customElements.define("user-post-image", UserPostImage);
