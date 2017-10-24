import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';

const appRoutes: Routes = [
    // { path: 'user', component: UserListComponent },
    // { path: 'user/:id', component: UserDetailComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // { path: '',
    //     redirectTo: '/user',
    //     data: { title: 'Heroes List' },
    //     pathMatch: 'full'
    // },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        // UserListComponent,
        PageNotFoundComponent,
        // UserDetailComponent
    ],
    imports: [
        BrowserModule,
        UserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
