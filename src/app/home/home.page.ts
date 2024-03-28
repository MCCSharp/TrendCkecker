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
  public trendName?: string;
  selectedValue: string | undefined;
  trendNameArr: string[] = ['Pizza', 'Döner', 'Spagetti', 'Salat'];
  trendArr: Trend[] = [];
  id = 0;
  trendArrlenght = 0;
  progress = 0;
  public a = true;

  constructor() {}

  ngOnInit(): void {
    this.trendName = this.trendNameArr[this.id];
    console.log('hallo');
    this.trendArrlenght = this.trendNameArr.length;
    this.progress = this.id;
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
      if (this.id == this.trendNameArr.length) {
        this.a = false;
        console.log('3 - id:',this.id, 'len:',this.trendNameArr.length,'a:', this.a);
      } else {
        this.trendName = this.trendNameArr[this.id];
      }
    }
    console.log(this.trendArrlenght, this.progress);
  }
}
