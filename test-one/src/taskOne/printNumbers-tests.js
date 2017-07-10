import PrintNumbers from './printNumbers';
import Logger from '../helpers/logger';

import sinon from "sinon";
import { expect } from "chai";

describe('PrintNumbers', () => {
    let printNumbers;
    let sandbox;

    beforeEach(() => {
        printNumbers = new PrintNumbers();
        sandbox = sinon.sandbox.create();
    });
    afterEach(() => {
        sandbox.restore();
    })
    describe('printWithLogic', () => {
        beforeEach(() => {
           sandbox.spy(printNumbers, 'divisibleByThree');
           sandbox.spy(printNumbers, 'divisibleByFive');
           sandbox.stub(Logger.prototype, 'log', () => '');
        });
        it('calls divisibleByThree', () => {
            printNumbers.printWithLogic();
            expect(printNumbers.divisibleByThree).to.have.been.called;
        });
        it('calls divisibleByFive', () => {
            printNumbers.printWithLogic();
            expect(printNumbers.divisibleByFive).to.have.been.called;
        });
    });
    describe('divisibleByThree', () => {
       it('returns falsy for 0', () => {
           const result = printNumbers.divisibleByThree(0);
           expect(result).to.be.falsy;
       });
        it('returns falsy for 2', () => {
            const result = printNumbers.divisibleByThree(2);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 6', () => {
            const result = printNumbers.divisibleByThree(2);
            expect(result).to.be.truthy;
        });
    });
    describe('divisibleByFive', () => {
        it('returns falsy for 0', () => {
            const result = printNumbers.divisibleByFive(0);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 2', () => {
            const result = printNumbers.divisibleByFive(2);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 10', () => {
            const result = printNumbers.divisibleByFive(2);
            expect(result).to.be.truthy;
        });
    });
});
