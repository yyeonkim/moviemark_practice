import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
interface MovieDateProps {
  date: string;
}

const MovieDate = ({ date }: MovieDateProps) => {
	const calculatedDate = dayjs(date);
	const formatted = calculatedDate.format("YYYY년 MM월 DD일");

	return (
		<div className="text-caption text-gray-400 text-right">개봉일: {formatted}</div>
	);
};

export default MovieDate;