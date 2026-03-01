import { Component } from '@angular/core';
import { NzTreeModule } from 'ng-zorro-antd/tree';

@Component({
  selector: 'C',
  template: `
    <div>
      <nz-tree [nzData]="treeData" />
    </div>
  `,
  imports: [NzTreeModule],
})
export class CComponent {
  treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
        },
        {
          title: '0-0-1',
          key: '0-0-1',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
    },
  ];
}
