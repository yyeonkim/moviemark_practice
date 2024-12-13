import { useState, useCallback, ChangeEvent, FormEvent } from "react";

import { useAuth } from "@/hooks/useAuth";
import { validateEmail, validatePassword } from "@/utils/validate";

interface UseLoginFormProps {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

interface FormState {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

export const useLoginForm = ({ onSuccess, onError }: UseLoginFormProps) => {
    const [formState, setFormState] = useState<FormState>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const validateForm = useCallback(() => {
        const newErrors: FormErrors = {};

        const emailError = validateEmail(formState.email);
        if (emailError) newErrors.email = emailError;

        const passwordError = validatePassword(formState.password);
        if (passwordError) newErrors.password = passwordError;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formState.email, formState.password]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            await login(formState);
            onSuccess?.();
        } catch (error) {
            onError?.(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formState,
        errors,
        isLoading,
        handleSubmit,
        handleChange,
    };
};
