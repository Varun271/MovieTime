import Header from "../components/Header";
import WatchListComponent from "../components/WatchListComponent"
import React from "react";

export default class WatchList extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <WatchListComponent/>
            </div>
        )
    }
}