interface MovieDateProps {
  date: string;
}

const MovieDate = ({ date }: MovieDateProps) => {
	return (
		<div className="text-white mt-4">{date}</div>
	);
};

export default MovieDate;