import React from 'react';
import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from './if-else';
import TernaryOp from './ternary-operator';
import WorkingWithFunctions from './working-with-functions';
import WorkingWithArrays from './working-with-arrays';
import TemplateLiterals from './template-literals';
import House from './House';
import Spread from './spread';
import Destructing from './destructing';
import FunctionDestructing from './function-destructing';

function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOp />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <TemplateLiterals />
            <House />
            <Spread />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}
export default JavaScript