import { Routes }  from "@angular/router";

import { OrganizersComponent } from "./organizers.component";

export const OrganizersRoutes: Routes = [
    {
        path: "",
        component: OrganizersComponent,
        pathMatch: "full"
    }
];