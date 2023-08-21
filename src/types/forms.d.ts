export interface IInputObj {
    [name: string]: string|number|boolean|null
}

export interface ErrMsgCallback {
    (data: FormErrorMessages): void
}

export type ErrorMessagTxt =string | null
export type FormErrorMessages = Record<string, ErrorMessagTxt>

export type GeneralInputType = string|number|boolean|null

export interface IAddressForm {
    country_id: number|null,
    city_id: number|null,
    street_nr: string|null,
    street_name: string|null,
    postcode: string|null
}