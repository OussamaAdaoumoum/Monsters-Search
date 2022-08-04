import { Component } from "react";
import './search-box-styles.css';

class Search extends Component{
    render(){
        return(
            <div >
                <input className={`search-box ${this.props.className}`}
                type='search' 
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchChange}/>
            </div>
        );
    }
}


export default Search;








