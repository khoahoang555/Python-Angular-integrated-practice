import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { MenuBreadcrumbComponent } from './menu-breadcrumb/menu-breadcrumb.component';
import { MenuListUserComponent } from './menu-list-user/menu-list-user.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuFormUserComponent } from './menu-form-user/menu-form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuNotificationStatusComponent } from './menu-notification-status/menu-notification-status.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PageIndexComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'list-user', component: MenuListUserComponent},
  {path: 'form-user', component: MenuFormUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    MenuBreadcrumbComponent,
    MenuListUserComponent,
    PageIndexComponent,
    PageLoginComponent,
    MenuFormUserComponent,
    MenuNotificationStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
