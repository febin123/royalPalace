
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customers Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={"https://lh3.googleusercontent.com/a/ACg8ocIoAT_vF_sV6q0hrfwB5Jb6QKU7nR1AMmH1TwuFI7xx=w90-h90-p-rp-mo-br100"} name="Glyan James" review="Best location, good for take away, good service." />
        <ReviewCard img={"https://lh3.googleusercontent.com/a-/ALV-UjVLRj6rzIt7z6JRwTACTiCbC0V3Xu-3tZgGcfV0oDnpR9av=w90-h90-p-rp-mo-ba5-br100"} name="Pratik Sawant" review="It's economic place to have good tasty food. You should try parotha here." />
        <ReviewCard img={"https://lh3.googleusercontent.com/a-/ALV-UjVaUcHpy8Qf5FsTNiWy-Lm2X_NnB55d1huF_i-n0yvfTxA=w90-h90-p-rp-mo-br100"} name="Chaitanaya Mali" review="Quick lunch or dinner🍽 spot on NH66. They serve veg, nonveg cuisine."/>
      </div>
    </div>
  );
};

export default Review;
