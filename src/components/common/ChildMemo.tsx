/* eslint-disable react/display-name */
"use client";

import React from "react";

const Child = React.memo(({ value }: { value: number }) => {
	console.log("Child 렌더링");
	return <div>Value: {value}</div>;
});

export default Child;