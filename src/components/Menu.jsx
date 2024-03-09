import DishesCard from "../layouts/DishesCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={"https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg"} title="Chicken Nihari" price="₹260" />
        <DishesCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJBGB0GzUWcWAtOhe9Y0pIzB_M1gmTT_KpI5qp5JrSA&s"} title="Mutton Khemma" price="₹210" />
        <DishesCard img={"https://www.tastycircle.com/wp-content/uploads/2014/06/kerala-parotta.jpg"} title="Malabar Paratha" price="₹20" />
      </div>
    </div>
  );
};

export default Menu;
