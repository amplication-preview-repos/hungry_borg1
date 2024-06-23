import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "matchName";

export const MatchTitle = (record: TMatch): string => {
  return record.matchName?.toString() || String(record.id);
};
