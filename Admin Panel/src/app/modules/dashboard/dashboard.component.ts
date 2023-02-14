import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '60s Mens wear', weight: 45.67, symbol: 'Italy' },
  { position: 2, name: '50s Womens wear', weight: 35.8, symbol: 'German' },
  { position: 3, name: 'Clocks', weight: 24.5, symbol: 'India' },
  { position: 4, name: 'Ornaments', weight: 73.45, symbol: 'India' },
  { position: 5, name: 'Vehicles', weight: 65.78, symbol: 'German' },
  { position: 6, name: 'Paintings', weight: 80.23, symbol: 'USA' },
  { position: 7, name: 'Armors', weight: 14.07, symbol: 'UK' },
  { position: 8, name: 'Books', weight: 34.67, symbol: 'UK' },
  { position: 9, name: 'Kids wear', weight: 56.78, symbol: 'India' },
  { position: 10, name: 'Retro style', weight: 20.17, symbol: 'Bangladesh' },
  { position: 11, name: 'Statues', weight: 22.56, symbol: 'New-Zealand' },
  { position: 12, name: 'Moulds', weight: 24.35, symbol: 'Australia' },
  { position: 13, name: 'Watches', weight: 66.98, symbol: 'India' },
  { position: 14, name: 'Home appliances', weight: 88.08, symbol: 'Japan' },
  { position: 15, name: 'Vintage equipments', weight: 37.97, symbol: 'Bhutan' },
  { position: 16, name: '90s style', weight: 32.05, symbol: 'Afghanistan' },
  { position: 17, name: 'Branded technology', weight: 35.53, symbol: 'UK' },
  { position: 18, name: 'Modern', weight: 39.48, symbol: 'Ireland' },
  { position: 19, name: 'Royal Design', weight: 39.83, symbol: 'Uk, India' },
  { position: 20, name: 'Others', weight: 40.8, symbol: 'All nations' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [] as any;
  cards = [] as any;
  pieChart = [] as any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}