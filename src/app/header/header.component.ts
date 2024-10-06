import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalmenuComponent } from '../modalmenu/modalmenu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectTab: string = 'home';

  selecttab(tab: string) {
    this.selectTab = tab;
  }
  constructor(public dialog:Dialog){}
  OnMenu(){
  this.dialog.open(ModalmenuComponent);
  }

  images:string[]=[
    './assets/13.png',
    './assets/14.png',
    './assets/15.png'
  ];
  currentImage: string = this.images[0];
  imageIndex: number = 0;

  changeBackground() {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.imageIndex];
  }
}
