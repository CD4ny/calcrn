import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷'
}

export function useCalc() {



    const lastOperation = useRef<Operator>();

    const [formula, setFormula] = useState('')
    const [preOp, setPreOp] = useState('0')
    const [postOp, setPostOp] = useState('0')

    const buildNumber = (number: string) => {
        if (number !== '.' && (postOp === '0' || postOp === '-0')) {
            if (number === '0')
                return;
            setPostOp(number)
            return;
        }
        if (number === '.') {
            if (postOp.includes('.'))
                return
        }
        setPostOp(postOp + number)
        console.log(postOp);
        return;
    }

    const clean = () => {
        setPostOp('0');
    }

    const cleanAll = () => {
        setPreOp('0');
        setFormula('0');
    }
    const remove = () => {
        if (postOp.length > 1)
            setPostOp();
        else
            setPostOp('0');

        return;
        console.log(postOp);

    }
    const ABS = () => {
        if (postOp.startsWith('-'))
            setPostOp(postOp.replace('-', ''));
        else
            setPostOp('-' + postOp);
    }

    useEffect(() => {

        setFormula(preOp);
    }, [preOp])



    return {
        //props
        formula,
        preOp,
        postOp,
        lastOperation,

        //Method
        remove,
        ABS,
        buildNumber,
        clean,
        cleanAll,
    }

}