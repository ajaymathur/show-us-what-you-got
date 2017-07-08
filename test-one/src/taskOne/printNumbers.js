import Logger from '../helpers/logger';
const logger = new Logger();
class PrintNumbers {
    printWithLogic() {
        let result;
        for(let i = 0; i <= 100; i++) {
            result = '';
            if(this.divisibleByThree(i)) {
                result += 'Boss';
            }
            if(this.divisibleByFive(i)) {
                result += 'Hog';
            }
            logger.log(result || i);
        }
    }

    divisibleByThree(number) {
        return number && (number % 3 === 0);
    }

    divisibleByFive(number) {
        return number && (number % 5 === 0);
    }
}

export default PrintNumbers;
