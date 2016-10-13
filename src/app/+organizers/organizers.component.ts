import { Component } from "@angular/core";

declare var require;
const styles: string = require("./organizers.component.styl");
const template: string = require("./organizers.component.pug");

@Component({
    styles: [styles], 
    template
})

export class OrganizersComponent {
    constructor() {}
}