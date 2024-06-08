import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  dbcId?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  secrets?: SortOrder;
  trim?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  vin?: SortOrder;
  year?: SortOrder;
};
