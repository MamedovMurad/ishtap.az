import type { NextPage } from "next";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { removeFromCart } from "../redux/actions/todoAction";
import { IState } from "../redux/reducers/todoReducers";
import { IRootReducer } from "../redux/store/store";
interface posts {
  posts: number[];
}
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { posts }: IState = useSelector((state: IRootReducer) => state.todo);
  console.log(posts);

  return (
    <div className=" h-full max-h-full">
      {posts.map((e) => (
        <button className="p-5 bg-gray-200 m-5"
          onClick={() => {
            dispatch(removeFromCart(e));
          }}
          key={e}
        >
          {e}
        </button>
      ))}
      <div>
        <Link href="/about">
        <a >sfgjfdhgd</a>
        </Link>
        
        </div>
      </div>
  );
};

export default Home;
