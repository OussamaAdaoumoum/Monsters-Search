import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';
import Card from '../card/card.component';

class Cardlist extends Component{
    render(){
        const {monsters} = this.props;
        return( 
        <div className="card-list" key={monsters.id}>
            {monsters.map((monster)=>{
               // const {name, id, email} = monster;
                return(
                    <Card monster ={monster}/>
            )})}
            </div>
    )
}
}
export default Cardlist;

