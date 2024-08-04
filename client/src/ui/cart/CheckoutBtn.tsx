/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "../../../config";
import { ProductProps } from "../../../type";
import { store } from "../../lib/store";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
  products: ProductProps[];
  totalAmt: number;
}

const CheckoutBtn = ({ products, totalAmt }: Props) => {
  const { currentUser } = store();
  const publicKey = "pk_test_51PdcNuRqn5ApsioThyA3m8epAwXTlxdSnpPXQ1uMJwUaFjREpacxrI6fEkdBr6H9jRmm0hediChEEWkRn998eaH2000B7k3JAA";
  const stripePromise = loadStripe(publicKey);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    console.log("stripe",stripe);
    

    const response = await fetch(`${config?.baseUrl}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: products,
        totalAmt,
        email: currentUser?.email,
      }),
    });

    const checkoutSession = await response?.json();
    // console.log("checkout", checkoutSession)
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Place Order
        </button>
      ) : (
        <p className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          Place Order
        </p>
      )}

      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">Need to sign in to place order</p>
      )
      }
    </div>
  );
};

export default CheckoutBtn;
