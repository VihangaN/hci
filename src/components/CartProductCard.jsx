import React, { useEffect, useState } from "react";

export default ({ key, mykey, item, name, price, qty,img, removeItem, qtyRemover }) => {
  let [qtys, Setqtys] = useState(qty);


  useEffect(() => {
    qtyRemover(mykey-1,qtys);
  }, [qtys]);

  const qtychanger = (type, index) => {
    if (type) {
      console.log(index);
      Setqtys(++qtys);
    } else {
      Setqtys(--qtys);
    }
  }

  return (
    <div id="c_cardBase">
      <div id="c_card_container">
        <div id="c_card_img_container">
          <img
            id="c_img"
            src={img}
            alt=""
          />
        </div>

        <div id="c_card_product_details_container">
          <div id="c_card_des">{name}</div>
        </div>

        <div id="c_card_product_details_container2">
          <button id="card_round_btn" onClick={() => qtychanger(true, mykey)}><i class="ar-plus"></i></button>
          <input type="text" name="" value={qtys} id="c_card_number" />
          <button id="card_round_btn" onClick={() => qtychanger(false, mykey)}><i class="ar-minus"></i></button>
        </div>

        <div id="c_card_product_details_container3">
          <div id="c_card_price">LKR{price} </div>
        </div>

        <div id="c_card_product_details_container4">
          <button id="c_card_r_button" onClick={() => removeItem(item)}>
            <i class="ar-remove c_card_r_button_remove_icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
