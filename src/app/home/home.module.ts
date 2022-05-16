import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
