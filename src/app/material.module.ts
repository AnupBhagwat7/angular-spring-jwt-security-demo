import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,MatToolbarModule,MatProgressSpinnerModule,
  MatExpansionModule,MatTabsModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatProgressSpinnerModule,MatExpansionModule,MatTabsModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule
  ],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule,
    MatProgressSpinnerModule,MatExpansionModule,MatTabsModule,MatFormFieldModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule
  ],
})
export class CustomMaterialModule { }