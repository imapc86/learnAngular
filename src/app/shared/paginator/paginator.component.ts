import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  /**
   * Variable para almacenar el número de pagina actual.
   */
  private _currentPage: number = 0;

  /**
   * Variable para almacenar el número total de páginas.
   */
  private _totalPages  : number = 0;
  /**
   * Input para obtener el número de pagina actual.
   */

  @Input() set currentPage(valor:number){
    this._currentPage = valor;
    this.getPagination();
  }

  /**
   * Input para obtener el número total de páginas.
   */
  @Input() set totalPages(valor:number){
    this._totalPages = valor;
    this.getPagination();
  }

  /**
   * Getter para obtener el número de pagina actual.
   */
  get currentPage(){

    return this._currentPage;

  }

  get totalPages(){

    return this._totalPages;

  }

  /**
   * Output para emitir el nuevo número de página.
   */
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  /**
   * Variable que almacena el número de páginas que se va a mostrar en el paginador.
   */
  pagesToShow: Array<number> = [];

  constructor() { }

  ngOnInit(): void { 

    this.pagesToShow = [];
    this.getPagination();

  }

  /**
   * Método para emitir el nuevo número de página.
   * @param page 
   */
  changePage(page:number){

    if(page <= 0 || page == this.currentPage || page > this._totalPages){ return; }
    this.onChangePage.emit(page);

  }

  /**
   * Método para generar la paginación.
   */
  getPagination(){

    let paginas = [];

    let prev = this._currentPage - 1;
    let next = this._currentPage + 1;

    for( let i = 1; i<=this._totalPages; i++ ) {
      if( i === 1 || i === this._totalPages || (i >= prev && i <= next)) {
          paginas.push(i);
      }
    }
      
    let final: any;

    final = paginas.pop();
    paginas.push(final);

    let pagesToShow = [];
    
    for(let i = 1; i < paginas.length - 1; i++) {

      if(paginas[i-1] === 1 && paginas[i] !== 2) {
          pagesToShow.push(1);
          pagesToShow.push('...');
      }

      pagesToShow.push(paginas[i]);

      if(paginas[i+1]===final && paginas[i]!==(final-1)) {
        pagesToShow.push('...');
        pagesToShow.push(final);
      }

    }

    !pagesToShow.includes(1) && pagesToShow.unshift(1);
    !pagesToShow.includes(this._totalPages) && pagesToShow.push(this._totalPages);

    this.pagesToShow = pagesToShow;

  }

}
