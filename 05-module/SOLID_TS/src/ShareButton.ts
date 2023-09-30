/**
 * file: src/ShareButton.ts
 * description: file responsible for the ShareButton class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class ShareButton {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  bind(className: string, socialNetwork: string) {
    let link: string;

    if (socialNetwork === "twitter") {
      link = `https://twitter.com/share?url=${this.url}`;
    }

    if (socialNetwork === "linkedin") {
      link = `https://www.linkedin.com/shareArticle?url=${this.url}`;
    }

    if (socialNetwork === "facebook") {
      link = `https://www.facebook.com/sharer.php?u=${this.url}`;
    }

    const elements: any = document.querySelectorAll(className);

    for (const element of elements) {
      element.addEventListener("click", () => window.open(link));
    }
  }
}