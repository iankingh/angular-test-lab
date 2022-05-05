import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ] ,
      imports: [
    RouterTestingModule
    ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('##button', () => {
  //     let button  = fixture.nativeElement.querySelector('button');//畫面元件
  //     expect(button.textContent).toEqual('Click me!');
  //     button.click();
  //     fixture.detectChanges();
  // });

  // it('should have <p> with "banner works!"', () => {
  //   const bannerElement: HTMLElement = fixture.nativeElement;
  //   const p = bannerElement.querySelector('p')!;
  //   expect(p.textContent).toEqual('banner works!');
  // });



});
