// To parse this data:
//
//   import { Convert } from "./file";
//
//   const apiplayers = Convert.toApiplayers(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Apiplayers {
    StatID:                        number;
    TeamID:                        number;
    PlayerID:                      number;
    SeasonType:                    number;
    Season:                        number;
    Name:                          string;
    Team:                          string;
    Position:                      Position;
    Started:                       number;
    GlobalTeamID:                  number;
    Updated:                       Date;
    Games:                         number;
    FantasyPoints:                 number;
    Minutes:                       number;
    Seconds:                       number;
    FieldGoalsMade:                number;
    FieldGoalsAttempted:           number;
    FieldGoalsPercentage:          number;
    EffectiveFieldGoalsPercentage: number;
    TwoPointersMade:               number;
    TwoPointersAttempted:          number;
    TwoPointersPercentage:         number;
    ThreePointersMade:             number;
    ThreePointersAttempted:        number;
    ThreePointersPercentage:       number;
    FreeThrowsMade:                number;
    FreeThrowsAttempted:           number;
    FreeThrowsPercentage:          number;
    OffensiveRebounds:             number;
    DefensiveRebounds:             number;
    Rebounds:                      number;
    OffensiveReboundsPercentage:   number;
    DefensiveReboundsPercentage:   number;
    TotalReboundsPercentage:       number;
    Assists:                       number;
    Steals:                        number;
    BlockedShots:                  number;
    Turnovers:                     number;
    PersonalFouls:                 number;
    Points:                        number;
    TrueShootingAttempts:          number;
    TrueShootingPercentage:        number;
    PlayerEfficiencyRating:        number;
    AssistsPercentage:             number;
    StealsPercentage:              number;
    BlocksPercentage:              number;
    TurnOversPercentage:           number;
    UsageRatePercentage:           number;
    FantasyPointsFanDuel:          number;
    FantasyPointsDraftKings:       number;
    FantasyPointsYahoo:            number;
    PlusMinus:                     number;
    DoubleDoubles:                 number;
    TripleDoubles:                 number;
    FantasyPointsFantasyDraft:     number;
    IsClosed:                      boolean;
    LineupConfirmed:               null;
    LineupStatus:                  LineupStatus;
}

export enum LineupStatus {
    Scrambled = "Scrambled",
}

export enum Position {
    C = "C",
    PG = "PG",
    Pf = "PF",
    Sf = "SF",
    Sg = "SG",
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
        { json: "StatID", js: "StatID", typ: 0 },
        { json: "TeamID", js: "TeamID", typ: 0 },
        { json: "PlayerID", js: "PlayerID", typ: 0 },
        { json: "SeasonType", js: "SeasonType", typ: 0 },
        { json: "Season", js: "Season", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Team", js: "Team", typ: "" },
        { json: "Position", js: "Position", typ: r("Position") },
        { json: "Started", js: "Started", typ: 0 },
        { json: "GlobalTeamID", js: "GlobalTeamID", typ: 0 },
        { json: "Updated", js: "Updated", typ: Date },
        { json: "Games", js: "Games", typ: 0 },
        { json: "FantasyPoints", js: "FantasyPoints", typ: 3.14 },
        { json: "Minutes", js: "Minutes", typ: 0 },
        { json: "Seconds", js: "Seconds", typ: 0 },
        { json: "FieldGoalsMade", js: "FieldGoalsMade", typ: 3.14 },
        { json: "FieldGoalsAttempted", js: "FieldGoalsAttempted", typ: 3.14 },
        { json: "FieldGoalsPercentage", js: "FieldGoalsPercentage", typ: 3.14 },
        { json: "EffectiveFieldGoalsPercentage", js: "EffectiveFieldGoalsPercentage", typ: 3.14 },
        { json: "TwoPointersMade", js: "TwoPointersMade", typ: 3.14 },
        { json: "TwoPointersAttempted", js: "TwoPointersAttempted", typ: 3.14 },
        { json: "TwoPointersPercentage", js: "TwoPointersPercentage", typ: 3.14 },
        { json: "ThreePointersMade", js: "ThreePointersMade", typ: 3.14 },
        { json: "ThreePointersAttempted", js: "ThreePointersAttempted", typ: 3.14 },
        { json: "ThreePointersPercentage", js: "ThreePointersPercentage", typ: 3.14 },
        { json: "FreeThrowsMade", js: "FreeThrowsMade", typ: 3.14 },
        { json: "FreeThrowsAttempted", js: "FreeThrowsAttempted", typ: 3.14 },
        { json: "FreeThrowsPercentage", js: "FreeThrowsPercentage", typ: 3.14 },
        { json: "OffensiveRebounds", js: "OffensiveRebounds", typ: 3.14 },
        { json: "DefensiveRebounds", js: "DefensiveRebounds", typ: 3.14 },
        { json: "Rebounds", js: "Rebounds", typ: 3.14 },
        { json: "OffensiveReboundsPercentage", js: "OffensiveReboundsPercentage", typ: 3.14 },
        { json: "DefensiveReboundsPercentage", js: "DefensiveReboundsPercentage", typ: 3.14 },
        { json: "TotalReboundsPercentage", js: "TotalReboundsPercentage", typ: 3.14 },
        { json: "Assists", js: "Assists", typ: 3.14 },
        { json: "Steals", js: "Steals", typ: 3.14 },
        { json: "BlockedShots", js: "BlockedShots", typ: 3.14 },
        { json: "Turnovers", js: "Turnovers", typ: 3.14 },
        { json: "PersonalFouls", js: "PersonalFouls", typ: 3.14 },
        { json: "Points", js: "Points", typ: 3.14 },
        { json: "TrueShootingAttempts", js: "TrueShootingAttempts", typ: 3.14 },
        { json: "TrueShootingPercentage", js: "TrueShootingPercentage", typ: 3.14 },
        { json: "PlayerEfficiencyRating", js: "PlayerEfficiencyRating", typ: 3.14 },
        { json: "AssistsPercentage", js: "AssistsPercentage", typ: 3.14 },
        { json: "StealsPercentage", js: "StealsPercentage", typ: 3.14 },
        { json: "BlocksPercentage", js: "BlocksPercentage", typ: 3.14 },
        { json: "TurnOversPercentage", js: "TurnOversPercentage", typ: 3.14 },
        { json: "UsageRatePercentage", js: "UsageRatePercentage", typ: 3.14 },
        { json: "FantasyPointsFanDuel", js: "FantasyPointsFanDuel", typ: 3.14 },
        { json: "FantasyPointsDraftKings", js: "FantasyPointsDraftKings", typ: 3.14 },
        { json: "FantasyPointsYahoo", js: "FantasyPointsYahoo", typ: 3.14 },
        { json: "PlusMinus", js: "PlusMinus", typ: 3.14 },
        { json: "DoubleDoubles", js: "DoubleDoubles", typ: 3.14 },
        { json: "TripleDoubles", js: "TripleDoubles", typ: 3.14 },
        { json: "FantasyPointsFantasyDraft", js: "FantasyPointsFantasyDraft", typ: 3.14 },
        { json: "IsClosed", js: "IsClosed", typ: true },
        { json: "LineupConfirmed", js: "LineupConfirmed", typ: null },
        { json: "LineupStatus", js: "LineupStatus", typ: r("LineupStatus") },
    ], false),
    "LineupStatus": [
        "Scrambled",
    ],
    "Position": [
        "C",
        "PG",
        "PF",
        "SF",
        "SG",
    ],
};
