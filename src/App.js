import styles from "./App.module.css";
import Main from "./mainbox/main.js";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.Box}>
        <Main />
      </div>
    </div>
  );
}

export default App;
