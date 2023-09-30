/**
 * file: src/EventHandler.ts
 * description: file responsible for the EventHandler class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default class EventHandler {

  addEventListenerToClass(className: string, event: string, fn: any) {
    const elements: any = document.querySelectorAll(className);
    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
