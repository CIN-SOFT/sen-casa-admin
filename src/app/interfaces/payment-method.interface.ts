export interface PaymentMethod{
    slug: string;
    name: string;
    merchantId:string;
    merchantCode?: string;
    baseApiUrl: string;
}