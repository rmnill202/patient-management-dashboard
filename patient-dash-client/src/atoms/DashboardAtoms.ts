import { atom } from "jotai";
import { withAtomEffect } from 'jotai-effect'


const pageNumberAtom = atom<number>(1);
const resultsPerPageAtom = atom<number>(10);
const searchStringAtom = atom<string>('');

const resultsOutdatedAtom = withAtomEffect(atom<boolean>(true), (get, set) => {
  if(get(searchStringAtom)) {
    set(resultsOutdatedAtom, false);
  }
})

export {
  pageNumberAtom,
  resultsPerPageAtom,
  searchStringAtom,
  resultsOutdatedAtom,
};