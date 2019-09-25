import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { DropdownModule, PanelModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [AccordionModule,MegaMenuModule,TableModule,DropdownModule,ButtonModule,PanelModule
  
],
  exports: [AccordionModule,MegaMenuModule,TableModule,DropdownModule,ButtonModule,PanelModule
  ],
})
export class CustomPrimengModule { }