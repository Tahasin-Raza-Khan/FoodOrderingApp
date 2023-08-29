export const Shimmer = () => {
  return (
    <>
      <div className="restro-card-list">
       {
        Array.from({length:10}).map((el,i)=>{
            return <div key={i} className="card" style={{ 
                backgroundColor:"#ccc", 
                border:"none"
            }}> </div>
        })
       }
      </div>
    </>
  );
};
export default Shimmer;
