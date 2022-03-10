import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LoaderService } from '@lottoland/utils'
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'lottoland-euro-jackpot-layout',
  templateUrl: './euro-jackpot-layout.component.html',
  styleUrls: ['./euro-jackpot-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuroJackpotLayoutComponent implements OnInit {
  loading?: boolean = true;
  error?: boolean = false;
  errMsg?: string;

  constructor(private spinner: NgxSpinnerService, private loaderServ: LoaderService) {
    
  }

  ngOnInit() {
    this.spinner.show();
    this.loaderServ.loading$.subscribe({
      next: (value) => {
        console.log('loader', value);
        value === true ? this.spinner.show(): this.spinner.hide();
      }  
    })
  }

}
