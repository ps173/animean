import React from "react";
import { useContent } from "../hooks";
import { selectionMap } from "../utils";
import { BrowseContainer } from "../containers/BrowseContainer";

export default function Browse({ user }) {
    const { series } = useContent("series");
    const slides = selectionMap({ series });
    console.log("slides - ", slides);

    return <BrowseContainer user={user} />;
}
