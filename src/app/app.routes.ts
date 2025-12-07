import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'about', component: About },
  { path: 'resume', component: Resume },
];
