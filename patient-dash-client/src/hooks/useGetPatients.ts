import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { API_URL } from "../constants/environment";
import { useAtom } from "jotai";
import { pageNumberAtom, resultsPerPageAtom } from "../atoms/DashboardAtoms";
import { Patient } from "../types/Patient.types";

type GetPatientsData = {
  currentPage: number;
  finalPage: number;
  results: Patient[];
}

const fetchPatients = async (page: Number, resultsPerPage: Number) => {
  const res = await fetch(`${API_URL}/patients?count=${resultsPerPage}&page=${page}`);
  return await res.json();
}

const useGetPatients = () => {
  const [pageNumber] = useAtom(pageNumberAtom);
  const [resultsPerPage] = useAtom(resultsPerPageAtom);
  
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery<GetPatientsData>({
      queryKey: ['projects', pageNumber, resultsPerPage],
      queryFn: () => fetchPatients(pageNumber, resultsPerPage),
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