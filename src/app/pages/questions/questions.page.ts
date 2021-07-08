import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
  providers: [NavParams]
})
export class QuestionsPage implements OnInit {
  userName: string;
 information = null;

  constructor(private navCtrl: NavController, private questionsService: QuestionsService, public navParams: NavParams) { }

  ngOnInit() {
 this.userName = 'Lwandod';
   this.questionsService.getDetails().subscribe(result =>{
     console.log('details: ', result);
     this.information = result;

   });
  }

}
