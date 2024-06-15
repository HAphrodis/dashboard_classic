// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import styles from "@/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
//   const { id } = params;
//   const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {/* {user.username} */} Aprodis Hakuzwe
      </div>
      <div className={styles.formContainer}>
        <form action="{updateUser}" className={styles.form}>
          <input type="hidden" name="id" value=""/>
          <label>Username</label>
          <input type="text" name="username" placeholder="aphossy" />
          <label>Email</label>
          <input type="email" name="email" placeholder="aphoosy" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0890766" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="kacyiru" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="{user.isAdmin}">Yes</option>
            <option value={false} selected="{!user.isAdmin}">No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected="{user.isActive}">Yes</option>
            <option value={false} selected="{!user.isActive}">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;