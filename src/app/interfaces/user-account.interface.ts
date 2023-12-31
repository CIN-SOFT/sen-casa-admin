export interface UserAccount{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password?: string;
    civility?: string;
    occupation?: string;
    city?: string;
    country?: string;
    address?: string;
    dateOfBirth?: string;
    nationality?: string;
    status?: string;
}