import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {UserPage} from '../user/user';


@Component({
  templateUrl: 'build/pages/datos/datos.html',
  providers: [AuthService]
})
export class DatosPage {

    private service: any;
    datos: any;

  constructor(private authservice: AuthService, private nav: NavController, private alertCtrl: AlertController) {
      
      this.nav = nav;
      this.service = authservice;
                this.datos = {
                    nombre: '-',
                    matricula: '-',
                    prepa: '_'

                }

  }

onPageLoaded() {
    this.service.getinfo().then(data => {
                this.datos = {
                    nombre: data.name +' '+ data.apellidos,
                    matricula: data.matricula,
                    escuela: data.prepa,
                }

        });
 }


goUserPage(){
		this.nav.push(UserPage);
	}


}
