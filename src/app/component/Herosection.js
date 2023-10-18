import Link from "next/link";
import React from "react";
import Styles from "../../app/style/herosec.module.css";
import Image from "next/image";

function Herosection({imgUrl, title}) {
  return (
    <main className={Styles.main}>
      <div className={Styles.background}>
      <h2>{title}</h2>
        <p className={Styles.texts}>
          This is paragraph tag where we added some texts,<br></br> We are working
          on <b>React</b> with <b>NextJS</b> framework.<br></br>
          Thank You.
        </p>
        <Link href="/movie">
          <button className={Styles.btn}>Click here</button>
        </Link>
      </div>
      <div className={Styles.img}>
        <Image src={imgUrl} width={300} height={300} alt="logo" />
      </div>
    </main>
  );
}

export default Herosection;
