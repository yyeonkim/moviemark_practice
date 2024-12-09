import { memo } from "react";

interface MovieBookmarkProps {
  isBookmarked: boolean;
  className?: string;
}

const MovieBookmark = memo(({
	isBookmarked,
	className = "",
}: MovieBookmarkProps) => {

	return (
		<span
			className={`
				absolute
				top-2
				right-0
        transition-all
        duration-200
        hover:scale-110
        focus:outline-none
				cursor-pointer
        ${className}
      `}
		>
			{isBookmarked ? (
				<svg
					className="w-12 h-12 fill-primary"
					viewBox="0 0 24 24"
				>
					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
				</svg>
			) : (
				<svg
					className="w-12 h-12 fill-none stroke-gray-400 hover:stroke-primary"
					viewBox="0 0 24 24"
					strokeWidth="2"
				>
					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
				</svg>
			)}
		</span>
	);
});

// 1. HOC(Higher Order Component) 사용 시
// memo, forwardRef 등으로 감싸진 컴포넌트는 디버깅 시 이름이 누락될 수 있음
//
// 2. 디버깅 용이성
// React DevTools에서 컴포넌트를 쉽게 찾고 식별할 수 있음
// 특히 큰 애플리케이션에서 컴포넌트 트리를 탐색할 때 유용
// 코드 압축(minification) 후에도 식별 가능
// 프로덕션 빌드에서 코드가 압축되어도 DevTools에서 원래 이름을 유지
// 따라서 memo나 forwardRef를 사용할 때는 displayName을 설정하는 것이 좋은 실천 방법입니다.

MovieBookmark.displayName = "MovieBookmark";

export default MovieBookmark;