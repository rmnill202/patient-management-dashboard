import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants/environment";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../atoms/DashboardAtoms";

const fetchPatients = async (page: Number) => {
  const res = await fetch(`${API_URL}/patients?count=10&page=${page}`);
  return await res.json();
}

const useGetPatients = () => {
  const [pageNumber] = useAtom(pageNumberAtom);
  
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['projects', pageNumber],
      queryFn: () => fetchPatients(pageNumber),
      placeholderData: keepPreviousData,
    })

  
  return {
    isPending,
    isFetching,
    isPlaceholderData,
    data,
    error,
    isError
  };
}

export default useGetPatients;