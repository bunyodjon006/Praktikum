import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmenuComponent } from './modalmenu.component';

describe('ModalmenuComponent', () => {
  let component: ModalmenuComponent;
  let fixture: ComponentFixture<ModalmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalmenuComponent]
    });
    fixture = TestBed.createComponent(ModalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
