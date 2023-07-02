import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Carousel from "../islands/Carusel.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Carousel></Carousel>
    </>
  );
}
