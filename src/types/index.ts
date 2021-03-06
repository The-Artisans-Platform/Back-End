import { Profile } from "../entity/Profile";
import { Request, Response } from "express";
import { ObjectType, Field } from "type-graphql";
import { Stream } from "stream";

export interface ExpressContext {
  req: Request;
  res: Response;
}

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@ObjectType()
export class ApiResponse {
  @Field()
  message: string;

  @Field()
  status: boolean;
}

@ObjectType()
export class AuthResponse extends ApiResponse {
  @Field(() => Profile, { nullable: true })
  profile: Profile | null;
}
