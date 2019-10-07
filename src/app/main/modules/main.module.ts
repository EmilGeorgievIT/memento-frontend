import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main/main.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from '../routing/main.routing';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class MainModule { }
