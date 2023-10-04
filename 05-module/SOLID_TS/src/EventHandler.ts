/**
 * file: src/ventHandler.ts
 * description: file responsible for the EventHandler class.
 * date: 09/29/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default interface EventHandler {
    addEventListenerToClass(className: string, event: string, fn: any): void;
}