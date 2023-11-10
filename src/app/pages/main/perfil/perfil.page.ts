
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

  async takeimage(){
   let user = this.user()
   let path = `users/${user.uid}`
   console.log(path)
    const dataUrl =(await this.utilsvc.takePicture('Foto de perfil')).dataUrl
    console.log("error 1")
    let imagePath= `${user.uid}/perfil`
    console.log(dataUrl)
    console.log("error 1.5")

  
    user.imagen  = await this.firebase.uploadImage(imagePath, dataUrl)
  
    
    console.log("error 2")
  
    this.firebase.updateDocument(path,  {imagen: user.imagen}).then(async res=>{
    this.utilsvc.saveInLocalStorage('user',user)
    console.log("error 3")
    }).catch(error => {
      console.log(error)
      this.utilsvc.presentToast({
        message: error.message,
        duration: 2500,
        color: 'primary',
        position: "middle",
        icon: 'alert-circle-outline'
      })

    })
  }

  ngOnInit() {
  }

}
