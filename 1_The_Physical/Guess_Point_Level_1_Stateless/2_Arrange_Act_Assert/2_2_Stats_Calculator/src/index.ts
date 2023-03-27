export class StatusCalculator {
    private props: number[];

    private constructor(props: number[]) {
        this.props = props
        if (!this.validArray()) {
            throw new Error('Not a valid number')
        }
    }

    static new(props: number[]) {
        return new StatusCalculator(props)
    }

    get minimumValue() {
        return this.props.reduce((accumulated, nextNumber) => accumulated < nextNumber ? accumulated : nextNumber)
    }

    get maximumValue() {
        return this.props.reduce((accumulated, nextNumber) => accumulated > nextNumber ? accumulated : nextNumber)
    }

    get numberOfElements() {
        return this.props.length;
    }
    
    get averageValue() {
        return 2
    }

    private validArray() {
        for (const number of this.props) {
            if (!Number.isInteger(number)) return false;
        }

        return true;
    }
}
