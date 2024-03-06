export class CreateQuestionDto {
  title: string;

  hint: string;

  categoryId: number;

  examId: number;

  answers: Answer[];
}

export class Answer {
  title: string;

  correct: boolean;
}
