import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputPersonalizadoComponent } from './components/input-personalizado/input-personalizado.component';
import { LogoComponent } from './components/logo/logo.component';
import { DuocComponent } from './components/duoc/duoc.component';
@NgModule({
  declarations: [HeaderComponent,InputPersonalizadoComponent, LogoComponent, DuocComponent],
  exports :[HeaderComponent,InputPersonalizadoComponent,ReactiveFormsModule,LogoComponent, DuocComponent
 ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule
  ]
})
export class SharedModule { }
