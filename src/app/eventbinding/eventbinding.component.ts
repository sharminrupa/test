import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  selecterTsp: string;
  tspList: any = [
    {name: 'NCLC', address: 'Dhanmondi, Dhaka'},
    {name: 'TCLD', address: 'Kakrail, Dhaka'},
    {name: 'CCL', address: 'Sankor, Dhaka'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getSelected(tsp): boolean{
    return (tsp.name === this.selecterTsp);
  }

  getEventDetails(event): any{
    console.log(event.target.value);
  }

}
