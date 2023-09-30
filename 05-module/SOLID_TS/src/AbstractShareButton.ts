/**
 * file: src/AbstractShareButton.ts
 * description: file responsible for the AbstractShareButton class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  className: string;
  url: string;

  constructor(className: string, url: string) {
    this.url = url;
    this.className = className;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind() {
    const link: string = this.createLink();

    this.eventHandler.addEventListenerToClass(this.className, "click", () => window.open(link));
  }
}

