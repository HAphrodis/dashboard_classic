import Image from "next/image";
import Link from "next/link";
import styles from "../../../components/dashboard/products/products.module.css";
import Search from "../../../components/dashboard/search/search";
import Pagination from "../../../components/dashboard/pagination/pagination";
// import { fetchProducts } from "@/app/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>No</td>
            <td>Del. date</td>
            <td>item</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => ( */}
            <tr>
              <td>1</td>
              <td>15.06.2024</td>
              <td>Vegetables</td>
              <td>3 kg</td>
              <td>Frw 1000</td>
              <td>yes</td>
              <td>yes</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default ProductsPage;