import { NgModule } from "@angular/core";

import { DatePipe } from "./date.pipe";
import { LinkifyPipe } from "./linkify.pipe";
import { OrderByPipe } from "./order-by.pipe";

const PIPES: any[] = [
    DatePipe,
    LinkifyPipe,
    OrderByPipe
];

@NgModule({
    declarations: [
        ...PIPES
    ],
    exports: [
        ...PIPES
    ]
})
export class PipesModule {}
