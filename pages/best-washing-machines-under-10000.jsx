import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import { data } from "../data/washingMachinesUnder10000";

export default function bestWashingMachinesUnder10000({ data }) {
  return (
    <Layout priceUnder="10,000">
      <Head>
        <title>Best Washing Machines Today Under 10,000 - BestElectro</title>
        <meta name="description" content="Discover today's top washing machines under 10,000. Make informed choices with expert reviews" />
      </Head>

      <div>
        {data?.map((washingMachineData, i) => (
          <ProductCard
            key={i}
            id={i + 1}
            washingMachineData={{
              orderNumber: i + 1,
              ...washingMachineData,
            }}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { data },
  };
}
