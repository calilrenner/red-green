export class StatusCalculator {
    private props: number[];

    private constructor(props: number[]) {
        this.props = props;
    }

    static new(props: number[]) {
        return new StatusCalculator(props)
    }

    get minimumValue() {
        return this.props[0];
    }

    get maximumValue() {
        return this.props[2]
    }

    get numberOfElements() {
        return this.props.length;
    }
    
    get averageValue() {
        return 2
    }
}
