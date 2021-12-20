import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// classnames
import classNames from "classnames";

// style
import styles from "../../styles/coffee-store.module.css";

// data
import coffeeStoresData from "../../data/coffee-stores.json";

// pre-rendering data
export async function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = coffeeStoresData.map((store) => {
    return {
      params: { id: store.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const [votes, setVotes] = useState(0);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, imgUrl, address, neighbourhood } = props.coffeeStore;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            alt="coffee store front"
            width={600}
            height={360}
            className={styles.storeImg}
          />
        </div>
        <div className={classNames("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              alt="star rating"
              width="24"
              height="24"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              alt="star rating"
              width="24"
              height="24"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              alt="star rating"
              width="24"
              height="24"
            />
            <p className={styles.text}>{votes}</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={() => setVotes(votes + 1)}
          >
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
