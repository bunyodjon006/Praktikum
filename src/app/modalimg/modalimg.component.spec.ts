import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalimgComponent } from './modalimg.component';

describe('ModalimgComponent', () => {
  let component: ModalimgComponent;
  let fixture: ComponentFixture<ModalimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalimgComponent]
    });
    fixture = TestBed.createComponent(ModalimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
