import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full bg-black/70 absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
      <InfinitySpin 
        width='200'
        color="#ffffff"
      />
      <p className="text-white text-2xl font-semibold tracking-widest">
        Loading...
      </p>
    </div>
  );
};

export default Loading;

