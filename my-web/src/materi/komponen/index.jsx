import React from "react";
import ClassComponent from "./pembelajaran/ClassComponent";
import FunctionalComponent from "./pembelajaran/functionalComponent";




export default class komponen extends React.Component {
    render() {
        return(
            <div>
                <ClassComponent nama = "Ristmi Daffa klass komponen props"/>
                <FunctionalComponent/>
               

            </div>
        )
    }
}