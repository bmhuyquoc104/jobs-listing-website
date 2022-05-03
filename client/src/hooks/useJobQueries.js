import { getAllJobs, getJob, createJob, deleteJob } from "../api/JobAPI";

import { useQuery, useMutate, useQueryClient } from "react-query";

// Hook to query all jobs by useQuery 
const useGetAllJobs = (onSuccess, onError) => {
  return useQuery(["jobs"], getAllJobs, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

// Hook to query job by useQuery 
const useGetJob = (onSuccess, onError, id) => {
  return useQuery(["job", id], () => getJob, {
    onSuccess,
    onError,
    enabled: Boolean(id),
  });
};

// Hook to create job by useMutate 
const useCreateJob = () => {
  const queryClient = useQueryClient();
  return useMutate(createJob, {
    onSuccess: (data) => {
      queryClient.setQueriesData(["jobs"], (oldData) => {
        return {
            ...oldData,
            data: [...oldData.data,data.data]
        }
      });
    },
  });
};

// Hook to delete job by useMutate
const useDeleteJob = () => {
    const queryClient = useQueryClient();
    return useMutate(deleteJob,{
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
        }
    });
}

//export to use in other files
export {useDeleteJob,useCreateJob,useGetAllJobs,useGetJob};