import React from "react";
import { useContent } from "../hooks"
import { selectionMap } from '../utils'

export default function Browse() {

    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionMap({ series, films })
    console.log(slides)

    return <div>Hello man videos will be here soon</div>;
}
