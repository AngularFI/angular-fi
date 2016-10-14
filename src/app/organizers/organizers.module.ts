import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { OrganizersComponent } from "./organizers.component";
import { OrganizersRoutes } from "./organizers.routing";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(OrganizersRoutes)
    ],
    declarations: [
        OrganizersComponent
    ]
})

export class OrganizersModule {}