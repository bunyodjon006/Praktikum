import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modalmenu',
  templateUrl: './modalmenu.component.html',
  styleUrls: ['./modalmenu.component.scss']
})
export class ModalmenuComponent {
  selectTab: string = 'home';

  selecttab(tab: string) {
    this.selectTab = tab;
  }
  constructor(public dialog:Dialog){}
  close(){
    this.dialog.closeAll();
    console.log("hell");
    
  }
}
