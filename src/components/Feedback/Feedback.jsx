
import s from "./Feedback.module.css";

// const CounterC = ({ counter }) => <p className={s.count}>{counter}</p>;

const Feedback = ({handleChange}) => (
    

    <>
        <div className={s.container}>
            <button id="good" onClick={handleChange} className={s.btn} type="button">
                Good
            </button>
            <button id="neutral" onClick={handleChange} className={s.btn} type="button">
                Neutral
            </button>
            <button id="bad" onClick={handleChange} className={s.btn} type="button">
                Bad
                </button>
        </div>
    </>
);
  
export default Feedback;