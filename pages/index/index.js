import styles from "./index.module.css";

function Index(props) {
  const { data } = props;
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <a target="_blank" href="/detail" className={styles.good_item} key={item.name}>
              <div className={styles.img}>
                <img src={item.imgUrl}></img>
              </div>
              <div>{item.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://www.lvpangpang.com/api/community/get");
  const result = await res.json();
  const data = [
    {
      name: "KAO/花王 爽快薄荷牙膏  165G",
      imgUrl: "//image.mihui365.com/bbc/middleImg/17080068501916604.jpg",
    },
    {
      name: "LG ON THE BODY SWEET LOVE 香水沐浴露 粉色 500G",
      imgUrl: "//image.mihui365.com/bbc/middleImg/7677611344437291.jpg",
    },
    {
      name: "【临期，22月8月4】SHISEIDO/资生堂 FINO渗透护发膜  230G ",
      imgUrl: "//image.mihui365.com/bbc/middleImg/32454493364902693.jpg",
    },
    {
      name: "KAO/花王 蒸汽眼罩  柚子香型 12片",
      imgUrl: "//image.mihui365.com/bbc/middleImg/16219758599435272.jpg",
    },
  ];

  return { props: { data } };
}

export default Index;
