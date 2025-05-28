"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setAuth, logout } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
const AuthBootstrapper = () => {
    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        const token = sessionStorage.getItem('pc_token');
        console.log(token);
        if (!token) return;

        const { email, role }: any = jwtDecode(token);
        console.log(email, role);

        if (role === "STUDENT") {
            router.push("/dashboard/tutor");
        } else if (role === "TUTOR") {
            router.push("/dashboard/tutor");

        } else if (role === "ADMIN") {
            router.push("/dashboard/tutor");

        } else if (role === "PARENT") {
            router.push("/dashboard/tutor");
        } else {
            dispatch(logout());
            router.push("/login");
        }

        console.log("token", token);

    }, [dispatch, router])

    return null;
};

export default AuthBootstrapper;