import { NestFactory } from '@nestjs/core';

export type UnPromise<T> = T extends Promise<infer U> ? U : T;
export type NestAppType = UnPromise<ReturnType<typeof NestFactory.create>>;
