import classes from './testFunc.module.css'
import {Other} from "./other";

export const TestFunc = () => {
    return <p className={classes.testFunc}>
        hello
        <Other/>
    </p>
}