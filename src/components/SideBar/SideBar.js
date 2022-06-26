import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import { displayPictureLink } from "../../tools/constants";
import ContactArea from "./ContactArea";
import styles from "./Sidebar.module.css";

const SideBar = memo((props) => {
  const router = useRouter();
  let showBottomContactArea = true;
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    showBottomContactArea = false;
  }

  let roleAttribute = null;
  if (props.aside) {
    roleAttribute = { role: "complementary" };
  }
  let mainHeading = `Hey! I am Tushar.
  I like to code.`;

  let sidebarClassName = `${styles.SideBar}`;
  if (router.pathname !== "/")
    sidebarClassName += ` ${styles.sideBarCompressed}`;

  return (
    <div className={sidebarClassName} {...roleAttribute}>
      <div className={styles.SideBarBox}>
        <div className={styles.welcomeArea}>
          <div className={styles.displayPhotoArea}>
            <Image
              src={displayPictureLink}
              alt="Display Picture"
              width={180}
              height={175}
              quality={45}
              priority
            ></Image>
          </div>

          <div className={styles.textArea}>
            <h1>{mainHeading}</h1>
          </div>
        </div>
        {showBottomContactArea && <ContactArea></ContactArea>}
      </div>
    </div>
  );
});
SideBar.type.displayName = "SIDEBAR";
export default SideBar;
