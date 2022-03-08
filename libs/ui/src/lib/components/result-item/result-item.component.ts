import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IResultItem } from '@lottoland/utils';

@Component({
  selector: 'lottoland-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultItemComponent {
  @Input() resultItem?: IResultItem;

}

