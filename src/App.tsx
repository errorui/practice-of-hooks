import { FC, useEffect, useState } from 'react';
import usewindowsize from './hook';
import './style.css';
import { BiBookmarkPlus, BiCheckDouble } from 'react-icons/bi';
export const App: FC<{ name: string }> = ({ name }) => {
  const [post, setpost] = useState(null);

  const [quantity, setquantity] = useState({
    price: 1,
    name: 'raj',
  });

  const price = 5;
  let tprice = quantity.price * price;

  const handleclick = () => {
    const updateprice = quantity.price + 1;
    setquantity({
      ...quantity,
      price: updateprice,
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${quantity.price}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setpost(data);
      } catch (e) {}
    };
    fetchdata();

    return () => {
      controller.abort();
    };
  }, [quantity]);

  const size = usewindowsize();
  return (
    <div>
      <h1>
        size of window is {size} <br /> <BiBookmarkPlus />
      </h1>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
      {post &&
        post?.images.map((i, index) => {
          return <img src={i} alt="" key={index} width="200px" height="" />;
        })}

      <button className="p-2" onClick={handleclick}>
        add <BiCheckDouble className="font1" />
      </button>
      <p>total price for {quantity.name}</p>

      <p>{tprice}</p>
    </div>
  );
};
