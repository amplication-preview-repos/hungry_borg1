/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MatchService } from "../match.service";
import { MatchCreateInput } from "./MatchCreateInput";
import { Match } from "./Match";
import { MatchFindManyArgs } from "./MatchFindManyArgs";
import { MatchWhereUniqueInput } from "./MatchWhereUniqueInput";
import { MatchUpdateInput } from "./MatchUpdateInput";

export class MatchControllerBase {
  constructor(protected readonly service: MatchService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Match })
  async createMatch(@common.Body() data: MatchCreateInput): Promise<Match> {
    return await this.service.createMatch({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        location: true,
        matchName: true,
        players: true,
        time: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Match] })
  @ApiNestedQuery(MatchFindManyArgs)
  async matches(@common.Req() request: Request): Promise<Match[]> {
    const args = plainToClass(MatchFindManyArgs, request.query);
    return this.service.matches({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        location: true,
        matchName: true,
        players: true,
        time: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async match(
    @common.Param() params: MatchWhereUniqueInput
  ): Promise<Match | null> {
    const result = await this.service.match({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        location: true,
        matchName: true,
        players: true,
        time: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMatch(
    @common.Param() params: MatchWhereUniqueInput,
    @common.Body() data: MatchUpdateInput
  ): Promise<Match | null> {
    try {
      return await this.service.updateMatch({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          date: true,
          id: true,
          location: true,
          matchName: true,
          players: true,
          time: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMatch(
    @common.Param() params: MatchWhereUniqueInput
  ): Promise<Match | null> {
    try {
      return await this.service.deleteMatch({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          date: true,
          id: true,
          location: true,
          matchName: true,
          players: true,
          time: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
