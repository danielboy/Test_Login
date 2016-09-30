import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';


@Component({
  templateUrl: 'build/pages/datos/datos.html',
  providers: [AuthService]
})
export class DatosPage {

    private service: any;
    private nav: NavController;
    datas: any;
    nombre: any;

  constructor(private authservice: AuthService, private navcontroller: NavController) {

 this.service = authservice;




  }

      consultar() {
        
 
        this.service.getinfo().then(data =>
        
        this.datas = data,
        console.log(this.datas)
        )}
      onPageLoaded() {
        console.log('hola')
 
        this.consultar()
      }
   goUserPage(){
		this.nav.push(UserPage);
	}


}
