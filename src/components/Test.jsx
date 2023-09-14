import ReactSearchBox from "react-search-box";
import SearchIcon from '@mui/icons-material/Search';
const Test =()=>{

  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  return (
    <>
    <h1>Testing ...</h1>
    <ReactSearchBox
     leftIcon={<SearchIcon/>}
     inputBorderColor="red"
     data={data}
    />
    </>
  )
}

export default Test;