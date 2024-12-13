import { Dispatch, SetStateAction } from "react";

import BaseInput from "../common/Input/BaseInput";

interface MovieSearchInputProps {
    searchQuery: string; // 영화 검색어
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

function MovieSearchInput({
    searchQuery,
    setSearchQuery,
}: MovieSearchInputProps) {
    return (
        <BaseInput
            name="title"
            value={searchQuery}
            placeholder="Enter the movie title"
            containerClassName="mx-5 mb-10"
            fullWidth={false}
            onChange={(e) => {
                setSearchQuery(e.target.value);
            }}
        />
    );
}

export default MovieSearchInput;
