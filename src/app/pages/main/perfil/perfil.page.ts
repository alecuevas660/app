
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor() { }
  firebase = inject(FirebaseService)
  utilsvc = inject(UtilsService)

  user(): User{
    return this.utilsvc.getFromLocalStorage('user')
  
  }

  //async takeimage(){
   // let user = this.user()
    //const dataUrl =(await this.utilsvc.takePicture('Foto de perfil')).dataUrl

    //let imagePath =`${user.id}/perfil`
    //user.image = await this.firebase.uploadImage(imagePath, dataUrl)

    //this.firebase.uploadDoc(this.formulario.value as User).then(res=>{
    //}
  //}

  ngOnInit() {
  }

}
