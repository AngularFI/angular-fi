import { NgModule } from '@angular/core';
import { 
  RouterModule 
} from '@angular/router';
import { FrontpageModule } from './frontpage'


// App component
import { AppComponent } from './app.component';

// Routing
import { AppRouting } from './app.routing';

// Core module
import { CoreModule } from './core/core.module';
import { GetinvolvedComponent } from './getinvolved/getinvolved.component';

@NgModule({
  imports: [CoreModule, AppRouting,FrontpageModule],
  declarations: [AppComponent, GetinvolvedComponent],
  bootstrap: [AppComponent],
  exports: [CoreModule]
})
export class AppModule {}
