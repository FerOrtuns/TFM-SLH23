

export interface MyFecha {

    dia: number,
    mes: Mes,
    fullyear: number,
    hora: number,
    min: number,
    sec: number,
    diasemana?: string,
    mesS?: string


}


export enum Mes {

  'Enero' =  0 ,
  'Febrero' =  1 ,
   'Marzo' =  2 ,
   'Abril' =  3 ,
   'Mayo' =  4 ,
   'Junio'=  5 ,
   'Julio'=  6 ,
   'Agosto'=  7 ,
   'Septiembre'=  8 ,
   'Octubre'=  9 ,
    'Noviembre'= 10 ,
    'Diciembre'= 11 
}