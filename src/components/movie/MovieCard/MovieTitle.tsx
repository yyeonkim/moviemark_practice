interface MovieTitleProps {
  ko_title: string;
  en_title: string;
}

const MovieTitle = ({ ko_title, en_title }: MovieTitleProps) => {
	return (
		<div>
			<h1 className="text-body font-bold text-white">{ko_title}</h1>
			<h3 className="text-body-small font-medium text-white">{en_title}</h3>
		</div>
	);
};

export default MovieTitle;