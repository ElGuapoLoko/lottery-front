import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from './components/login/login.component';
import {SortComponent} from "./components/sort/sort.component";
import {UsersComponent} from "./components/users/users.component";
import {EventsComponent} from "./components/events/events.component";
import {HistoryEventsComponent} from "./components/history-events/history-events.component";
import {SupportComponent} from "./components/support/support.component";
import {AccountComponent} from "./components/account/account.component";
import {SweepstakesComponent} from "./components/sweepstakes/sweepstakes.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'', component: LoginComponent},
            {
                path: '', component: AdminLayoutComponent,
                children: [
                    {path: 'dashboard', component: DashboardComponent},
                    {path:'sort', component: SortComponent},
                    {path:'users', component: UsersComponent},
                    {path:'events', component: EventsComponent},
                    {path:'sweepstakes', component: SweepstakesComponent},
                    {path:'history-events', component: HistoryEventsComponent},
                    {path:'support', component: SupportComponent},
                    {path:'account', component: AccountComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
