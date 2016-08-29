import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes';
import { DashboardComponent }      from './dashboard';
import { HeroDetailComponent }      from './hero-detail';

const appRoutes: Routes = [
	{
	  path: 'dashboard',
	  component: DashboardComponent
	},
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},
	{
	  path: 'detail/:id',
	  component: HeroDetailComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);