import { Component, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";

declare var require;
const styles: string = require("./header.component.styl");
const template: string = require("./header.component.pug");

@Component({
    selector: "header",
    styles: [styles],
    template
})

export class HeaderComponent {
    @HostBinding("class.loading") @Input("loading") loading: boolean;

    constructor(public router: Router) {}

}
