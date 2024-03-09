import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
         We are one of the Chiplun's oldest(56 years) and legendary resturant. As our name suggest "Shobhra"(in Sanskrit) represents <b>Gift from Paradise</b>. We give gifts to our customer but in the form of food
        </p>
      </div>
    </div>
  );
};

export default About;
