import { Component, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  firebase = inject(FirebaseService)
  utilsvc = inject(UtilsService)

    //Cerrar Sesión
    signOut(){
      this.firebase.salir()
    }
  

  constructor(private menu:MenuController) {}
  cerrarMenu()
{
  this.menu.close('first');
}

}

