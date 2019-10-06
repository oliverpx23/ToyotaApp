import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.styles.scss']
})
export class TallerComponent implements OnInit {

  title = 'Talleres Toyota Paraguay';
  lat = -25.29056085
  lng = -57.58738835;


  marcadores = [
    {
      lat: -25.29056085,
      long: -57.58738835,
      titulo: 'Toyotoshi, Mariscal Francisco Solano López, Recoleta'
    },
    {
      lat: -25.3659854,
      long: -57.4222919,
      titulo: 'Toyotoshi, Ruta Nacional Mariscal Estigarribia'
    },
    {
      lat: -25.5084879,
      long: -54.63709495,
      titulo: 'Toyotoshi, Monseñor Rodríguez, Area 1, Ciudad del Este'
    },
    {
      lat: -25.25012335,
      long: -57.55288265,
      titulo: 'Toyotoshi, Ruta Transchaco, Loma Pytá'
    },

  ]

  constructor() { }

  ngOnInit() 
  {
  }

  guardar()
  {
    Swal.fire({
      title: `Desea realizar el agendamiento?`,
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
        Swal.fire('Agendamiento realizado con exito','','success');
      }

    });
  }

}
