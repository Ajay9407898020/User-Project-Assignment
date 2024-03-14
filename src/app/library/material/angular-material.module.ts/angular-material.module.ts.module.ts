import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';




const modules: any[] = [
  MatMenuModule,
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatSelectModule
]

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class AngularMaterialModule { }
