import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { ContactComponent } from "./contact.component";
import { ContactRoutes } from "./contact.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ContactRoutes)
    ],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule {}