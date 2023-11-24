
import { useState } from "react";
import TipHeading from "../TipHeading/TipHeading";
import TipInput from "../../TipInput/TipInput";
import TipList from "../TipList/TipList";
import TipCalculateBtn from "../TipCalculateBtn/TipCalculateBtn";



const FinalTip = () => {
  const [list, setList] = useState([]);

  const listDataHandler = (listData) => {
    setList(prev => [listData, ...prev])
  }
  return (
    <div className='final_div'>
      <TipHeading />
      <TipInput onGetData={listDataHandler} />
      <TipList items={list} />
      <TipCalculateBtn items={list} />
    </div>
  )
}
export default FinalTip;
