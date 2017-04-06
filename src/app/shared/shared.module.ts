import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    FormsModule,
    ComponentsModule,
    PipesModule,
    ServicesModule
  ],
  exports: [
    FormsModule,
    ComponentsModule,
    PipesModule
  ]
})
export class SharedModule {}
