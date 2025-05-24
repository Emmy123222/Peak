import { NextRouter } from "next/router";

interface IRegistration { 
    data: any, 
    dispatch: any, 
    router: any, 
    setShowVerificationModal: (show: boolean) => void, 
    setIsError: (isError: boolean) => void, 
    setIsLoading: (isLoading: boolean) => void, 
    setError: (error: string) => void, 
    registerUser: (userData: any) => any
    setEmail: (email: string) => void
    role: 'TEACHER' | 'STUDENT' | 'PARENT'
}
export const handleRegistration = async (props: IRegistration) => {
    const userData = { ...props.data, role: props.role };
    // console.log(" User Data:", userData);
    props.setIsError(false);
    props.setIsLoading(true);
    try {
        await props.dispatch(props.setEmail(props.data.email));
        const response = await props.dispatch(props.registerUser(userData as any));
        console.log(response)
        if (response.success) {
            props.router.push("/auth/signup/otp");
            props.setShowVerificationModal(true);
            props.setIsError(true);
            props.setIsLoading(false);
        } else {
            console.log(response.success);
            props.setError(response?.message);
            props.setIsLoading(false);
            props.setIsError(true);
        }
    } catch (error) {
        console.error(error);
        props.setIsLoading(false);
    }
};