import Head from "next/head";
import Hero from "./components/homepage/Hero";
import Services from "./components/homepage/Services";
import WorkWithUs from "./components/homepage/WorkWithUs";
import Partners from "./components/homepage/Partners";
import Wrapper from "./components/layout/Wrapper";


export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>NOVO-SG</title>
        <meta name="novo-sg" content="novo-sg-shipping-line" />
      </Head>

      <main
     style={{ marginTop: "70px" }}
      >
        <Hero />
        <Services />
        {/* <ServiceDetails/> */}
        <WorkWithUs />
        {/* <Partners /> */}
      </main>
    </Wrapper>
  );
}
