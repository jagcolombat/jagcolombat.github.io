import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lottoland-main-results',
  templateUrl: './main-results.component.html',
  styleUrls: ['./main-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainResultsComponent implements OnInit {

  title = "Eurojackpot results & Winning numbers";
  
  constructor() { }

  ngOnInit(): void {
  }

}
