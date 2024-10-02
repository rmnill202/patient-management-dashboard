import { resultsOutdatedAtom, searchStringAtom } from "@/atoms/DashboardAtoms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const Search = ():JSX.Element => {
  const [searchString, setSearchString] = useAtom(searchStringAtom);
  const [localSearchString, setLocalSearchString] = useState<string>(searchString)
  const [outdated, setOutdated] = useAtom(resultsOutdatedAtom);

  useEffect(() => {
    setLocalSearchString(searchString);
  }, [searchString])

  return (
    <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={(e) => {
      e.preventDefault();
      if(outdated) {
        setSearchString(localSearchString);
      }
    }}>
      <Input placeholder="Enter patient name..." type="search" value={localSearchString} onChange={
        (e) => {
          setLocalSearchString(e.target.value);
          setOutdated(true);
        }
        }/>
      <Button type="submit" disabled={!outdated}>Search</Button>
    </form>
  )
}

export default Search;