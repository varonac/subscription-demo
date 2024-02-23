import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {
  IGX_ACTION_STRIP_DIRECTIVES,
  IGX_GRID_DIRECTIVES,
  IGX_INPUT_GROUP_DIRECTIVES,
  IGX_SELECT_DIRECTIVES,
  IgxButtonDirective,
  IgxIconComponent,
} from 'igniteui-angular';

const definedAlarms = [
  'Wind speed low start condition',
  'Yaw wind speed low yaw enable',
  'WTG system ok',
  'Pit ALU container level L warn',
];

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    IGX_GRID_DIRECTIVES,
    IgxButtonDirective,
    IgxIconComponent,
    IGX_ACTION_STRIP_DIRECTIVES,
    IGX_INPUT_GROUP_DIRECTIVES,
    IGX_SELECT_DIRECTIVES,
    NgIf,
    NgForOf,
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent implements OnInit {
  alarms = [...definedAlarms];

  subscriptions = [
    { name: 'Wind speed low start condition', creation: '01/02/2024' },
  ];

  ngOnInit(): void {
    this.updateAlarmList();
  }

  delete(name: string) {
    this.subscriptions = this.subscriptions.filter((s) => s.name !== name);
    this.alarms.push(name);
  }

  add(name: string) {
    this.subscriptions = [
      ...this.subscriptions,
      { name, creation: dayjs().format('DD/MM/YYYY') },
    ];
    this.updateAlarmList();
  }

  private updateAlarmList() {
    this.alarms = this.alarms.filter(
      (a) => !this.subscriptions.some((s) => s.name === a)
    );
  }
}
