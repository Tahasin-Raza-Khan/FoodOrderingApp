import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  const [showMore,setShowMore] =useState(false)
  return (
    <div className="border border-black p-2 m-2 bg-[#CAEDFF]">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible &&showMore ? (
        <button
          type="button"
          className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsVisible(false);
            setShowMore(false)
          }}
        >
          Hide
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsVisible(true);
            setShowMore(true)
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Show More
        </button>
      )}
      {isVisible && showMore && <p>{description}</p>}
    </div>
  );
};

const Cart = () => {
  const [sectionConfig, setSectionConfig] = useState(null);
  return (
    <div>
      <h1 className="font-bold text-2xl text-[#016A70] m-2 text-center">
        Welcome to the InstaMart Cart
      </h1>
      <Section
        title={"About InstaMart Cart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The"
        }
        isVisible={sectionConfig === "about"}
        setIsVisible={() => {
          setSectionConfig("about");
        }}
      />
      <Section
        title={"Team InstaMart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The"
        }
        isVisible={sectionConfig === "team"}
        setIsVisible={() => {
          setSectionConfig("team");
        }}
      />
      <Section
        title={"Carrers Section"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The"
        }
        isVisible={sectionConfig === "career"}
        setIsVisible={() => {
          setSectionConfig("career");
        }}
      />
    </div>
  );
};
export default Cart;
