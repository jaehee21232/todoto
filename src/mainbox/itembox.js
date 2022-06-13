import React, { useRef, useState } from "react";
import styles from "./itembox.module.css";
import TodoItem from "./todoitem.js";

function Items({ value, chvalue, onRemove }) {
  return (
    <div className={styles.items_box}>
      <div className={styles.lentodo}>TODO: {value.length}</div>
      {value.map((item) => (
        <TodoItem item={item} key={item.id} value={value} chvalue={chvalue} />
      ))}
    </div>
  );
}

export default Items;
