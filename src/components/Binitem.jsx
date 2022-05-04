import React from "react";
import bin_full from "../images/bin_full.png";
import bin_empty from "../images/bin_empty.png";

function Binitem({
  value = 65,
  name = "bin 1 at university",
  onClickBinItem,
  binid,
  currentBin,
}) {
  return (
    <div onClick={onClickBinItem} className={binid===currentBin?"bin-item active":"bin-item"
     }>
      <img src={value > 85 ? bin_full : bin_empty} className="bin-img" />

      <div className="bin-data">
        <label className="bin-item__title">{name}</label>
        <label className="bin-item__value">{`${value}%`}</label>
      </div>
    </div>
  );
}

export default Binitem;
