import React from "react";
import searchImg from "../images/search.png";
import Binitem from "./Binitem";

function Binbox({ onClickBinItem, bin1last, bin2last, currentBin }) {
  return (
    <div className="bin-box">
      <div className="search-box">
        <input placeholder="Search Bin" className="search-input" />
        <img src={searchImg} className="search-img" />
      </div>
      <div className="bin-item-container">
        <Binitem
          onClickBinItem={() => onClickBinItem(0)}
          value={bin1last}
          name="A_001"
          currentBin={currentBin}
          binid={0}
        />
        <Binitem
          onClickBinItem={() => onClickBinItem(1)}
          value={bin2last}
          name="B_001"
          currentBin={currentBin}
          binid={1}
        />
      </div>
    </div>
  );
}

export default Binbox;
