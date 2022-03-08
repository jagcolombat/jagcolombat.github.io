import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lottoland-winner-number',
  templateUrl: './winner-number.component.html',
  styleUrls: ['./winner-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnerNumberComponent implements OnInit {
  @Input() numbers?: number[];
  @Input() redNumbers?: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
