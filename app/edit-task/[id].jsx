import { useLocalSearchParams } from "expo-router";

import { FormTask } from "../../components/FormTask";


const EditTask = () => {

  const { id } = useLocalSearchParams();

  return (
    <FormTask type='edit' id={id} />
  );
};

export default EditTask;
