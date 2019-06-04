    import { NgModule } from '@angular/core';    
    import { Routes, RouterModule } from '@angular/router';    
    import { DashboardComponent } from './dashboard/dashboard.component';    
    import { LoginComponent } from './login/login.component';    
    import { LogsComponent } from './logs/logs.component';    
    import { DetalleLogComponent } from './detalle-log/detalle-log.component';    
    import { RegisterComponent } from './register/register.component';   
    import { CarreraComponent } from './admin/carrera/carrera.component'; 
    import {UrlPermission} from "./url.permission";   
    import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard'; 
        
    export const routes: Routes = [    
      {    
        path: '',    
        redirectTo: 'dashboard',    
        pathMatch: 'full',    
      },    
      {    
        path: 'register',    
        component: RegisterComponent,    
        data: {    
          title: 'Registro'    
        }    
      },
      {    
        path: 'login',    
        component: LoginComponent,    
        data: {    
          title: 'Login'    
        }    
      },    
      {    
        path: 'dashboard',    
        component: DashboardComponent,
        canActivate: [AuthGuard],    
        data: {    
          title: 'Inicio'    
        }    
      },    
      {    
        path: 'admin',    
        canActivate: [
          AuthGuard,
          AdminGuard
        ],    
        children: [
          {
            path: 'carrera',    
            component: CarreraComponent,    
            data: {    
              title: 'Administración de carreras'    
            }
          }
        ]
      },
      {    
        path: 'logs',    
        component: LogsComponent,    
        data: {    
          title: 'Lista de logs'    
        }    
      },
      {    
        path: 'detalle-log/:id',    
        component: DetalleLogComponent,    
        data: {    
          title: 'Detalles de log'    
        }    
      }    
    ];    
        
    @NgModule({    
      imports: [RouterModule.forRoot(routes)],    
      exports: [RouterModule],
      providers: [
        AuthGuard,
        AdminGuard
      ]  
    })    
    export class AppRoutingModule { }    
