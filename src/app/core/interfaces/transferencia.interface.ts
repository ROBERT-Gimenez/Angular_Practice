export interface Transferencia {
    accountId : number
    amount : string
    concept : string
    createdAt : string
    date : string
    id : number
    to_account_id : number
    type :'topup'|'payment '
    userId : number
    updatedAt? : string
}