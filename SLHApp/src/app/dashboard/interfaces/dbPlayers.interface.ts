



// To parse this data:
//
//   import { Convert } from "./file";
//
//   const dBSLHPlayers = Convert.toDBSLHPlayers(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface DBSLHPlayers {
    "COORD DB":      string;
    "COORD AUX":     string;
    EDAD:            string;
    GAMES:           Games;
    MIN:             string;
    FPPG:            string;
    FPPM:            string;
    "RATIO MVP":     number;
    "AUX F.A"?:      string;
    "JUGADOR F.A"?:  string;
    ORDEN?:          number;
    ORDEN2?:         string;
    AUX?:            number;
    CORTE?:          string;
    "FRANQUICIA 1"?: string;
    "FRANQUICIA 2"?: string;
    PLAYER?:         string;
    TIPO?:           Tipo;
    TEAM?:           Team;
    POS?:            Pos;
    SALARIO?:        number;
    AÑOS?:           number;
    OPT?:            Opt;
    "Años 21/22"?:   number;
    Act?:            Act;
    Column22?:       number;
}

export enum Act {
    Value = "#VALUE!",
}

export enum Games {
    Empty = "",
    Games = "-",
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toDBSLHPlayers(json: string): DBSLHPlayers[] {
        return cast(JSON.parse(json), a(r("DBSLHPlayers")));
    }

    public static dBSLHPlayersToJson(value: DBSLHPlayers[]): string {
        return JSON.stringify(uncast(value, a(r("DBSLHPlayers"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "DBSLHPlayers": o([
        { json: "COORD DB", js: "COORD DB", typ: "" },
        { json: "COORD AUX", js: "COORD AUX", typ: "" },
        { json: "EDAD", js: "EDAD", typ: "" },
        { json: "GAMES", js: "GAMES", typ: r("Games") },
        { json: "MIN", js: "MIN", typ: "" },
        { json: "FPPG", js: "FPPG", typ: "" },
        { json: "FPPM", js: "FPPM", typ: "" },
        { json: "RATIO MVP", js: "RATIO MVP", typ: 0 },
        { json: "AUX F.A", js: "AUX F.A", typ: u(undefined, "") },
        { json: "JUGADOR F.A", js: "JUGADOR F.A", typ: u(undefined, "") },
        { json: "ORDEN", js: "ORDEN", typ: u(undefined, 0) },
        { json: "ORDEN2", js: "ORDEN2", typ: u(undefined, "") },
        { json: "AUX", js: "AUX", typ: u(undefined, 0) },
        { json: "CORTE", js: "CORTE", typ: u(undefined, "") },
        { json: "FRANQUICIA 1", js: "FRANQUICIA 1", typ: u(undefined, "") },
        { json: "FRANQUICIA 2", js: "FRANQUICIA 2", typ: u(undefined, "") },
        { json: "PLAYER", js: "PLAYER", typ: u(undefined, "") },
        { json: "TIPO", js: "TIPO", typ: u(undefined, r("Tipo")) },
        { json: "TEAM", js: "TEAM", typ: u(undefined, r("Team")) },
        { json: "POS", js: "POS", typ: u(undefined, r("Pos")) },
        { json: "SALARIO", js: "SALARIO", typ: u(undefined, 3.14) },
        { json: "AÑOS", js: "AÑOS", typ: u(undefined, 0) },
        { json: "OPT", js: "OPT", typ: u(undefined, r("Opt")) },
        { json: "Años 21/22", js: "Años 21/22", typ: u(undefined, 0) },
        { json: "Act", js: "Act", typ: u(undefined, r("Act")) },
        { json: "Column22", js: "Column22", typ: u(undefined, 0) },
    ], false),
    "Act": [
        "#VALUE!",
    ],
    "Games": [
        "",
        "-",
    ],
    "Opt": [
        "ELD",
        "-",
        "ENM",
        "MIN",
        "R",
    ],
    "Pos": [
        "C",
        "CF",
        "F",
        "FC",
        "G",
        "GF",
    ],
    "Team": [
        "ATL",
        "BOS",
        "BRK",
        "CHA",
        "CHI",
        "CLE",
        "DAL",
        "DEN",
        "DET",
        "F.A",
        "GSW",
        "HOU",
        "IND",
        "LAC",
        "LAK",
        "MEM",
        "MIA",
        "MIL",
        "MIN",
        "NOP",
        "NYK",
        "OKC",
        "ORL",
        "PHI",
        "PHO",
        "POR",
        "SAS",
        "SAC",
        "TOR",
        "UTA",
        "WAS",
    ],
    "Tipo": [
        "Derecho",
        "Jugador",
        "Ronda",
    ],
};
