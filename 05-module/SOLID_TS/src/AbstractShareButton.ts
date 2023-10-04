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

  constructor(eventHandler: EventHandler, className: string) {
    this.className = className;
    this.eventHandler = eventHandler;
  }

  abstract createAction(): any;

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
}

