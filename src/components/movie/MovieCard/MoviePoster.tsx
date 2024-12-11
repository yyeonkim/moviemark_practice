import Image from "next/image";

interface MoviePosterProps {
  src: string;
	alt: string;
}

const MoviePoster = ({ src, alt }: MoviePosterProps) => {
	return (
		<div className="relative aspect-[2/3] rounded-lg overflow-hidden">
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	);
};

export default MoviePoster;