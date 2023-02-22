
export interface AuthResponse {

    ok: boolean,
    uid?: string,
    name?: string,
    email?: string,
    token?: string,
    msg?: string,
    errors?: {
        "password": {
            "value": number,
            "msg": string,
            "param": string,
            "location": string,
        }
    }
}