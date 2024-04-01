import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Trend } from '../mock-Trend';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public progress =0.2
  public trendName?: string;
  public a = true;

  selectedValue: string | undefined;
  trendNameArr: string[] = ['Pizza', 'Döner', 'Spagetti', 'Salat'];
  trendArr: Trend[] = [];
  id = 0;

  constructor() {}

  ngOnInit(): void {
    this.trendName = this.trendNameArr[this.id];
    console.log('hallo');
  }

  onIonChange(trendName: string, ev: Event): void {

    this.selectedValue = (ev as RangeCustomEvent).detail.value.toString();
    if (this.trendArr.find((e) => e.name == trendName)) {
      this.trendArr.find((e) => {
        if (e.name == trendName) {
          e.value = parseInt(this.selectedValue!);
        }
      });

    } else {
     
      this.trendArr.push({
        name: trendName,
        value: parseInt(this.selectedValue!),
      });
      this.id++;
      this.progress +=0.2
      if (this.id == this.trendNameArr.length) {
        this.a = false;
        this.trendArr=this.trendArr.sort(function(a, b) {return b.value - a.value;})

      } else {
        this.trendName = this.trendNameArr[this.id];
      }
    }
  }
}
