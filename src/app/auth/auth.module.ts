import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

export const COMPONENTS = [
    LoginFormComponent,
    LogoutConfirmationDialogComponent,
    LoginPageComponent
];

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        StoreModule.forFeature("auth", reducers),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [COMPONENTS],
    entryComponents: [LogoutConfirmationDialogComponent]
})
export class AuthModule { }
