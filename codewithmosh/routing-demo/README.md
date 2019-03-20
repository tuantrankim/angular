# Install bootstrap
npm install bootstrap --save

# styles.css
@import "~bootstrap/dist/css/bootstrap.css";
### import router module in app.module.ts
import { RouterModule } from '@angular/router';

imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      // ** any urls
      {path: '**', component: NotFoundComponent},

    ])
],

### router outlet
All router will display below router-outlet, not inside router-outlet
<router-outlet></router-outlet>

### Using routerLink instead of using href to avoid reloading resource
<a routerLink="/followers">
<a [routerLink]="['/followers', follower.id]">