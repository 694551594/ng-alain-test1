import { Component } from '@angular/core';
import { DelonFormModule, SFSchema } from '@delon/form';

@Component({
  selector: 'd',
  template: `
    <div>
      <sf [schema]="schema" [formData]="formData" (formSubmit)="submit($event)" />
    </div>
  `,
  imports: [DelonFormModule],
})
export class DComponent {
  schema = {
    properties: {
      name: { type: 'string', title: '姓名' },
      age: { type: 'number', title: '年龄' },
    },
  } as SFSchema;
  formData = {
    name: '张三',
    age: 18,
  };
  submit(data: any) {
    console.log(data);
  }
}
