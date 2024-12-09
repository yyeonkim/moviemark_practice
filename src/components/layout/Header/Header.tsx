"use client";

import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import { isLoggedInState } from "@/store/auth";
import { useAuth } from "@/hooks/useAuth";
import { useToastMessageContext } from "@/providers/ToastMessageProvider";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const { logout } = useAuth();
  const { showToastMessage } = useToastMessageContext();

  return (
    <header className="max-w-[120rem] w-full mx-auto h-[8rem] flex justify-between items-center p-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-start gap-4">
        <Link href="/movies">
          <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
            Movies
          </div>
        </Link>
        <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
          Bookmark
        </div>
        <div className="flex items-center gap-2">
          <div>
            <HamburgerButton />
          </div>
          <Link
            href={isLoggedIn ? "/" : "/login"}
            className="flex gap-2 py-3 px-4 cursor-pointer"
            onClick={() => {
              if (isLoggedIn) {
                logout();
                showToastMessage({
                  type: "success",
                  message: "로그아웃되었습니다",
                });
              }
            }}
          >
            <Image
              src="/icons/logout.svg"
              alt="화살표"
              width={16}
              height={16}
            />
            <span className="text-link text-gray-50">
              {isLoggedIn ? "Logout" : "Login"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
