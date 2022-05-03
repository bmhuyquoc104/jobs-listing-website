import { getAllJobs, getJob, createJob, deleteJob } from "../api/JobAPI";

import { useQuery, useMutation, useQueryClient } from "react-query";

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

// Hook to create job by useMutation 
const useCreateJob = () => {
  const queryClient = useQueryClient();
  return useMutation(createJob, {
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

// Hook to delete job by useMutation
const useDeleteJob = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteJob,{
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
        }
    });
}

//export to use in other files
export {useDeleteJob,useCreateJob,useGetAllJobs,useGetJob};