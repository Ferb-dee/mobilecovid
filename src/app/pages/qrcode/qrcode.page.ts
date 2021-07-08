import { Component, OnInit } from '@angular/core';


declare let makecode;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  encodeData: string;
  leCode: any;
  constructor(){}
  ngOnInit() {
    this.encodeData = 'Lwando';
    this.leCode = makecode(this.encodeData);

   console.log(this.leCode);

  }

}
