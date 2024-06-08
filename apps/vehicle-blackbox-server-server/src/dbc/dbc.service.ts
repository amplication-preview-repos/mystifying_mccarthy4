import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbcServiceBase } from "./base/dbc.service.base";

@Injectable()
export class DbcService extends DbcServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
