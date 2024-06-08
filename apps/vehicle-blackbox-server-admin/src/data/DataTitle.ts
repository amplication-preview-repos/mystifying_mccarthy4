import { Data as TData } from "../api/data/Data";

export const DATA_TITLE_FIELD = "digest";

export const DataTitle = (record: TData): string => {
  return record.digest?.toString() || String(record.id);
};
