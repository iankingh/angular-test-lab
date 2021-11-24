import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


// 測試情境
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ] ,
      imports: [HttpClientModule],
    })
    .compileComponents();
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });;

  // 測試項目
  it('測試是否創建測試component', () => {
    //expect and matcher : 通過測試的條件
    expect(component).toBeTruthy();
  });
  it('測試是否有正確的標題', () => {
    expect(component.title).toEqual('Home');
  });

});
