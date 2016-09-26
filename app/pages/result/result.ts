import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {QuizService} from '../../services/authservice';
import {RoundOfPipe} from '../../pipe/pipe';


@Component({
    templateUrl: 'build/pages/result/result.html',
    providers: [QuizService],
    pipes: [RoundOfPipe]
})
export class Result {
  result: any;
  porcentage: any;
  a1: number;
  parea1: number;
  a2: number;
  parea2: number;
  a3: number;
  parea3: number;
  total: number;
  constructor(private nav: NavController, public navParams: NavParams, serve: QuizService) {
    
    this.nav = nav;
    this.result = navParams.data;
    this.parea1 = (100 / 3) * this.result.a1;
    this.parea2 = (100 / 3) * this.result.a2;
    this.parea3 = (100 / 3) * this.result.a3;


  }
goHome(){
		this.nav.push(HomePage);
	}

}
