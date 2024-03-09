
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={"https://live.staticflickr.com/3/2809/33354707111_28840a00d1_b.jpg"} title="Chicken Tikka" price="₹230" />
        <DishesCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdZcECQwDatUcRGqbdtfJP3bD5Yy4vNmOKA&s"} title="Panner Tikka" price="₹180" />
        <DishesCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-LiiJXA7lPRajcYyAKy7rKuVpXnTozcq9UxQWNY4ow&s"} title="Akka Masor" price="₹80" />
        <DishesCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8dNbu2yL3q3qms2ND1_rYiBsNMNIBeZcQltxeuGI0A&s"} title="Mutton Masala" price="₹220" />
        <DishesCard img={"https://recipe52.com/wp-content/uploads/2019/08/Chicken-Nihari-Recipe-instagram.jpg"} title="Chicken Nalli" price="₹180" />
        <DishesCard img={"https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg"} title="Jeera Rice" price="₹100" />
      </div>
    </div>
  );
};

export default Dishes;
