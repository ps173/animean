import React from "react";
import { useContent } from "../hooks"
import { selectionMap } from '../utils'
import { BrowseContainer } from "../containers/BrowseContainer"

export default function Browse({ user }) {

    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionMap({ series, films })

    return (
        <BrowseContainer user={user} />
    )
}
