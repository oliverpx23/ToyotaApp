import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styles: []
})
export class PagosComponent implements OnInit {

  cuentaspendientes: Array<any> = [
    {
      referencia: 'Compra Vehiculo',
      cuotan: 1,
      monto: 1500000,
      vencimiento: "05/10/2019",
      marcado: false
    },
    {
      referencia: 'Compra Vehiculo',
      cuotan: 2,
      monto: 1500000,
      vencimiento: "05/11/2019",
      marcado: false
    },
    {
      referencia: 'Compra Vehiculo',
      cuotan: 3,
      monto: 1500000,
      vencimiento: "05/12/2019",
      marcado: false
    }
  ];



  total: number = 0;



  constructor() { 

  }

  ngOnInit() {

  }

  calculartotal()
  {
    let t = 0
    this.cuentaspendientes.forEach(e => {
      if(e.marcado)
      {
        t += e.monto;
      }
    });
    this.total = t;
  }

  marcaritem(index: number)
  {
    if(!this.cuentaspendientes[index].marcado)
    {
      this.cuentaspendientes[index].marcado = false;
    }
    else
    {
      this.cuentaspendientes[index].marcado = true;
    }
    this.calculartotal();
  }

  procesarpago()
  {
    Swal.fire({
      title: `Desea realizar el pago?`,
      text: `Confirme sus datos`,
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#fe5419',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Confirmar!',
      showLoaderOnConfirm: true,
      cancelButtonText: 'No'
    }).then((result) => {
      if(result.value)
      {
        Swal.fire('Pago Realizado con exito','','success');
        this.delpago();
      }

    });
  }

  delpago()
  {
    this.cuentaspendientes.forEach((e,i) => {
      if(e.marcado)
      {
        this.cuentaspendientes.splice(i-1,1);
      
      }
    });
    
    this.calculartotal();

  }
}
