import Container from "./Container";
import LinkButton from "./LinkButton";
import banner from "../assets/PS51.png"

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img src={banner} alt="image" className="w-full h-full object-cover rounded-md" />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>
      <div className="absolute inset-0  flex flex-col justify-center px-10">
        <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-darkText">PlayStation 5</h2>
        <p className="text-base md:text-lg leading-6 font-semibold text-gray-700 max-w-[250px] mt-4">
        The cutting-edge gaming console you've been dreaming of is right here.
        </p>
        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
      </div>


    </Container>
  );
};

export default HomeBanner;

// bg-home-banner-bg py-24 md:py-40 lg:py-52 lg:px-10 bg-no-repeat bg-cover flex flex-col gap-6