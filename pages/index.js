import Head from "next/head";
import Image from "next/image";

// styles
import styles from "../styles/Home.module.css";

// local data
import coffeeStoresData from "../data/coffee-stores.json";

// components
import Banner from "../components/banner.component";
import Card from "../components/card.components";

// pre-rendering stores data
export async function getStaticProps() {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Corn</title>
        <meta
          name="description"
          content="Discover/Explore Coffee Shops Near You"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="Explore Nearby Stores"
          handleExplore={() => console.log("explore button clicked")}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            alt="hero"
            width={700}
            height={400}
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <div>
            <h2 className={styles.heading2}>Jaipur Stores</h2>
          </div>
        )}
        <div className={styles.cardLayout}>
          {props.coffeeStores.map((store) => (
            <Card
              name={store.name}
              imgUrl={store.imgUrl}
              href={`/coffee-store/${store.id}`}
              key={store.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
