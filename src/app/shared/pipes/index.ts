import { NgModule } from '@angular/core';
import { AddCommasPipe } from './add-commas.pipe';

export const PIPES = [AddCommasPipe];

@NgModule({
    exports: [PIPES],
    declarations: [PIPES],
})
export class PipesModule { }
