import A from "./A.js";
import Head from "next/head";
import styles from "../styles/MainContainer.module.scss";

const MainContainer = ({ children, keywords, title }) => {
    console.log(styles);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta keywords={"lol, kek, next.js " + keywords}></meta>
      </Head>
      <div className={styles.navbar}>
        <A href={"/"} text={"Main page"} />
        <A href={"/users"} text={"Users list"} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
