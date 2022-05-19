import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoargprogramaComponent } from './logoargprograma.component';

describe('LogoargprogramaComponent', () => {
  let component: LogoargprogramaComponent;
  let fixture: ComponentFixture<LogoargprogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoargprogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoargprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
