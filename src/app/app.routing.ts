import { Routes } from "@angular/router";

declare var System: any;

export const AppRoutes: Routes = [
    { path: "", pathMatch: "full", loadChildren: "./+frontpage/index#FrontpageModule" },
    { path: "organizers", loadChildren: "./+organizers/index#OrganizersModule" },
    { path: "contact", loadChildren: "./+contact/index#ContactModule" },
    { path: "404", loadChildren: "./+pagenotfound/index#PageNotFoundModule" },
    { path: "**", pathMatch: "full", redirectTo: "/404" }
];
