import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  matchName?: SortOrder;
  players?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
