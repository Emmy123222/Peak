
'use client';

import { AppDispatch } from "@/store";
import { login } from "@/store/features/authSlice";
import { startLoading, stopLoading } from "@/store/features/uiSlice"; // Add this to your store

interface SignupData {
    email: string;
    password: string;
    role: 'tutor' | 'student' | 'parent';
    name: string;
    phone: string;
    childName?: string;
    age?: string;
    grade?: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    errors?: Record<string, string>;
}

export const registerUser = (data: SignupData) => async (dispatch: AppDispatch): Promise<ApiResponse> => {
    // Start loading state
    dispatch(startLoading('register'));
    
    // Clean data before sending
    const { confirmPassword, acceptTerms, ...apiData } = data;
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
        // process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(`http://13.62.19.78:3000/api/v1/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiData),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const result = await res.json();

        if (!res.ok) {
            // Handle different error types
            if (res.status === 422 && result.errors) {
                return {
                    success: false,
                    message: "Validation failed",
                    errors: result.errors
                };
            }
            return {
                success: false,
                message: result.message || `Registration failed with status ${res.status}`,
            };
        }

        // Dispatch login if registration succeeds
        dispatch(login(result.data));
        
        return {
            success: true,
            message: result.message || "1 successful",
            data: result.data
        };

    } catch (error: any) {
        let errorMessage = "Network error occurred";
        
        if (error.name === 'AbortError') {
            errorMessage = "Request timed out";
        } else if (error instanceof SyntaxError) {
            errorMessage = "Invalid server response";
        }

        console.error('Registration error:', error);
        return {
            success: false,
            message: errorMessage,
        };
    } finally {
        // Stop loading state regardless of outcome
        dispatch(stopLoading('register'));
    }
};