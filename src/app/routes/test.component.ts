import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'test',
  template: `
    <div>
      <button nz-button nzType="primary" routerLink="/test/a">a</button>
      <button nz-button nzType="primary" routerLink="/test/b">b</button>
    </div>
    <div style="height: 200px">
      <reuse-tab #reuseTab tabType="card" [mode]="2" [allowClose]="true" />
      <div class="reuse-tab-content">
        <div class="main-content">
          <router-outlet
            (activate)="reuseTab.activate($event)"
            (attach)="reuseTab.activate($event)"
          />
        </div>
      </div>
    </div>
  `,
  imports: [ReuseTabModule, NzButtonModule, RouterOutlet, RouterLink],
})
export class TestComponent {}
