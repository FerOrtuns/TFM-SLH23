export interface MyPlayer {

         
    
    _id?:            string,
    PLAYER?:         string,
    TIPO?:           Tipo,
    TEAM?:           Team,
    POS?:            Pos,
    SALARIO?:        number,
    YEARS?:          number,
    OPT?:            Opt
}
    

    






export enum Opt {
Eld = "ELD",
Empty = "-",
Enm = "ENM",
Min = "MIN",
R = "R",
}

export enum Pos {
C = "C",
CF = "CF",
F = "F",
Fc = "FC",
G = "G",
Gf = "GF",
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

export enum Tipo {
Derecho = "Derecho",
Jugador = "Jugador",
Ronda = "Ronda",
}