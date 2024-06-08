import { Dbc as TDbc } from "../api/dbc/Dbc";

export const DBC_TITLE_FIELD = "name";

export const DbcTitle = (record: TDbc): string => {
  return record.name?.toString() || String(record.id);
};
