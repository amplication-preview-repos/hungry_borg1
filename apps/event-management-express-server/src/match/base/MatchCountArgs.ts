/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MatchWhereInput } from "./MatchWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MatchCountArgs {
  @ApiProperty({
    required: false,
    type: () => MatchWhereInput,
  })
  @Field(() => MatchWhereInput, { nullable: true })
  @Type(() => MatchWhereInput)
  where?: MatchWhereInput;
}

export { MatchCountArgs as MatchCountArgs };