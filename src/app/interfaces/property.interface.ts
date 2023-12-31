export interface Property{
    id?: number;
    name?: string
    description?:  string
    programId?: string
    location?: string
    area?: string;
    price?: string;
    minimumSave?: string;  // Montant minimum requis pour avoir les papiers de la maison
    type?: string;
    minimumSolde?: string;  // depot minimum initial
    paymentDuration?: number;// duree de l’epargne pour le programme
    bed?: string;
    bath?: string;
    conditions?: string;
    images?: Array<string>;
    principalImage?: string;
    planImage: string;
    otherImages: Array<string>
}