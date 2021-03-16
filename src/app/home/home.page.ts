import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobarVarService } from '../globar-var.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputjudul = ""; inputisi = ""; inputtgl = "";
  publicjudul; publicisi; publictgl; publicjumlahnote; publiccount;

  constructor(private router: Router, public globalvar: GlobarVarService) {
    this.publicjudul = this.globalvar.getjudul()
    this.publicisi = this.globalvar.getisinote()
    this.publictgl = this.globalvar.gettglnote()
    this.publicjumlahnote = this.globalvar.getjumlahnote()
  }

  savenote() {
    this.globalvar.insertnote(this.inputjudul,this.inputisi,this.inputtgl)
    this.publicjudul = this.globalvar.getjudul()
    this.publicisi = this.globalvar.getisinote()
    this.publictgl = this.globalvar.gettglnote()
    this.publicjumlahnote = this.globalvar.getjumlahnote()
    this.publiccount = this.globalvar.getcount()
    console.log(this.publicjudul)
  }

}
