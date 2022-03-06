import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EurojackpotDataAccessService } from 'libs/euro-jackpot/data-access/src/lib/services/entities/eurojackpot-data-access.service';

@Component({
  selector: 'lottoland-main-results',
  templateUrl: './main-results.component.html',
  styleUrls: ['./main-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainResultsComponent implements OnInit {

  title = "Eurojackpot results & Winning numbers";
  
  constructor(private euroData: EurojackpotDataAccessService) { }

  ngOnInit(): void {
    this.euroData.getResults().subscribe({
      next: (value) => console.log('results', value),
      error: (err) => console.error('results error', err)
    })
  }

}
