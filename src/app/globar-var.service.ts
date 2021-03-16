import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobarVarService {

  private judul: String[]=[];
  private isinote: String[]=[];
  private tglnote: String[]=[];
  private jumlahnote: number[]=[];
  private count: number = 0;

  constructor() {}

  public getjudul() {
    return this.judul
  }
  public getisinote() {
    return this.isinote
  }
  public gettglnote() {
    return this.tglnote
  }
  public getjumlahnote() {
    return this.jumlahnote
  }
  public getcount() {
    return this.count
  }
  public insertnote(judul, isi, tgl){
    this.judul.push(judul)
    this.isinote.push(isi)
    this.tglnote.push(tgl)
    this.jumlahnote.push(this.count)
    this.count++
  }
}
