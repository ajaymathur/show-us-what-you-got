import printNumbers from './printNumbers';
import Logger from '../helpers/logger';

import sinon from "sinon";
import { expect } from "chai";

describe('PrintNumbers', () => {
    let PrintNumbers;
    let sandbox;

    beforeEach(() => {
        PrintNumbers = new printNumbers();
        sandbox = sinon.sandbox.create();
    });
    afterEach(() => {
        sandbox.restore();
    })
    describe('printWithLogic', () => {
        beforeEach(() => {
           sandbox.spy(PrintNumbers, 'divisibleByThree');
           sandbox.spy(PrintNumbers, 'divisibleByFive');
           sandbox.stub(Logger.prototype, 'log', () => '');
        });
        it('calls divisibleByThree', () => {
            PrintNumbers.printWithLogic();
            expect(PrintNumbers.divisibleByThree).to.have.been.called;
        });
        it('calls divisibleByFive', () => {
            PrintNumbers.printWithLogic();
            expect(PrintNumbers.divisibleByFive).to.have.been.called;
        });
    });
    describe('divisibleByThree', () => {
       it('returns falsy for 0', () => {
           const result = PrintNumbers.divisibleByThree(0);
           expect(result).to.be.falsy;
       });
        it('returns falsy for 2', () => {
            const result = PrintNumbers.divisibleByThree(2);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 6', () => {
            const result = PrintNumbers.divisibleByThree(2);
            expect(result).to.be.truthy;
        });
    });
    describe('divisibleByFive', () => {
        it('returns falsy for 0', () => {
            const result = PrintNumbers.divisibleByFive(0);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 2', () => {
            const result = PrintNumbers.divisibleByFive(2);
            expect(result).to.be.falsy;
        });
        it('returns falsy for 10', () => {
            const result = PrintNumbers.divisibleByFive(2);
            expect(result).to.be.truthy;
        });
    });
});
