import { Question } from './question.model';

export class Test {
    constructor(
        public name: string,
        public id: string,
        public questions: Question[]
    ) {}
}
