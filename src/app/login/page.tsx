"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import LoginForm from "@/components/auth/LoginForm/LoginForm";

export default function LoginPage() {
	const router = useRouter();

	return (
		<div className="flex flex-col flex-1 h-full w-full justify-center">
			<div className="flex items-center justify-center w-full gap-[12rem]">
				<div className="flex-1">
					<Image src="/images/sally.png" alt="sally" width={486} height={584} className="text-white" />
				</div>
				<div className="flex-1">
					<LoginForm
						onSuccess={() => router.push("/movies")}
						onError={(error) => console.error("로그인 실패:", error)}
					/>
				</div>
			</div>
		</div>
	);
}
