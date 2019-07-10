import { Component, OnInit } from '@angular/core';
import { Log } from '../model/log';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selection : string[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs() : void {
    this.logService.getUserLogs()
      .subscribe(logs => this.logs = logs, this.selection = String[this.logs.length]);
  }

  delete(log : Log, index : number) : void {
    this.logs.splice(index,1);
    this.logService.deleteLog(log.id).subscribe();
  }

  modify(log : Log, index : number) : void{
    this.logs[index].estado = this.selection[index];
    log.estado = this.selection[index];
    this.logService.modifyLog(log);
  }

}
