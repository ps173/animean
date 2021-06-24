import React from "react";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/BrowseContainer";

export default function Browse({ user }) {
  const { series } = useContent("series");

  return <BrowseContainer user={user} series={series} />;
}
