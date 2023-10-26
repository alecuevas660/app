import { Component, OnInit,inject} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebase = inject(FirebaseService)
  utilsvc = inject(UtilsService)

  user(): User{
    return this.utilsvc.getFromLocalStorage('user')
  
  }
  ngOnInit() {
  }

  //Cerrar Sesión
  signOut(){
    this.firebase.salir()
  }


  
}
