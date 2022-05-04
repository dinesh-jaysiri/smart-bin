import React, { useEffect, useState } from "react";
import Binbox from "./Binbox";
import Chartbox from "./Chartbox";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

function DashboardPage(props) {
  const [bin1Times, setBin1Times] = useState([]);
  const [bin1Values, setBin1Values] = useState([]);
  const [bin2Times, setBin2Times] = useState([]);
  const [bin2values, setBin2Values] = useState([]);
  const [currentBin, setCurrenBin] = useState(0);
  const [currentTime, setCurrentTime] = useState([]);
  const [currentValue, setCurrentValeu] = useState([]);

  useEffect(() => {
    genaratedata(0);
    genaratedata(1);
  }, []);
  const genaratedata = (currentBin) => {
    const bin1Ref = ref(db, "Bins/A_001");
    const bin2ref = ref(db, "Bins/B_001");
    const urls = [bin1Ref, bin2ref];
    let temptime = [];
    let tempValue = [];
    onValue(urls[currentBin], (snapshot) => {
      let data = snapshot.val();

      for (const [key, value] of Object.entries(data).slice(0, 19)) {
        temptime.push(key);
        tempValue.push(Object.entries(value)[0][1]);
      }
      if (currentBin === 0) {
        setBin1Times(temptime);
        setBin1Values(tempValue);
        setCurrentTime(temptime);
        setCurrentValeu(tempValue);
      } else {
        setBin2Times(temptime);
        setBin2Values(tempValue);
      }
      tempValue = [];
      temptime = [];
    });
  };

  const onClickBinItem = (num) => {
    console.log("onClick bin itme");
    if (num === 0) {
      setCurrentValeu(bin1Values);
      setCurrentTime(bin1Times);
      setCurrenBin(0);
    } else {
      setCurrentValeu(bin2values);
      setCurrentTime(bin2Times);
      setCurrenBin(1);
    }
  };
  console.log(bin1Values[bin1Values.length-1])

  return (
    <div className="page-container">
      <div className="page-name">Dashboard</div>
      <div className="box-container">
        <Binbox
          onClickBinItem={onClickBinItem}
          bin1last={bin1Values[bin1Values.length - 1]}
          bin2last={bin2values[bin2values.length - 1]}
          currentBin={currentBin}
        />
        <Chartbox times={currentTime} values={currentValue} />
      </div>
    </div>
  );
}

export default DashboardPage;
