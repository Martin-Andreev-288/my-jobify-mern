import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  return <h1>PageBtnContainer</h1>;
};

export default PageBtnContainer;
