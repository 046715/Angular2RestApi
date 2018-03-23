import { AppError } from './app-error';
export class BadInputError extends AppError{
    constructor(private badInputError?:any) {
        super(badInputError);
    }
}