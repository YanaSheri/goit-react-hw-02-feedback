
import s from "./Feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    console.log(options);
    return(
        <>
            <div className={s.container}>
                {options.map(option => {
                    return (
                        <button key={option} name={option} onClick={onLeaveFeedback} className={s.btn} type="button">
                            {option}
                        </button>
                    )
                })}
            </div>
        </>
    );
} 

export default FeedbackOptions;

// const FeedbackOptions = ({ onLeaveFeedback }) => {
//     return(
//         <>
//             <div className={s.container}>
//                 <button id="good" onClick={onLeaveFeedback} className={s.btn} type="button">
//                     Good
//                 </button>
//                 <button id="neutral" onClick={onLeaveFeedback} className={s.btn} type="button">
//                     Neutral
//                 </button>
//                 <button id="bad" onClick={onLeaveFeedback} className={s.btn} type="button">
//                     Bad
//                     </button>
//             </div>
//         </>
//     );
// } 