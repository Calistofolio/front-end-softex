import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Image } from "./components/image";
import { ItemList } from "./components/itemList";
import { Paragraph } from "./components/paragraph";
import { Square } from "./components/square";
import { Title } from "./components/title";
import { useState } from "react";


export default function Home() {
  return (
    <div className="">
      <Square></Square>
      <Title></Title>
      <Button></Button>
      <ItemList></ItemList>
      <Image></Image>
      <Paragraph></Paragraph>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
