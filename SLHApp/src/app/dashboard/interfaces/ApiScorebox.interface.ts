// To parse this data:
//
//   import { Convert } from "./file";
//
//   const apiscoresbox = Convert.toApiscoresbox(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Apiscoresbox {
    Game:        Game;
    Quarters:    Quarter[];
    TeamGames:   PlayerGameElement[];
    PlayerGames: PlayerGameElement[];
}

export interface Game {
    GameID:                       number;
    Season:                       number;
    SeasonType:                   number;
    Status:                       string;
    Day:                          Date;
    DateTime:                     Date;
    AwayTeam:                     string;
    HomeTeam:                     string;
    AwayTeamID:                   number;
    HomeTeamID:                   number;
    StadiumID:                    number;
    Channel:                      string;
    Attendance:                   number;
    AwayTeamScore:                number;
    HomeTeamScore:                number;
    Updated:                      Date;
    Quarter:                      null;
    TimeRemainingMinutes:         null;
    TimeRemainingSeconds:         null;
    PointSpread:                  number;
    OverUnder:                    number;
    AwayTeamMoneyLine:            number;
    HomeTeamMoneyLine:            number;
    GlobalGameID:                 number;
    GlobalAwayTeamID:             number;
    GlobalHomeTeamID:             number;
    PointSpreadAwayTeamMoneyLine: number;
    PointSpreadHomeTeamMoneyLine: number;
    LastPlay:                     LastPlay;
    IsClosed:                     boolean;
    GameEndDateTime:              Date;
    HomeRotationNumber:           number;
    AwayRotationNumber:           number;
    NeutralVenue:                 boolean;
    OverPayout:                   number;
    UnderPayout:                  number;
    CrewChiefID:                  number;
    UmpireID:                     number;
    RefereeID:                    number;
    AlternateID:                  null;
    DateTimeUTC:                  Date;
    SeriesInfo:                   null;
    Quarters:                     Quarter[];
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

export enum AwayTeam {
    Bkn = "BKN",
    Den = "DEN",
    Det = "DET",
    Ind = "IND",
    Mil = "MIL",
    Okc = "OKC",
    Orl = "ORL",
    Pho = "PHO",
    Sac = "SAC",
    Tor = "TOR",
    
}

export enum LastPlay {
    Scrambled = "Scrambled",
}

export interface Quarter {
    QuarterID: number;
    GameID:    number;
    Number:    number;
    Name:      string;
    AwayScore: number;
    HomeScore: number;
}

export interface PlayerGameElement {
    StatID:                        number;
    TeamID:                        number;
    PlayerID?:                     number;
    SeasonType:                    number;
    Season:                        number;
    Name:                          string;
    Team:                          Team;
    Position?:                     Position;
    Started?:                      number;
    FanDuelSalary?:                number | null;
    DraftKingsSalary?:             number | null;
    FantasyDataSalary?:            number | null;
    YahooSalary?:                  number | null;
    InjuryStatus?:                 LastPlay;
    InjuryBodyPart?:               LastPlay;
    InjuryStartDate?:              Date | null;
    InjuryNotes?:                  LastPlay;
    FanDuelPosition?:              null | string;
    DraftKingsPosition?:           Position | null;
    YahooPosition?:                Position | null;
    OpponentRank?:                 number;
    OpponentPositionRank?:         number;
    GlobalTeamID:                  number;
    FantasyDraftSalary?:           null;
    FantasyDraftPosition?:         LastPlay;
    GameID:                        number;
    OpponentID:                    number;
    Opponent:                      Team;
    Day:                           Date;
    DateTime:                      Date;
    HomeOrAway:                    HomeOrAway;
    IsGameOver:                    boolean;
    GlobalGameID:                  number;
    GlobalOpponentID:              number;
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
    OffensiveReboundsPercentage:   number | null;
    DefensiveReboundsPercentage:   number | null;
    TotalReboundsPercentage:       number | null;
    Assists:                       number;
    Steals:                        number;
    BlockedShots:                  number;
    Turnovers:                     number;
    PersonalFouls:                 number;
    Points:                        number;
    TrueShootingAttempts:          number;
    TrueShootingPercentage:        number;
    PlayerEfficiencyRating:        number | null;
    AssistsPercentage:             number | null;
    StealsPercentage:              number | null;
    BlocksPercentage:              number | null;
    TurnOversPercentage:           number | null;
    UsageRatePercentage:           number | null;
    FantasyPointsFanDuel:          number;
    FantasyPointsDraftKings:       number;
    FantasyPointsYahoo:            number;
    PlusMinus:                     number;
    DoubleDoubles:                 number;
    TripleDoubles:                 number;
    FantasyPointsFantasyDraft:     number;
    IsClosed:                      boolean;
    LineupConfirmed:               boolean | null;
    LineupStatus:                  LastPlay;
    Wins?:                         number;
    Losses?:                       number;
    Possessions?:                  number;
}

export enum Position {
    C = "C",
    PG = "PG",
    PGSg = "PG/SG",
    Pf = "PF",
    PfC = "PF/C",
    Sf = "SF",
    SfPf = "SF/PF",
    Sg = "SG",
    SgSf = "SG/SF",
}

export enum HomeOrAway {
    Away = "AWAY",
    Home = "HOME",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toApiscoresbox(json: string): Apiscoresbox[] {
        return cast(JSON.parse(json), a(r("Apiscoresbox")));
    }

    public static apiscoresboxToJson(value: Apiscoresbox[]): string {
        return JSON.stringify(uncast(value, a(r("Apiscoresbox"))), null, 2);
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
    "Apiscoresbox": o([
        { json: "Game", js: "Game", typ: r("Game") },
        { json: "Quarters", js: "Quarters", typ: a(r("Quarter")) },
        { json: "TeamGames", js: "TeamGames", typ: a(r("PlayerGameElement")) },
        { json: "PlayerGames", js: "PlayerGames", typ: a(r("PlayerGameElement")) },
    ], false),
    "Game": o([
        { json: "GameID", js: "GameID", typ: 0 },
        { json: "Season", js: "Season", typ: 0 },
        { json: "SeasonType", js: "SeasonType", typ: 0 },
        { json: "Status", js: "Status", typ: "" },
        { json: "Day", js: "Day", typ: Date },
        { json: "DateTime", js: "DateTime", typ: Date },
        { json: "AwayTeam", js: "AwayTeam", typ: r("AwayTeam") },
        { json: "HomeTeam", js: "HomeTeam", typ: r("AwayTeam") },
        { json: "AwayTeamID", js: "AwayTeamID", typ: 0 },
        { json: "HomeTeamID", js: "HomeTeamID", typ: 0 },
        { json: "StadiumID", js: "StadiumID", typ: 0 },
        { json: "Channel", js: "Channel", typ: "" },
        { json: "Attendance", js: "Attendance", typ: 0 },
        { json: "AwayTeamScore", js: "AwayTeamScore", typ: 0 },
        { json: "HomeTeamScore", js: "HomeTeamScore", typ: 0 },
        { json: "Updated", js: "Updated", typ: Date },
        { json: "Quarter", js: "Quarter", typ: null },
        { json: "TimeRemainingMinutes", js: "TimeRemainingMinutes", typ: null },
        { json: "TimeRemainingSeconds", js: "TimeRemainingSeconds", typ: null },
        { json: "PointSpread", js: "PointSpread", typ: 3.14 },
        { json: "OverUnder", js: "OverUnder", typ: 3.14 },
        { json: "AwayTeamMoneyLine", js: "AwayTeamMoneyLine", typ: 0 },
        { json: "HomeTeamMoneyLine", js: "HomeTeamMoneyLine", typ: 0 },
        { json: "GlobalGameID", js: "GlobalGameID", typ: 0 },
        { json: "GlobalAwayTeamID", js: "GlobalAwayTeamID", typ: 0 },
        { json: "GlobalHomeTeamID", js: "GlobalHomeTeamID", typ: 0 },
        { json: "PointSpreadAwayTeamMoneyLine", js: "PointSpreadAwayTeamMoneyLine", typ: 0 },
        { json: "PointSpreadHomeTeamMoneyLine", js: "PointSpreadHomeTeamMoneyLine", typ: 0 },
        { json: "LastPlay", js: "LastPlay", typ: r("LastPlay") },
        { json: "IsClosed", js: "IsClosed", typ: true },
        { json: "GameEndDateTime", js: "GameEndDateTime", typ: Date },
        { json: "HomeRotationNumber", js: "HomeRotationNumber", typ: 0 },
        { json: "AwayRotationNumber", js: "AwayRotationNumber", typ: 0 },
        { json: "NeutralVenue", js: "NeutralVenue", typ: true },
        { json: "OverPayout", js: "OverPayout", typ: 0 },
        { json: "UnderPayout", js: "UnderPayout", typ: 0 },
        { json: "CrewChiefID", js: "CrewChiefID", typ: 0 },
        { json: "UmpireID", js: "UmpireID", typ: 0 },
        { json: "RefereeID", js: "RefereeID", typ: 0 },
        { json: "AlternateID", js: "AlternateID", typ: null },
        { json: "DateTimeUTC", js: "DateTimeUTC", typ: Date },
        { json: "SeriesInfo", js: "SeriesInfo", typ: null },
        { json: "Quarters", js: "Quarters", typ: a(r("Quarter")) },
    ], false),
    "Quarter": o([
        { json: "QuarterID", js: "QuarterID", typ: 0 },
        { json: "GameID", js: "GameID", typ: 0 },
        { json: "Number", js: "Number", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "AwayScore", js: "AwayScore", typ: 0 },
        { json: "HomeScore", js: "HomeScore", typ: 0 },
    ], false),
    "PlayerGameElement": o([
        { json: "StatID", js: "StatID", typ: 0 },
        { json: "TeamID", js: "TeamID", typ: 0 },
        { json: "PlayerID", js: "PlayerID", typ: u(undefined, 0) },
        { json: "SeasonType", js: "SeasonType", typ: 0 },
        { json: "Season", js: "Season", typ: 0 },
        { json: "Name", js: "Name", typ: "" },
        { json: "Team", js: "Team", typ: r("AwayTeam") },
        { json: "Position", js: "Position", typ: u(undefined, r("Position")) },
        { json: "Started", js: "Started", typ: u(undefined, 0) },
        { json: "FanDuelSalary", js: "FanDuelSalary", typ: u(undefined, u(0, null)) },
        { json: "DraftKingsSalary", js: "DraftKingsSalary", typ: u(undefined, u(0, null)) },
        { json: "FantasyDataSalary", js: "FantasyDataSalary", typ: u(undefined, u(0, null)) },
        { json: "YahooSalary", js: "YahooSalary", typ: u(undefined, u(0, null)) },
        { json: "InjuryStatus", js: "InjuryStatus", typ: u(undefined, r("LastPlay")) },
        { json: "InjuryBodyPart", js: "InjuryBodyPart", typ: u(undefined, r("LastPlay")) },
        { json: "InjuryStartDate", js: "InjuryStartDate", typ: u(undefined, u(Date, null)) },
        { json: "InjuryNotes", js: "InjuryNotes", typ: u(undefined, r("LastPlay")) },
        { json: "FanDuelPosition", js: "FanDuelPosition", typ: u(undefined, u(null, "")) },
        { json: "DraftKingsPosition", js: "DraftKingsPosition", typ: u(undefined, u(r("Position"), null)) },
        { json: "YahooPosition", js: "YahooPosition", typ: u(undefined, u(r("Position"), null)) },
        { json: "OpponentRank", js: "OpponentRank", typ: u(undefined, 0) },
        { json: "OpponentPositionRank", js: "OpponentPositionRank", typ: u(undefined, 0) },
        { json: "GlobalTeamID", js: "GlobalTeamID", typ: 0 },
        { json: "FantasyDraftSalary", js: "FantasyDraftSalary", typ: u(undefined, null) },
        { json: "FantasyDraftPosition", js: "FantasyDraftPosition", typ: u(undefined, r("LastPlay")) },
        { json: "GameID", js: "GameID", typ: 0 },
        { json: "OpponentID", js: "OpponentID", typ: 0 },
        { json: "Opponent", js: "Opponent", typ: r("AwayTeam") },
        { json: "Day", js: "Day", typ: Date },
        { json: "DateTime", js: "DateTime", typ: Date },
        { json: "HomeOrAway", js: "HomeOrAway", typ: r("HomeOrAway") },
        { json: "IsGameOver", js: "IsGameOver", typ: true },
        { json: "GlobalGameID", js: "GlobalGameID", typ: 0 },
        { json: "GlobalOpponentID", js: "GlobalOpponentID", typ: 0 },
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
        { json: "OffensiveReboundsPercentage", js: "OffensiveReboundsPercentage", typ: u(3.14, null) },
        { json: "DefensiveReboundsPercentage", js: "DefensiveReboundsPercentage", typ: u(3.14, null) },
        { json: "TotalReboundsPercentage", js: "TotalReboundsPercentage", typ: u(3.14, null) },
        { json: "Assists", js: "Assists", typ: 3.14 },
        { json: "Steals", js: "Steals", typ: 3.14 },
        { json: "BlockedShots", js: "BlockedShots", typ: 3.14 },
        { json: "Turnovers", js: "Turnovers", typ: 3.14 },
        { json: "PersonalFouls", js: "PersonalFouls", typ: 3.14 },
        { json: "Points", js: "Points", typ: 3.14 },
        { json: "TrueShootingAttempts", js: "TrueShootingAttempts", typ: 3.14 },
        { json: "TrueShootingPercentage", js: "TrueShootingPercentage", typ: 3.14 },
        { json: "PlayerEfficiencyRating", js: "PlayerEfficiencyRating", typ: u(3.14, null) },
        { json: "AssistsPercentage", js: "AssistsPercentage", typ: u(3.14, null) },
        { json: "StealsPercentage", js: "StealsPercentage", typ: u(3.14, null) },
        { json: "BlocksPercentage", js: "BlocksPercentage", typ: u(3.14, null) },
        { json: "TurnOversPercentage", js: "TurnOversPercentage", typ: u(3.14, null) },
        { json: "UsageRatePercentage", js: "UsageRatePercentage", typ: u(3.14, null) },
        { json: "FantasyPointsFanDuel", js: "FantasyPointsFanDuel", typ: 3.14 },
        { json: "FantasyPointsDraftKings", js: "FantasyPointsDraftKings", typ: 3.14 },
        { json: "FantasyPointsYahoo", js: "FantasyPointsYahoo", typ: 3.14 },
        { json: "PlusMinus", js: "PlusMinus", typ: 3.14 },
        { json: "DoubleDoubles", js: "DoubleDoubles", typ: 3.14 },
        { json: "TripleDoubles", js: "TripleDoubles", typ: 0 },
        { json: "FantasyPointsFantasyDraft", js: "FantasyPointsFantasyDraft", typ: 3.14 },
        { json: "IsClosed", js: "IsClosed", typ: true },
        { json: "LineupConfirmed", js: "LineupConfirmed", typ: u(true, null) },
        { json: "LineupStatus", js: "LineupStatus", typ: r("LastPlay") },
        { json: "Wins", js: "Wins", typ: u(undefined, 0) },
        { json: "Losses", js: "Losses", typ: u(undefined, 0) },
        { json: "Possessions", js: "Possessions", typ: u(undefined, 3.14) },
    ], false),
    "AwayTeam": [
        "BRK",
        "DEN",
        "DET",
        "IND",
        "MIL",
        "OKC",
        "ORL",
        "PHO",
        "SAC",
        "TOR",
    ],
    "LastPlay": [
        "Scrambled",
    ],
    "Position": [
        "C",
        "PG",
        "PG/SG",
        "PF",
        "PF/C",
        "SF",
        "SF/PF",
        "SG",
        "SG/SF",
    ],
    "HomeOrAway": [
        "AWAY",
        "HOME",
    ],
};
