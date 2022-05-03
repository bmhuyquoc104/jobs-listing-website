import React from 'react'
import { useGetAllJobs } from '../../hooks/useJobQueries'
import {Stack,Typography} from '@mui/material'
const Main = () => {
  const {data,loading,error} = useGetAllJobs();

  console.log(data.data);  
  return (
    <Stack>
        <Typography>Main part</Typography>
    </Stack>
  )
}

export default Main