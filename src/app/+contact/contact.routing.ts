import { Routes }  from "@angular/router";

import { ContactComponent } from "./contact.component";

export const ContactRoutes: Routes = [
    {
        path: "",
        component: ContactComponent,
        pathMatch: "full"
    }
];