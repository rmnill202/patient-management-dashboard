import { useAtom } from 'jotai';
import { range as _range } from 'lodash';
import { useMemo } from 'react';
import { pageNumberAtom, resultsPerPageAtom } from '../../atoms/DashboardAtoms';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import useGetPatients from '@/hooks/useGetPatients';


const Pagination = ({currentPage, finalPage}: {currentPage: number, finalPage: number}):JSX.Element => {
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const [perPage, setPerPage] = useAtom(resultsPerPageAtom);
  const pageRange = useMemo(() => _range(1, finalPage + 1), [currentPage, finalPage]);
  
  // return (<div>
  //   {pageRange.map((value) => (
  //     <button onClick={() => {
  //       setPageNumber(value);
  //     }}>{value}</button>
  //   ))}
  // </div>);
  return (
  <div className="flex items-center justify-between px-2">
    <div className="flex-1 text-sm text-muted-foreground flex align-end gap-2">
      {/* <p className="text-sm font-medium">Results per page</p>
      <Select
        value={`${perPage}`}
        onValueChange={(value) => {
          const numValue = Number(value);
          // Logic for resetting page. Could be improved to dynamically determine which page the user should be on.
          // Debounce ends up not being required, duplicate API calls aren't made
          setPageNumber(1);
          setPerPage(numValue)
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={`${perPage}`} />
        </SelectTrigger>
        <SelectContent side="top">
          {[2, 5, 10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select> */}
    </div>
    <div className="flex items-center space-x-6 lg:space-x-8">
      <div className="flex items-center space-x-2">
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {`${pageNumber}`} of {`${finalPage}`}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => setPageNumber(1)}
          disabled={pageNumber <= 1}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber <= 1}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={currentPage >= finalPage}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => setPageNumber(finalPage)}
          disabled={currentPage >= finalPage}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>)
}

export default Pagination;