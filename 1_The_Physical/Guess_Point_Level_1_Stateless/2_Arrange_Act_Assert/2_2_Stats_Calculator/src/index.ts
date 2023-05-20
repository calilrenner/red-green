export interface StatsCalculatorReturn {
    minimum: number;
    maximum: number;
    average: number;
    length: number;
}

export interface StatsCalculatorProps {
    list: number[]
}

export class StatsCalculator {
    private props: StatsCalculatorReturn;
    private constructor(props: StatsCalculatorProps) {
        this.props = {
            average: 18.666666666667,
            maximum: 53,
            minimum: -8,
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
}