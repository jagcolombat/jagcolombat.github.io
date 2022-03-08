import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lottoland-result-date',
  templateUrl: './result-date.component.html',
  styleUrls: ['./result-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultDateComponent implements OnInit {
  @Input() date: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
