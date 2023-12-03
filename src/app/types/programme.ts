import { FormControl, FormGroup } from "@angular/forms";
import { ProgrammeStatusEnum } from '../enums/ProgrammeStatusEnum';
export type ProgramForm = FormGroup<{
    id?: FormControl<number | null>,
    name: FormControl<string |null>,
    status?: FormControl<ProgrammeStatusEnum |null>,
    image: FormControl<string | File |null>,
}>
