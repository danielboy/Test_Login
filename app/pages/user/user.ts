import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AuthService} from '../../services/authservice';
import {HomePage} from '../home/home';
import {StartTest} from '../startTest/startTest';

@Component({
    templateUrl: 'build/pages/user/user.html',
      providers: [AuthService]
})
export class UserPage {

    private service: any;
    private nav: NavController;

    constructor(private authservice: AuthService, private navcontroller: NavController, private alertController: AlertController) {
        this.service = authservice;
        this.nav = navcontroller;
    }
    gostart(){
        this.nav.push(StartTest, 0);
        	}    
    
    logout() {
        this.service.logout();
        this.nav.setRoot(HomePage);
    }
    
    getinfo() {
        this.service.getinfo().then(data => {
            if(data.username) {
                let alert = this.alertController.create({
                    title: "Hola, " + data.username,
                    subTitle: "Tu Email es:  " + data.email,
                    buttons: ['Aceptar']
                });
                alert.present();
            }
        });
    }
}