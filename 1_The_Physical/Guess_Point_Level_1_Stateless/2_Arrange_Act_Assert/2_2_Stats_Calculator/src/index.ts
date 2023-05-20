export interface StatsCalculatorReturn {
    minimum: number;
    maximum: number;
    average: number;
    length: number;
}

export interface StatsCalculatorProps {
    list: number[];
}

export class StatsCalculator {
    private props: StatsCalculatorReturn;
    private constructor(props: StatsCalculatorProps) {
        this.props = {
            average: this.calculateAverage(props.list),
            maximum: this.calculateMaximum(props.list),
            minimum: this.calculateMinimum(props.list),
            length: 6
        };
    }

    static new(props: StatsCalculatorProps) {
        return new StatsCalculator(props);
    }

    get average() {
        return this.props.average;
    }

    get maximum() {
        return this.props.maximum;
    }

    get minimum() {
        return this.props.minimum;
    }

    get length() {
        return this.props.length;
    }

    private calculateAverage(list: number[]) {
        return +(list.reduce((prevNumber, currNumber) => (prevNumber + currNumber)) / list.length).toFixed(12)
    }

    private calculateMaximum(list: number[]) {
        return list.reduce((prevNumber, currNumber) => {
            return prevNumber > currNumber ? prevNumber : currNumber;
        }, -Infinity)
    }

    private calculateMinimum(list: number[]) {
        return list.reduce((prevNumber, currNumber) => {
            return prevNumber < currNumber ? prevNumber : currNumber
        }, Infinity)
    }
}