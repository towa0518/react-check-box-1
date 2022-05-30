import React, { useState } from "react";
import "./styles.css";

const InputSelectBox = () => {
  // 現在選択されているチェックボックスの状態 selectedValue と
  // selectedValue の状態を更新する関数 setSelectedValue
  // selectedValue の状態の初期値は HTML
  // const [状態変数, 状態を変更するための関数] = useState("状態の初期値");
  const [selectedValue, setSelectedValue] = useState("HTML");

  // selectedValue の状態(どのオプションが選択されているかの状態)を
  // 更新する handleChange 関数を宣言
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/* onChange で selectedValue が更新されて画面上の表示が変化する */}
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>

      {/* onChange で selectedValue の状態が value の値に更新される */}
      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
