import { memo } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import ContactArea from "./SideBar/ContactArea";

const Layout = memo(({ children }) => {
  const router = useRouter();

  let mainClassName = ``;
  let showBottomContactArea = false;
  if (router.pathname !== "/") mainClassName += ` ${styles.shiftedMain}`;

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    showBottomContactArea = true;
  }
  const pageNotFound = router.pathname !== "/404";

  return (
    <div>
      {pageNotFound && <Header></Header>}
      <div className={styles.ContentWrapperBox}>
        {pageNotFound && <SideBar></SideBar>}
        <main className={mainClassName}>{children}</main>
      </div>
      {pageNotFound && showBottomContactArea && (
        <div className={styles.BottomContactBox}>
          <ContactArea></ContactArea>
        </div>
      )}
    </div>
  );
});
Layout.type.displayName = "LAYOUT";
export default Layout;
