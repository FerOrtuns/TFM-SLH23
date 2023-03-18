// To parse this data:
//
//   import { Convert } from "./file";
//
//   const apiplayers = Convert.toApiplayers(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Apiplayers {
    PlayerID:                            number;
    SportsDataID:                        string;
    Status:                              Status;
    TeamID:                              number;
    Team:                                string;
    Jersey:                              number | null;
    PositionCategory:                    PositionCategory;
    Position:                            Position;
    FirstName:                           string;
    LastName:                            string;
    Height:                              number;
    Weight:                              number;
    BirthDate:                           Date;
    BirthCity:                           string;
    BirthState:                          null | string;
    BirthCountry:                        string;
    HighSchool:                          null | string;
    College:                             string;
    Salary:                              number | null;
    PhotoUrl:                            string;
    Experience:                          number | null;
    SportRadarPlayerID:                  string;
    RotoworldPlayerID:                   number | null;
    RotoWirePlayerID:                    number;
    FantasyAlarmPlayerID:                number | null;
    StatsPlayerID:                       number | null;
    SportsDirectPlayerID:                number | null;
    XmlTeamPlayerID:                     number | null;
    InjuryStatus:                        Injury;
    InjuryBodyPart:                      Injury;
    InjuryStartDate:                     Date | null;
    InjuryNotes:                         Injury;
    FanDuelPlayerID:                     number;
    DraftKingsPlayerID:                  number | null;
    YahooPlayerID:                       number;
    FanDuelName:                         string;
    DraftKingsName:                      null | string;
    YahooName:                           string;
    DepthChartPosition:                  Position | null;
    DepthChartOrder:                     number | null;
    GlobalTeamID:                        number;
    FantasyDraftName:                    null | string;
    FantasyDraftPlayerID:                number | null;
    UsaTodayPlayerID:                    number | null;
    UsaTodayHeadshotUrl:                 null | string;
    UsaTodayHeadshotNoBackgroundUrl:     null | string;
    UsaTodayHeadshotUpdated:             Date | null;
    UsaTodayHeadshotNoBackgroundUpdated: Date | null;
    NbaDotComPlayerID:                   number | null;
}

export enum Position {
    C = "C",
    PG = "PG",
    Pf = "PF",
    Sf = "SF",
    Sg = "SG",
}

export enum Injury {
    Scrambled = "Scrambled",
}

export enum PositionCategory {
    C = "C",
    F = "F",
    G = "G",
}

export enum Status {
    Active = "Active",
    Suspended = "Suspended",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toApiplayers(json: string): Apiplayers[] {
        return cast(JSON.parse(json), a(r("Apiplayers")));
    }

    public static apiplayersToJson(value: Apiplayers[]): string {
        return JSON.stringify(uncast(value, a(r("Apiplayers"))), null, 2);
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
    "Apiplayers": o([
        { json: "PlayerID", js: "PlayerID", typ: 0 },
        { json: "SportsDataID", js: "SportsDataID", typ: "" },
        { json: "Status", js: "Status", typ: r("Status") },
        { json: "TeamID", js: "TeamID", typ: 0 },
        { json: "Team", js: "Team", typ: "" },
        { json: "Jersey", js: "Jersey", typ: u(0, null) },
        { json: "PositionCategory", js: "PositionCategory", typ: r("PositionCategory") },
        { json: "Position", js: "Position", typ: r("Position") },
        { json: "FirstName", js: "FirstName", typ: "" },
        { json: "LastName", js: "LastName", typ: "" },
        { json: "Height", js: "Height", typ: 0 },
        { json: "Weight", js: "Weight", typ: 0 },
        { json: "BirthDate", js: "BirthDate", typ: Date },
        { json: "BirthCity", js: "BirthCity", typ: "" },
        { json: "BirthState", js: "BirthState", typ: u(null, "") },
        { json: "BirthCountry", js: "BirthCountry", typ: "" },
        { json: "HighSchool", js: "HighSchool", typ: u(null, "") },
        { json: "College", js: "College", typ: "" },
        { json: "Salary", js: "Salary", typ: u(0, null) },
        { json: "PhotoUrl", js: "PhotoUrl", typ: "" },
        { json: "Experience", js: "Experience", typ: u(0, null) },
        { json: "SportRadarPlayerID", js: "SportRadarPlayerID", typ: "" },
        { json: "RotoworldPlayerID", js: "RotoworldPlayerID", typ: u(0, null) },
        { json: "RotoWirePlayerID", js: "RotoWirePlayerID", typ: 0 },
        { json: "FantasyAlarmPlayerID", js: "FantasyAlarmPlayerID", typ: u(0, null) },
        { json: "StatsPlayerID", js: "StatsPlayerID", typ: u(0, null) },
        { json: "SportsDirectPlayerID", js: "SportsDirectPlayerID", typ: u(0, null) },
        { json: "XmlTeamPlayerID", js: "XmlTeamPlayerID", typ: u(0, null) },
        { json: "InjuryStatus", js: "InjuryStatus", typ: r("Injury") },
        { json: "InjuryBodyPart", js: "InjuryBodyPart", typ: r("Injury") },
        { json: "InjuryStartDate", js: "InjuryStartDate", typ: u(Date, null) },
        { json: "InjuryNotes", js: "InjuryNotes", typ: r("Injury") },
        { json: "FanDuelPlayerID", js: "FanDuelPlayerID", typ: 0 },
        { json: "DraftKingsPlayerID", js: "DraftKingsPlayerID", typ: u(0, null) },
        { json: "YahooPlayerID", js: "YahooPlayerID", typ: 0 },
        { json: "FanDuelName", js: "FanDuelName", typ: "" },
        { json: "DraftKingsName", js: "DraftKingsName", typ: u(null, "") },
        { json: "YahooName", js: "YahooName", typ: "" },
        { json: "DepthChartPosition", js: "DepthChartPosition", typ: u(r("Position"), null) },
        { json: "DepthChartOrder", js: "DepthChartOrder", typ: u(0, null) },
        { json: "GlobalTeamID", js: "GlobalTeamID", typ: 0 },
        { json: "FantasyDraftName", js: "FantasyDraftName", typ: u(null, "") },
        { json: "FantasyDraftPlayerID", js: "FantasyDraftPlayerID", typ: u(0, null) },
        { json: "UsaTodayPlayerID", js: "UsaTodayPlayerID", typ: u(0, null) },
        { json: "UsaTodayHeadshotUrl", js: "UsaTodayHeadshotUrl", typ: u(null, "") },
        { json: "UsaTodayHeadshotNoBackgroundUrl", js: "UsaTodayHeadshotNoBackgroundUrl", typ: u(null, "") },
        { json: "UsaTodayHeadshotUpdated", js: "UsaTodayHeadshotUpdated", typ: u(Date, null) },
        { json: "UsaTodayHeadshotNoBackgroundUpdated", js: "UsaTodayHeadshotNoBackgroundUpdated", typ: u(Date, null) },
        { json: "NbaDotComPlayerID", js: "NbaDotComPlayerID", typ: u(0, null) },
    ], false),
    "Position": [
        "C",
        "PG",
        "PF",
        "SF",
        "SG",
    ],
    "Injury": [
        "Scrambled",
    ],
    "PositionCategory": [
        "C",
        "F",
        "G",
    ],
    "Status": [
        "Active",
        "Suspended",
    ],
};
