import styles from "./index.module.css";

function Index(props) {
  const { data } = props;
  return (
    <ul className={styles.box}>
      {data.map((item) => {
        return (
          <li
            className={styles.box_item}
            key={item.id}
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></li>
        );
      })}
    </ul>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://www.lvpangpang.com/api/community/get");
  const result = await res.json();
  const { data } = result;
  return { props: { data: data.list || [] } };
}

export default Index;
