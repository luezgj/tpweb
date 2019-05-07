    import { NgModule } from '@angular/core';    
    import { Routes, RouterModule } from '@angular/router';    
    import { DashboardComponent } from './dashboard/dashboard.component';    
    import { LoginComponent } from './login/login.component';    
    import { RegisterComponent } from './register/register.component';   
    import { CarreraComponent } from './admin/carrera/carrera.component'; 
    import {UrlPermission} from "./url.permission";    
        
    export const routes: Routes = [    
      {    
        path: '',    
        redirectTo: 'login',    
        pathMatch: 'full',    
      },    
      {    
        path: 'login',    
        component: LoginComponent,    
        data: {    
          title: 'Login'    
        }    
      },    
      {    
        path: 'dasboard',    
        component: DashboardComponent,
        canActivate: [UrlPermission],    
        data: {    
          title: 'Inicio'    
        }    
      },    
      {    
        path: 'register',    
        component: RegisterComponent,    
        data: {    
          title: 'Registro'    
        }    
      },
      {    
        path: 'admin/carrera',    
        component: CarreraComponent,    
        data: {    
          title: 'Administración de carreras'    
        }    
      }    
    ];    
        
    @NgModule({    
      imports: [RouterModule.forRoot(routes)],    
      exports: [RouterModule]    
    })    
    export class AppRoutingModule { }    
