import { Component } from '@angular/core';

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
}