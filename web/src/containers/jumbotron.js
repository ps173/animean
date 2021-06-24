import React from "react";
import { Jumbo } from "../components";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbo.Container>
      {jumboData.map((item) => (
        <Jumbo key={item.id} direction={item.direction}>
          <Jumbo.Panel>
            <Jumbo.Title>{item.title}</Jumbo.Title>
            <Jumbo.SubTitle>{item.subTitle}</Jumbo.SubTitle>
          </Jumbo.Panel>
          <Jumbo.Panel>
            <Jumbo.Image src={item.image} alt={item.alt} />
          </Jumbo.Panel>
        </Jumbo>
      ))}
    </Jumbo.Container>
  );
}
