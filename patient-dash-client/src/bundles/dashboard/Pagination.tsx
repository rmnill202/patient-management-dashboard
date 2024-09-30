import { useAtom } from 'jotai';
import { range as _range } from 'lodash';
import { useMemo } from 'react';
import { pageNumberAtom } from '../../atoms/DashboardAtoms';


const Pagination = ({currentPage, finalPage}: {currentPage: number, finalPage: number}):JSX.Element => {
  const [_, setPageNumber] = useAtom(pageNumberAtom);
  const pageRange = useMemo(() => _range(1, finalPage + 1), [currentPage, finalPage])

  return (<div>
    {pageRange.map((value) => (
      <button onClick={() => {
        setPageNumber(value);
      }}>{value}</button>
    ))}
  </div>)
}

export default Pagination;