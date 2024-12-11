const MovieListSkeleton = () => {
	return (
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{[...Array(12)].map((_, index) => (
					<div
						key={index}
						className="h-[450px] p-4 rounded-xl bg-gray-800 animate-pulse"
					>
						<div className="bg-gray-700 rounded-lg h-[340px] mb-6" />
						<div className="bg-gray-700 h-4 w-1/3 rounded mb-6" />
						<div className="bg-gray-700 h-4 w-1/3 rounded mb-6" />
						<div className="bg-gray-700 h-4 w-1/2 rounded mb-6" />
						<div className="bg-gray-700 h-4 w-1/4 rounded" />
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieListSkeleton;