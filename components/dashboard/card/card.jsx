import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Spending Amount</span>
        <span className={styles.number}>100K</span>
        <span className={styles.detail}>
          <span>
            12%
          </span>{" "}
          than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;