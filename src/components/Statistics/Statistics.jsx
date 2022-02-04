
// import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, countPositiveFeedbackPercentage }) => {
    return(
        <>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {Math.floor(countPositiveFeedbackPercentage)}%</p>
        </>
    );
}

export default Statistics;
