import { Alert,AlertTitle } from "@/components/ui/alert";
import { useContext } from "react";
import { DataContext } from "@/context/dataContext";
export const ErroMessage = () => {
  const {errors} = useContext(DataContext)
  const error = errors.tokenError.message || errors.emailError.message || errors.userError.message;
  if(error){
    return  <Alert variant="destructive">
        <AlertTitle>{error}, Check if you are loged in or refresh the page</AlertTitle>
    </Alert>
  }
  return null;
}
