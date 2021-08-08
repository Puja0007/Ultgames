export interface CheckoutObj {

    productID:string,
    productQty:number,
    userName:string,
    userMail:string,
    address:string,
    state:string,
    city:string,
    zip:string,
    paymentType:string,
    accountNo?:number,
    ifsc?:number
}