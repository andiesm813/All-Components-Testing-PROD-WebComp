import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './view1/view1';
import './view2/view2';

export const routes: Route[] = [
  { path: '', component: 'app-view1', name: 'View1' },
  { path: 'view1', component: 'app-view1', name: 'View1' },
  { path: 'view2', component: 'app-view2', name: 'View2' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
