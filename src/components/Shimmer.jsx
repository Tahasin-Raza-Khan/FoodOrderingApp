export const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap bg-[#016A70]">
        {Array.from({ length: 14 }).map((el, i) => {
          return (
            <div
              key={i}
              className="w-[203px] p-[10px] m-[7px] bg-[#928b8d] h-[30rem] shadow-xl rounded-md"
            >
              {" "}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Shimmer;
