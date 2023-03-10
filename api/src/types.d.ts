import { Response } from "express";

export interface MyResponse extends Response {
  send: (body?: any) => MyResponse;
};
