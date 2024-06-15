import Card from "@/components/dashboard/card/card";
// import { cards } from "../lib/data";
import styles from "@/components/dashboard/dashboard.module.css";
import Chart from "@/components/dashboard/chart/chart";
import Transactions from "@/components/dashboard/transactions/transactions";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";


const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
            <Card/>
            <Card />
            <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;