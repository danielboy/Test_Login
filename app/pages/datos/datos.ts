import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserPage} from '../user/user';

/*
  Generated class for the DatosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/datos/datos.html',
})
export class DatosPage {

  constructor(private nav: NavController) {

 

  }
   goUserPage(){
		this.nav.push(UserPage);
	}


}
