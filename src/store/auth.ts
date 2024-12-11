import { atom, selector } from "recoil";

import type { User } from "@/types/auth";

interface AuthState {
  user: Pick<User, "email"> | null;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    user: null,
  },
});

export const isLoggedInState = selector({
<<<<<<< HEAD
  key: "isLoggedInState",
  get: ({ get }) => {
    const { user } = get(authState);
    return !!user?.sub;
  },
});
=======
	key: "isLoggedInState",
	get: ({ get }) => {
		const { user } = get(authState);
		return !!user?.email;
	},
});
>>>>>>> jinyi/practice/day3
