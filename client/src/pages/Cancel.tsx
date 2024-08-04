import { Link } from "react-router-dom";
import Container from "../ui/Container";


const Cancel = () => {
  return <Container>
  <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
    <h2 className="text-2xl md:text-4xl font-bold text-center">
        "Your order payment is failed..."
    </h2>
    <p>
       you can view your Orders or continue
      Shopping with us
    </p>
    <div className="flex items-center gap-x-5">
      <Link to={"/cart"}>
        <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
          RePay
        </button>
      </Link>
      <Link to={"/"}>
        <button className="bg-black text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
          Continue Shopping
        </button>
      </Link>
    </div>
  </div>
</Container>;
};

export default Cancel;
