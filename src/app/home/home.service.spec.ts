import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let HomeServiceSpy: jasmine.SpyObj<HomeService>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HomeService);
  });

  it('測試是否創建測試 HomeService', () => {
    expect(service).toBeTruthy();
  });

  it('測試是否創建測試 HomeService spyOn', () => {
    // spyOn
    spyOn(service, 'getBooleanData').and.returnValue(true);
    expect(service.getBooleanData()).toBe(true);
  });

  // spyOnProperty
  it('測試是否創建測試 HomeService spyOnProperty', () => {
    spyOnProperty(service.user, 'value', 'get').and.returnValue({ 'username': 'username' });
  });

  // jasmine.createSpyObj
  it('測試是否創建測試 HomeService jasmine.createSpyObj', () => {
    HomeServiceSpy = jasmine.createSpyObj('HomeService', ['getBooleanObservable']);
    HomeServiceSpy.getBooleanObservable.and.returnValue(of(true));
  });

  // jasmine.createSpy
  it('測試是否創建測試 HomeService jasmine.createSpy', () => {
    const spy = jasmine.createSpy('HomeService');
    spy.and.returnValue(true);
    spy('getBooleanObservable');
  });

  // jasmine get images unit test 會有 cors error
  it('測試是否創建測試 HomeService images', () => {
    service.getImage().subscribe(data => { console.log(data); });
  });

  it('測試JSON 資料' ,() =>{
    service.getJsonServerData().subscribe(data => { console.log("測試JSON 資料 : " + JSON.stringify(data) ); });
  })

  // 使用 spy 取代回傳的資料
  it('測試JSON use spy', () => {
    spyOn(service, 'getJsonServerData').and.returnValue(of([{"id": 3,
    "title": "spy test",
    "author": "Ian"}]));
    service.getJsonServerData().subscribe(data => { console.log("測試JSON use spy : " + JSON.stringify(data) ); });
  });


});

