import React from "react";
class Todolist extends React.Component {
    constructor() {
        super();
        this.state={
            id:1,
            text:"My Task",
            completed:true,
        }
    }
    toggleChange=()=>{
        // this.setState((prevState)=>{
        //     return{
        //         completed:!prevState.completed
        //     }
        // },()=>{
        //         console.log("this.state",this.state);
        //     });
        this.setState((prevState)=>({
            
                completed:!prevState.completed
            
        }),()=>{
                console.log("this.state",this.state);
            });
        
    }
    render(){
        const {text,completed} = this.state;
        // if(completed){
        //     return(
        //         <div>
        //     <input type="checkbox" checked={completed}></input>
        //        <label>{text}</label>
        //        </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //     <input type="checkbox" checked={completed}></input>
        //        <label>{text}</label>
        //        </div>
        //     )
        // }
        return(
                <div>
                  <input type="checkbox" checked={completed} onChange={this.toggleChange}></input>
                  <label>{text}</label>
                </div>
              );
    }
}
export default Todolist;