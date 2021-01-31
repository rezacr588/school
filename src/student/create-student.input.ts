import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @Field()
  first_name: string;

  @MinLength(3)
  @Field()
  last_name: string;
}
