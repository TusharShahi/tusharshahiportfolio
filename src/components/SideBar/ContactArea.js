import React, { memo } from "react";
import styles from "./ContactArea.module.css";
import SocialMediaLink from "./SocialMediaLink";
import { emailLink, socialMediaLinks } from "../../tools/constants";

const ContactArea = memo(() => {
  const mailToLink = "mailto:" + emailLink;

  return (
    <div className={styles.contactArea}>
      <div className={styles.socialMediaBox}>
        <SocialMediaLink
          website="linkedin"
          link={socialMediaLinks["linkedin"].link}
          width={socialMediaLinks["linkedin"].width}
          height={socialMediaLinks["linkedin"].height}
        ></SocialMediaLink>
        <SocialMediaLink
          website="stack"
          link={socialMediaLinks["stack"].link}
          width={socialMediaLinks["stack"].width}
          height={socialMediaLinks["stack"].height}
        ></SocialMediaLink>
        <SocialMediaLink
          website="github"
          link={socialMediaLinks["github"].link}
          width={socialMediaLinks["github"].width}
          height={socialMediaLinks["github"].height}
        ></SocialMediaLink>
      </div>

      <div className={styles.emailAndPhoneBox}>
        <p>
          <a href={mailToLink}>{emailLink}</a>
        </p>
      </div>

      <div className={styles.copyrightBox}>
        <p> &copy; Tushar Shahi</p>
      </div>
    </div>
  );
});
ContactArea.type.displayName = "CONTACT_AREA";
export default ContactArea;
