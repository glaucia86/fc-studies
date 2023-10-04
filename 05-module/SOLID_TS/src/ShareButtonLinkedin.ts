/**
 * file: src/ShareButtonLinkedin.ts
 * description: file responsible for the ShareButtonLinkedin class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/shareArticle?url=${this.url}`
  }
}