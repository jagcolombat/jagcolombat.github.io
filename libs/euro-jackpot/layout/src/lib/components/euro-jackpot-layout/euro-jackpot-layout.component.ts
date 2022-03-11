import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '@lottoland/utils'
import { HandlerErrorService } from 'libs/utils/src/lib/services/handler-error.service';
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

  constructor(private router: Router, private spinner: NgxSpinnerService, 
    private loaderServ: LoaderService, private errorServ: HandlerErrorService) {
    this.router.navigateByUrl('/euro-jackpot/drawing-results');
  }

  ngOnInit() {
    this.loaderServ.loading$?.subscribe({
      next: (value) => {
        console.log('loader', value);
        value === true ? this.spinner.show(): this.spinner.hide();
      }  
    });

    this.errorServ.error$?.subscribe({
      next: (value) => {
        console.log('error handler', value);
        this.error = value ? true: false;
        this.errMsg = value;
      }  
    });
  }

}
