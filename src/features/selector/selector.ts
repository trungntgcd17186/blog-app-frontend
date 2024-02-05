import { createSelector } from "reselect";

export const memoizedSelector = createSelector(
  [(state) => state.user],
  (user) => {
    return user;
  }
);
