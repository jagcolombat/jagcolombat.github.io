import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '@lottoland/utils';
import { HandlerErrorService } from 'libs/utils/src/lib/services/handler-error.service';

@Component({
  selector: 'lottoland-generic-message',
  templateUrl: './generic-message.component.html',
  styleUrls: ['./generic-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericMessageComponent implements OnInit {
  @Input() message?: string = 'Hola';
  @Input() typeMessage = 'alert-info';
  showMsg = false;

  constructor(private errorServ: HandlerErrorService, private loaderServ: LoaderService, 
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.errorServ.error$.subscribe({
      next: (value) => {
        this.showError(value);
      }
    });

    this.loaderServ.loading$.subscribe({
      next: (value) => {
        this.cleanError(value);
      }
    });
  }

  showError(msg: string) {
    this.message = msg;
    this.showMsg = true;
    this.typeMessage = 'alert-danger';
    this.cd.detectChanges();
  }

  cleanError(clean: boolean) {
    if(clean === true) {
      this.message = "";
      this.showMsg = false;
      this.cd.detectChanges();
    }
  }

}
