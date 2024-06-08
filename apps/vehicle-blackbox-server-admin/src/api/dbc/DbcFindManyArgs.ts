import { DbcWhereInput } from "./DbcWhereInput";
import { DbcOrderByInput } from "./DbcOrderByInput";

export type DbcFindManyArgs = {
  where?: DbcWhereInput;
  orderBy?: Array<DbcOrderByInput>;
  skip?: number;
  take?: number;
};
