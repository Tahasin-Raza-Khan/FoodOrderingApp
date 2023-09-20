const Contact = () => {
  return (
    <div className="text-center m-auto">
      <h1 className="font-bold text-3xl text-center">Contact Us Page</h1>
      <form action="">
        <input
          className=" border border-black p-2 m-2 "
          type="text"
          placeholder="Name"
        />
        <input
          className=" border border-black p-2 m-2 "
          type="text"
          placeholder="Your Message"
        />
        <button
          className=" border border-black p-2 m-2 bg-green-400 rounded-md "
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
