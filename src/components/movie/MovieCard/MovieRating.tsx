interface RatingProps {
  value: number;  // 0-10 사이의 값
  maxValue?: number;  // 최대값 (기본 10)
  size?: "sm" | "md" | "lg";  // 별 크기
  className?: string;
}

const MovieRating = ({ value, maxValue = 10, size = "md", className = "" }: RatingProps) => {
	// 5점 만점으로 변환 (영화 API는 보통 10점 만점이므로)
	const normalizedValue = (value / maxValue) * 5;

	const getSizeClass = () => {
		switch (size) {
		case "sm": return "text-lg";
		case "lg": return "text-2xl";
		default: return "text-xl";
		}
	};

	return (
		<div className={`flex items-center gap-1 ${className}`}>
			{[1, 2, 3, 4, 5].map((star) => (
				<span
					key={star}
					className={`${getSizeClass()} text-yellow-400`}
				>
					{star <= normalizedValue ? "★" : "☆"}
				</span>
			))}
			<span className="ml-1 text-gray-400 text-sm">
				{value.toFixed(1)}
			</span>
		</div>
	);
};

export default MovieRating;