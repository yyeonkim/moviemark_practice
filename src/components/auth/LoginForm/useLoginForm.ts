import { useState, useCallback, ChangeEvent, FormEvent } from "react";

import { useAuth } from "@/hooks/useAuth";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";
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
	const { showToastMessage } = useToastMessageContext();
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
			showToastMessage({ type: "success", message: "로그인 성공!" });
			onSuccess?.();
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "로그인 실패";
			showToastMessage({ type: "error", message: errorMessage });
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
