import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, CartFromRemove } = useContext(shopContext);
  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg font-medium">
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_product.map((item, id) => {
              if (cartItems[item.id]) {
                return (
                  <tr key={id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td className="text-center">{item.new_price}</td>
                    <td className="text-center">
                      <p className="border py-2 font-medium">
                        {" "}
                        {cartItems[item.id]}
                      </p>
                    </td>
                    <td className="text-center">
                      {item.new_price * cartItems[item.id]}
                    </td>
                    <td>
                      <img
                        className="mx-auto"
                        onClick={() => {
                          CartFromRemove(item.id);
                        }}
                        src={remove_icon}
                        alt="Remove"
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
            <hr />
          </tbody>
        </table>
      </div>
      <div className="flex gap-16 my-16">
        <div className="md:w-[50%] text-left">
          <h1 className="text-2xl font-semibold">Cart Total</h1>
          <div className="flex items-center justify-between my-4 text-base font-medium">
            <p>Subtotal</p>
            <p>$0</p>
          </div>
          <hr />
          <div className="flex items-center justify-between my-4 text-base font-medium">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex items-center justify-between my-2 text-xl font-medium">
            <p>Total</p>
            <p>$0</p>
          </div>
        </div>
        <div className="md:w-[50%]">
          <form>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-base font-medium mb-1">
                  If You Have a Promo Code Give it Here!
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-red-500 text-white join-item">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
