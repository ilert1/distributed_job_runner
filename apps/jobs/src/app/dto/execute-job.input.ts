import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import JSON from 'graphql-type-json';

@InputType()
export class ExecuteJobInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => JSON)
  @IsNotEmpty()
  data: object | object[];
}
