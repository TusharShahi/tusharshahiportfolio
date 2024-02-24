import Image from "next/image";
import React, { memo } from "react";
import { socialMediaIconLink } from "../../tools/constants";
import styles from "./ContactArea.module.css";

const SocialMediaLink = memo(({ website, link, width, height }) => {
  let socialMediaIconLinkWordsArray = socialMediaIconLink.split("/");
  socialMediaIconLinkWordsArray[socialMediaIconLinkWordsArray.length - 1] =
    website + ".svg";
  const componentSocialMediaIconLink = socialMediaIconLinkWordsArray.join("/");

  const altText = website + " link";

  return (
    <div className={styles.SocialMediaLink}>
      <div className={styles.MediaIconBox}>
        <a href={link} rel="noopener noreferrer">
          <Image
            src={componentSocialMediaIconLink}
            alt={altText}
            width={width}
            height={height}
            quality={5}
            layout="fixed"
            priority
          ></Image>
        </a>
      </div>
    </div>
  );
});

SocialMediaLink.type.displayName = "SOCIALMEDIALINK";
export default SocialMediaLink;
