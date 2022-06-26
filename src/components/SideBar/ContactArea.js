import React, { memo } from "react";
import styles from "./ContactArea.module.css";
import SocialMediaLink from "./SocialMediaLink";
import {
  /*phoneNumber ,*/ emailLink,
  socialMediaLinks
} from "../../tools/constants";

const ContactArea = memo(() => {
  const mailToLink = "mailto:" + emailLink;

  return (
    <div className={styles.contactArea}>
      <div className={styles.socialMediaBox}>
        <SocialMediaLink
          website="linkedin"
          link={socialMediaLinks["linkedin"]}
        ></SocialMediaLink>
        <SocialMediaLink
          website="instagram"
          link={socialMediaLinks["instagram"]}
        ></SocialMediaLink>
        <SocialMediaLink
          website="github"
          link={socialMediaLinks["github"]}
        ></SocialMediaLink>
      </div>

      <div className={styles.emailAndPhoneBox}>
        <p>
          <a href={mailToLink}>{emailLink}</a>
        </p>
        {/*<p><a href={telNumberLink}>{phoneNumber}</a></p>*/}
      </div>

      <div className={styles.copyrightBox}>
        <p> &copy; Tushar Shahi</p>
      </div>
    </div>
  );
});
ContactArea.type.displayName = "CONTACTAREA";
export default ContactArea;
