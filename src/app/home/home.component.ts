import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';



  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

   getData() {
    this.homeService.getImage().subscribe(data => {
      console.log(data);
    });
  }

}
