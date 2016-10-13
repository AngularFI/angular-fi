import { Component } from "@angular/core";

declare var require;
const styles: string = require("./contact.component.styl");
const template: string = require("./contact.component.pug");

@Component({
    styles: [styles], 
    template
})

export class ContactComponent {
    constructor() {}
}