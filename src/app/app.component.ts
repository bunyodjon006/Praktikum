import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  title = 'Praktikum';
  isLoading = true; // Spinnerni ko'rsatish uchun flag

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false; // 2 soniyadan keyin spinner yo'qoladi
    }, 5000);
  }
 
}
