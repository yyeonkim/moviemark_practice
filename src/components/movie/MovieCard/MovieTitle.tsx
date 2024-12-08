interface MovieTitleProps {
  ko_title: string;
  en_title: string;
}

const MovieTitle = ({ ko_title, en_title }: MovieTitleProps) => {
	return (
		<div className="mb-4">
			<h1 className="mt-4 heading-1 font-medium text-white">{ko_title}</h1>
			<h3 className="mt-4 heading-3 font-medium text-white">{en_title}</h3>
		</div>
	);
};

export default MovieTitle;