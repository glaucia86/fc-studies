/**
 * file: src/ShareButtonLinkedin.ts
 * description: file responsible for the ShareButtonLinkedin class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedin extends AbstractShareButton {
  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/shareArticle?url=${this.url}`
  }
}