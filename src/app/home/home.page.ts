import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { Trend } from '../mock-Trend';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public progress =0.2
  public trendName?: string;
  public a = true;
  public showTrendArr: Trend[] = []

  selectedValue: string | undefined;
  trendNameArr: string[] = ['Pizza', 'Döner', 'Spagetti', 'Salat'];
  trendArr: Trend[] = [];
  id = 0;

  constructor() {}

  ngOnInit(): void {
    this.trendName = this.trendNameArr[this.id];
    console.log('hallo');
    this.progress;
  }

  onIonChange(trendName: string, ev: Event): void {
    this.selectedValue = (ev as RangeCustomEvent).detail.value.toString();
    console.log('1 - id:',this.id, 'len:',this.trendNameArr.length,'a:', this.a);

    if (this.trendArr.find((e) => e.name == trendName)) {
      console.log('2 - id:',this.id, 'len:',this.trendNameArr.length,'a:', this.a);

      this.trendArr.find((e) => {
        if (e.name == trendName) {
          e.value = parseInt(this.selectedValue!);
        }
      });
    } else if (this.id == this.trendNameArr.length) {
      this.a = false;
      console.log('3 - id:',this.id, 'len:',this.trendNameArr.length,'a:', this.a);
    } else {
      console.log('4 - id:',this.id, 'len:',this.trendNameArr.length,'a:', this.a);
      this.trendArr.push({
        name: trendName,
        value: parseInt(this.selectedValue!),
      });
      this.id++;
      this.progress +=0.2
      if (this.id == this.trendNameArr.length) {
        this.a = false;
        this.trendArr=this.trendArr.sort(function(a, b) {return b.value - a.value;})
        console.log('3 - id:',this.id, 'len:',this.trendArr,'a:', this.a);
      } else {
        this.trendName = this.trendNameArr[this.id];
      }
    }
  }
  rankEvent(){
    this.showTrendArr = this.trendArr.sort(function(a, b) {
  return a.value - b.value;})
      console.log(this.showTrendArr)
  }
}
