import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, 
  MdCheckboxModule, 
  MdToolbarModule,
  MdMenuModule,
  MdSidenavModule,
  MdIconModule,
  MatGridListModule,
  MdInputModule,
  MdFormFieldModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({ 
    imports: [ 
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MdButtonModule, 
      MdCheckboxModule,
      MdToolbarModule,
      MdMenuModule,
      MdSidenavModule,
      MdIconModule,
      MatGridListModule,
      MdInputModule,
      MdFormFieldModule
    ], 
    exports: [ 
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MdButtonModule, 
        MdCheckboxModule,
        MdToolbarModule,
        MdMenuModule,
        MdSidenavModule,
        MdIconModule,
        MatGridListModule,
        MdInputModule,
        MdFormFieldModule
      ], 
  })
  export class MaterialModule { }
  