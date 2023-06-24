import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    console.log("chart", props);
    const dataPointValues = props.dataPonints.map((data) => data.value);
    console.log('dataPointValues',dataPointValues);
    const totalMax = Math.max(...dataPointValues);
    console.log(totalMax);

    return (
        <div className="chart">
        {props.dataPonints.map((dataPonint) => {
            return (
            <ChartBar
                key={dataPonint.label}
                label={dataPonint.label}
                value={dataPonint.value}
                maxValue={totalMax}
            />
            );
        })}
        </div>
    );
};
export default Chart;
