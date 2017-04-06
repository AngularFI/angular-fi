import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// App module
import { AppModule } from './app/app.module';

// Declare process variable (so that type checker doesn't nag about it)
declare var process;

// Production mode
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
