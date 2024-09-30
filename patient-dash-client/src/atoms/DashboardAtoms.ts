import { atom } from "jotai";

const pageNumberAtom = atom<Number>(1);
const resultsPerPageAtom = atom<Number>(2);

export {
  pageNumberAtom,
  resultsPerPageAtom,
};