import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Trend } from '../mock-Trend';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.scss'],
})
export class UmfrageComponent implements OnInit {
  public trendName?: string;
  selectedValue: string | undefined;
  trendNameArr: string[] = ['Pizza', 'Döner', 'Spagetti', 'Salat'];
  trendArr: Trend[] = [];
  id = 0;

  constructor() {}

  ngOnInit(): void {
    this.trendName = this.trendNameArr[this.id];
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
      this.trendName = this.trendNameArr[this.id];
    }
  }

  public setId(i: number) {
    this.id = i;
  }
}
