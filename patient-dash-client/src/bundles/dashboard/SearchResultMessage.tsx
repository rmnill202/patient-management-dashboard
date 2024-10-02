import { searchStringAtom } from "@/atoms/DashboardAtoms"
import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useAtom } from "jotai"

const SearchResultMessage = ():JSX.Element => {
  const [searchString, setSearchString] = useAtom(searchStringAtom);

  if(!searchString) {
    return <></>
  }

  return (<div className="text-sm mt-4 ml-2 flex align-middle gap-1 text-opacity-50 ">
    Showing results for "{searchString}"
    <Button size={'icon'} className="h-5 w-5" variant={'outline'} onClick={() => setSearchString('')}>
      <Cross1Icon/>
    </Button>
  </div>);
}

export default SearchResultMessage;
