import { MyFecha } from './MyFecha.interface';

export interface MyPujaTiny {

         
    
    _id?:           string,
    PLAYER:         string,
    AKA?:            Team,
    EQUIPO:        string,
    SALARIO:        number,
    YEARS:          number,
    desde?:          Date
}
    

export enum Team {
    Atl = "ATL",
    Bos = "BOS",
    Brk = "BRK",
    Cha = "CHA",
    Chi = "CHI",
    Cle = "CLE",
    DAL = "DAL",
    Den = "DEN",
    Det = "DET",
    FA = "F.A",
    Gsw = "GSW",
    Hou = "HOU",
    Ind = "IND",
    Lac = "LAC",
    Lak = "LAK",
    Mem = "MEM",
    Mia = "MIA",
    Mil = "MIL",
    Min = "MIN",
    NOP = "NOP",
    Nyk = "NYK",
    Okc = "OKC",
    Orl = "ORL",
    Phi = "PHI",
    Pho = "PHO",
    Por = "POR",
    SAS = "SAS",
    Sac = "SAC",
    Tor = "TOR",
    Uta = "UTA",
    Was = "WAS",
    }
    