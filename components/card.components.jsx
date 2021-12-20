import React from "react";
import Image from "next/image";
import Link from "next/link";

// classnames
import classNames from "classnames";

// style
import styles from "./card.module.css";

const Card = ({ name, imgUrl, href }) => {
  return (
    <Link href={href} passHref>
      <div className={classNames("glass", styles.cardLink)}>
        <div className={styles.container}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imgUrl}
              alt="coffee shop"
              width={260}
              height={160}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
