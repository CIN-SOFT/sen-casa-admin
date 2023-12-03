export interface Property{
    id?: number;
    name?: string
    Description?:  string
    programId?: string
    address?: string
    lat?: string;
    lng?: string;
    supperficie?: string;
    price?: string;
    minimumAmountSave?: string;  // Montant minimum requis pour avoir les papiers de la maison
    type?: string;
    minimumSolde?: string;  // depot minimum initial
    paymentDuration?: number;// duree de l’epargne pour le programme
    bed?: string;
    bath?: string;
    conditions?: string;
    images?: Array<string>
}