import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IResultItem } from '@lottoland/utils';

@Component({
  selector: 'lottoland-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultGridComponent implements OnInit {
  @Input() result?: IResultItem[];

  constructor() { }

  ngOnInit(): void {

    console.log('result-grid', this.result);

  }

}
